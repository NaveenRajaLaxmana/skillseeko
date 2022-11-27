import React from 'react'
import Layout from '../../components/Layout'
import { CartItems } from '../cart'
import {FaRupeeSign} from 'react-icons/fa'
import Link from 'next/link'
import nookies from 'nookies'

const TutorHome = ({cookies}) => {
  console.log(cookies)
  return (
    <Layout title={"Your Courses"}>
        <section className='cart-section min-h-screen w-full flex flex-col p-16'>
          <div className='flex flex-row justify-between items-center'>
            <h2 className='font-extrabold text-lg text-start pl-12'>My Courses</h2>
            <Link href={`/tutor/addcourse`}><p className='bg-blue text-white font-semibold text-sm py-3 px-3 rounded-lg cursor-pointer'>Add Course</p></Link>
          </div>
            <div className='user-added-items mt-2 pt-3 h-full w-full flex flex-row relative'>
                <div className='cart-items h-full w-3/4 space-y-2'>
                    <CartItems />
                    <CartItems />
                </div>
            </div>
        </section>
    </Layout>
  )
}

export async function getServerSideProps(cxt)
{
  const cookies = nookies.get(cxt)

  if(!cookies.tutor)
    {
        return{
            redirect:{
                destination:'/tutor/login',
                permanent:false
            }
        }
    }

    return {
      props:{
        cookies
      }
    }
}

export default TutorHome