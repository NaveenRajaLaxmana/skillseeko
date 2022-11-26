import React,{useRef} from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { useMutation } from '@apollo/client'
import { INSTRUCTOR_REGISTER } from '@/components/mutations/tutorMutation'
import { registerTutor, useAuthTutor } from 'contexts/TutorContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const TutorRegister = () => {
  const email = useRef()
  const password = useRef()
  const confpassword = useRef()
  const phone = useRef()
  const name = useRef()
  const router = useRouter()

  const {state,dispatch} = useAuthTutor()

  const [addInstructor] = useMutation(INSTRUCTOR_REGISTER,{
    variables:{name,email,password,phone},
    update(cache,{data:{addInstructor}}){
      let token = JSON.stringify(`Bearer ${addInstructor.token}`)
      registerTutor(token,addInstructor,dispatch)
    }
  })

  const onSubmit = async(e) =>{
    e.preventDefault()
    if(password.current.value.trim()!==confpassword.current.value.trim())
    {
      return
    }
    try {
      
      await addInstructor({variables:{name:name.current.value,email:email.current.value,password:password.current.value,phone:phone.current.value}})
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
          <h1 className='font-bold text-xl self-center'>Tutor SignUp</h1>
          <form className='login-form flex flex-col h-4/6 justify-center space-y-5 relative' onSubmit={onSubmit}>
          <div>
            <label className='font-semibold text-lg'>Name :</label>
            <input ref={name} className='font-normal text-lg w-full min-h-[40px] self-center border border-black outline-none rounded-md pl-2' placeholder='Name'type={"text"}/>
            </div>
            <div>
            <label className='font-semibold text-lg'>Phone :</label>
            <input ref={phone} className='font-normal text-lg w-full min-h-[40px] self-center border border-black outline-none rounded-md pl-2' placeholder='Phone'type={"text"}/>
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
          <Link href={'/tutor/login'}><a className='font-semibold text-sm text-blue'>Already have an tutor account?</a></Link>
        </div>
        <ToastContainer />
      </section>
    </Layout>
  )
}

export default TutorRegister