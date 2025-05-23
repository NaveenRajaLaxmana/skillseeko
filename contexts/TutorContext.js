import { useState,useEffect,createContext, useContext, useReducer } from 'react'
import {destroyCookie, setCookie} from 'nookies'


export const TutorContext = createContext();

export const useAuthTutor = () => {
    return useContext(TutorContext)
}

export const registerTutor = async (token,tutor,dispatch) => {
       localStorage.setItem('token',token)
       dispatch({
        type:"REGISTER",
        payload:tutor
       })
}

export const logintutor = async (token,loginTutor,dispatch) => {
      localStorage.setItem('token',token)
      setCookie(null,'tutor',loginTutor.token,{
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      dispatch({
        type:"LOGIN",
        payload:loginTutor
      })
}

export const logoutTutor = async (dispatch) => {
    localStorage.removeItem('token')
    destroyCookie(null,'tutor')
      dispatch({
        type:"LOGOUT",
      })
}

export const TutorAuthProvider = ({children}) => {
    const AuthState = {
        tutor:null,
        error:null
    }

    const [state,dispatch] = useReducer(AuthReducer,AuthState)

    return (
        <TutorContext.Provider value={{ state,dispatch }}>
            {children}
        </TutorContext.Provider>
    )

}


const AuthReducer = (state,action) => {
    switch(action.type)
    {
        case 'LOGIN':
            return {
                ...state,
                tutor:action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                tutor:null
            }
        case 'REGISTER':
            return {
                ...state,
                tutor:action.payload
            }
        default:
            throw new Error(`Unsupported type of: ${action.type}`);
    }
}

export default TutorContext
