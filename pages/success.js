import Layout from '@/components/Layout'
import React, { useEffect, useRef } from 'react'
import {TiTick} from 'react-icons/ti'
import Party from 'party-js'

const Success = () => {
  const refr = useRef()
  useEffect(() => {
    Party.confetti(refr.current)
  })
  return (
    <Layout title={'Payment Success'}>
      <section className='h-full w-screen justify-center flex flex-row p-4'>
        <div ref={refr} className='mt-10 success-box h-[80px] w-[300px] rounded-lg bg-star-yellow p-1 flex flex-row space-x-1'>
          <TiTick size={35} color={'green'}/>
          <div className='flex flex-col'>
            <h3 className='font-bold text-lg text-black'>Thanks for your purchase!</h3>
            <p>Check your inbox for the receipt</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context)
{
   if(context.query?.session_id==null)
   {
      return {
        redirect:{
          destination:'/',
          permanent:false
        }
      }
   }
   return {
    props:{
      
    }
   }
}

export default Success