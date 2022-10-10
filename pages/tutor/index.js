import React from 'react'
import Layout from '../../components/Layout'
import { CartItems } from '../cart'
import {FaRupeeSign} from 'react-icons/fa'
let price="50"

const TutorHome = () => {
  return (
    <Layout title={"Your Courses"}>
        <section className='cart-section min-h-screen w-full flex flex-col p-16'>
            <h2 className='font-extrabold text-lg text-start pl-12'>My Courses</h2>
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

export default TutorHome