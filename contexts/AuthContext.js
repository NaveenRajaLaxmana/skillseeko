import { useState,useEffect,createContext, useContext, useReducer } from 'react'
import {useRouter} from 'next/router'
import { NEXT_URL } from '@/config/index'
import { useCheckLogin } from 'hooks/useGetCourse';



export const AuthContext = createContext();

export const useAuthUser = () => {
    return useContext(AuthContext)
}

export const register = async (user) => {
       
}

export const loginuser = async (token,loginUser,dispatch) => {
      console.log(loginUser)
      localStorage.setItem('token',token)
      dispatch({
        type:"LOGIN",
        payload:loginUser
      })
}

export const logout = async (dispatch) => {
    localStorage.removeItem('token')
      dispatch({
        type:"LOGOUT",
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
        default:
            throw new Error(`Unsupported type of: ${action.type}`);
    }
}

export default AuthContext
