import { useState,useEffect,createContext, useContext, useReducer } from 'react'
import {useRouter} from 'next/router'
import { NEXT_URL } from '@/config/index'
import { useCheckLogin } from 'hooks/useGetCourse';
import {destroyCookie, setCookie} from 'nookies'



export const AuthContext = createContext();

export const useAuthUser = () => {
    return useContext(AuthContext)
}

export const registerUser = async (token,user,dispatch) => {
       localStorage.setItem('token',token)
       dispatch({
        type:"REGISTER",
        payload:user
       })
}

export const loginuser = async (token,loginUser,dispatch) => {
      localStorage.setItem('token',token)
      setCookie(null,'user',loginUser.token,{
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      dispatch({
        type:"LOGIN",
        payload:loginUser
      })
}

export const logout = async (dispatch) => {
    localStorage.removeItem('token')
    destroyCookie(null,'user')
      dispatch({
        type:"LOGOUT",
      })
}

export const buyCourseUser = async (courses,dispatch) => {
    dispatch({
        type: "BUY_COURSE",
        payload: courses
    })
}

export const checkUserLoggedIn = async () => {
    const{user:curuser,error}=useCheckLogin()
    if(curuser)return true;
    if(error)return false;
}

export const AuthProvider = ({children}) => {
    const AuthState = {
        user:null,
        error:null
    }

    const [state,dispatch] = useReducer(AuthReducer,AuthState)

    return (
        <AuthContext.Provider value={{ state,dispatch }}>
            {children}
        </AuthContext.Provider>
    )

}


const AuthReducer = (state,action) => {
    switch(action.type)
    {
        case 'LOGIN':
            return {
                ...state,
                user:action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user:null
            }
        case 'REGISTER':
            return {
                ...state,
                user:action.payload
            }
        case "BUY_COURSE":
            return {
                ...state,
                user:{
                    ...state.user,
                    courselist:[...state.user.courselist,...action.payload]
                }
            }
        default:
            throw new Error(`Unsupported type of: ${action.type}`);
    }
}

export default AuthContext
