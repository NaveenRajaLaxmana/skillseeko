import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import car2 from '../assets/images/car2.jpg'
import {FaRupeeSign} from 'react-icons/fa'
import {useRouter} from 'next/router'

let title = "Learn Python: The Complete Python Programming Course"
let instruct = "Avinash Jain,The Codex"
let price = "3699"

export const CartItems = () => {
    const router = useRouter()
    return (
        <div className='flex flex-row h-max w-full p-1 '>
                    <Image src={car2} width="180" height={"100"} className='w-[180px] h-[150px] object-cover' alt='Image'/>
                    <div className='flex flex-col px-2 space-y-1 cursor-pointer' onClick={() => router.push('/course')}>
                    <h3 className='font-semibold text-sm'>{title}</h3>
                    <p className='font-semibold text-sm'>{instruct}</p>
                    </div>
                    <p className='font-semibold text-base mx-2 flex flex-row'><FaRupeeSign /><span>{price}</span></p>
                    <button className='remove-btn px-3 py-1 h-max self-center text-white bg-black rounded-md outline-none border-none'>Remove</button>
                </div>
    )
}

const Cart = () => {
  return (
    <Layout title={"My Cart"}>
        <section className='cart-section min-h-screen w-full flex flex-col p-16'>
            <h2 className='font-extrabold text-lg text-start pl-12'>My Cart</h2>
            <div className='user-added-items mt-2 pt-3 h-full w-full flex flex-row relative'>
                <div className='cart-items h-full w-3/4 space-y-2'>
                    <CartItems />
                    <CartItems />
                </div>
                <div className='total-price w-1/4 h-max p-6'>
                    <h3 className='font-bold text-lg'>Total : </h3>
                    <h4 className='font-semibold text-xl mx-2 flex flex-row'><FaRupeeSign /><span>{price}</span></h4>
                    <button className='checkout-btn w-max px-3 py-1 font-bold text-lg outline-none border-none bg-blue text-white rounded-md'>Checkout</button>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Cart