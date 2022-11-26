import React,{useRef} from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { registerUser, useAuthUser } from 'contexts/AuthContext'
import { useMutation } from '@apollo/client'
import { USER_REGISTER } from '@/components/mutations/userMutaion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router'

const Register = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const confpassword = useRef()
  const router = useRouter()

  const {state,dispatch} = useAuthUser()

  const [register] = useMutation(USER_REGISTER,{
    variables:{username,password,email},
    update(cache,{data:{addUser}}){
      let token = JSON.stringify(`Bearer ${addUser.token}`)
      registerUser(token,addUser,dispatch)
      
    }
  })
  
  
  const onSubmit = async(e) =>{
    e.preventDefault()
    if(password.current.value.trim()!==confpassword.current.value.trim())
    {
      return
    }
    try {
      
      await register({variables:{username:username.current.value,password:password.current.value,email:email.current.value}})
        router.push('/569')
      
    } catch (error) {
      // console.log(error)
      if(error.toString().slice(7)=="Wrong credentials")
      {
        toast(error.toString(),{type:"error"})
      }else{
        toast(error.toString(),{type:"warning"})
      }
      
    }
  }

  return (
    <Layout title={"SkillSeeko"}>
      <section className='login-page min-h-screen w-screen flex justify-center'>
        <div className='login-box min-h-max w-[350px] space-y-4 h-max p-5 m-auto flex flex-col shadow-lg'>
          <h1 className='font-bold text-xl self-center'>SignUp</h1>
          <form className='login-form flex flex-col h-4/6 justify-center space-y-5 relative' onSubmit={onSubmit}>
            <div>
            <label className='font-semibold text-lg'>Username :</label>
            <input ref={username} className='font-normal text-lg w-full min-h-[40px] self-center border border-black outline-none rounded-md pl-2' placeholder='Username'type={"text"}/>
            </div>
            <div>
            <label className='font-semibold text-lg'>Email Id :</label>
            <input ref={email} className='font-normal text-lg w-full min-h-[40px] self-center border border-black outline-none rounded-md pl-2' placeholder='Email Id'type={"email"}/>
            </div>
            <div>
            <label className='font-semibold text-lg'>Password :</label>
            <input ref={password} className='font-normal text-lg w-full min-h-[40px] self-center border border-black outline-none rounded-md pl-2' placeholder='Password' type={"password"}/>
            </div>
            <div>
            <label className='font-semibold text-lg'>Confirm Password :</label>
            <input ref={confpassword} className='font-normal text-lg w-full min-h-[40px] self-center border border-black outline-none rounded-md pl-2' placeholder='Confirm Password' type={"password"}/>
            </div>
            <button type={"submit"} className='login-btn py-2 px-3 bg-blue rounded-lg'>SignUp</button>
          </form>
          <Link href={'/login'}><a className='font-semibold text-sm text-blue'>Already have an account?</a></Link>
        </div>
        <ToastContainer />
      </section>
    </Layout>
  )
}

export default Register