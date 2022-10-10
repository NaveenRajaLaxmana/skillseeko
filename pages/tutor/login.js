import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

const TutorLogin = () => {
  return (
    <Layout title={"SkillSeeko"}>
      <section className='login-page min-h-screen w-screen flex justify-center'>
        <div className='login-box min-h-max w-[350px] space-y-4 h-max p-5 m-auto flex flex-col shadow-lg'>
          <h1 className='font-bold text-xl self-center'>Tutor Login</h1>
          <form className='login-form flex flex-col h-4/6 justify-center space-y-5 relative'>
            <div>
            <label className='font-semibold text-lg'>Email Id :</label>
            <input className='font-normal text-lg w-full min-h-[40px] self-center border border-black outline-none rounded-md pl-2' placeholder='Email Id'type={"email"}/>
            </div>
            <div>
            <label className='font-semibold text-lg'>Password :</label>
            <input className='font-normal text-lg w-full min-h-[40px] self-center border border-black outline-none rounded-md pl-2' placeholder='Password' type={"password"}/>
            </div>
            <button type={"submit"} className='login-btn py-2 px-3 bg-blue rounded-lg'>Login</button>
          </form>
          <Link href={'/tutor/register'}><a className='font-semibold text-sm text-blue'>Don't have an tutor account?</a></Link>
        </div>
      </section>
    </Layout>
  )
}

export default TutorLogin