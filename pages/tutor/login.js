import React, { useRef } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { useAuthTutor } from 'contexts/TutorContext'
import { useMutation } from '@apollo/client'
import { INSTRUCTOR_LOGIN } from '@/components/mutations/tutorMutation'
import {logintutor} from '../../contexts/TutorContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const TutorLogin = () => {
  const email = useRef()
  const password = useRef()
  const {state,dispatch} = useAuthTutor()
  const router = useRouter()

  const [loginTutor] = useMutation(INSTRUCTOR_LOGIN,{
    variables:{email,password},
    update(cache,{data:{loginTutor}}){
      let token = JSON.stringify(`Bearer ${loginTutor.token}`)
      logintutor(token,loginTutor,dispatch)
    }
  })

  const onSubmit = async(e) =>{
    e.preventDefault()
    if(password.current.value.trim()=="" || email.current.value.trim()=="")
    {
      return
    }
    try {
      
      await loginTutor({variables:{email:email.current.value,password:password.current.value}})
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
          <h1 className='font-bold text-xl self-center'>Tutor Login</h1>
          <form className='login-form flex flex-col h-4/6 justify-center space-y-5 relative' onSubmit={onSubmit}>
            <div>
            <label className='font-semibold text-lg'>Email Id :</label>
            <input ref={email} className='font-normal text-lg w-full min-h-[40px] self-center border border-black outline-none rounded-md pl-2' placeholder='Email Id'type={"email"}/>
            </div>
            <div>
            <label className='font-semibold text-lg'>Password :</label>
            <input ref={password} className='font-normal text-lg w-full min-h-[40px] self-center border border-black outline-none rounded-md pl-2' placeholder='Password' type={"password"}/>
            </div>
            <button type={"submit"} className='login-btn py-2 px-3 bg-blue rounded-lg'>Login</button>
          </form>
          <Link href={'/tutor/register'}><a className='font-semibold text-sm text-blue'>Don't have an tutor account?</a></Link>
        </div>
        <ToastContainer />
      </section>
    </Layout>
  )
}

export default TutorLogin