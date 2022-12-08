import React, { useCallback } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import car2 from '../assets/images/car2.jpg'
import {FaRupeeSign} from 'react-icons/fa'
import {useRouter} from 'next/router'
import { useCart } from 'contexts/CartContext'
import getStripe from 'getStripe'
import { buyCourseUser, useAuthUser } from 'contexts/AuthContext'
import { useMutation } from '@apollo/client'
import { USER_BUY_COURSE } from '@/components/mutations/userMutaion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let title = "Learn Python: The Complete Python Programming Course"
let instruct = "Avinash Jain,The Codex"
let price = "3699"

export const CartItems = ({course}) => {
    const router = useRouter()
    return (
        <div className='flex flex-row h-max w-full p-1 '>
                    <Image src={course.thumbnail} width="180" height={"100"} className='w-[180px] h-[150px] object-cover' alt='Image'/>
                    <div className='flex flex-col px-2 space-y-1 cursor-pointer' onClick={() => router.push('/course')}>
                    <h3 className='font-semibold text-sm'>{course.name}</h3>
                    <p className='font-semibold text-sm'>{course.instructor.name}</p>
                    </div>
                    <p className='font-semibold text-base mx-2 flex flex-row'><FaRupeeSign /><span>{course.price}</span></p>
                    <button className='remove-btn px-3 py-1 h-max self-center text-white bg-black rounded-md outline-none border-none' onClick={() => console.log()}>Remove</button>
                </div>
    )
}

const Cart = () => {
    const {state,dispatch} = useCart()
    const {state:user,dispatch:userDispatch} = useAuthUser()
    const router = useRouter()

    let cour = state.cart.map(cr => cr.id)

    let email='',courses=[]
  const [buyCourse] = useMutation(USER_BUY_COURSE,{
    variables:{email,courses},
    update(cache,{data:{buyCourse}}){
      console.log('success')
    }
  }) 

  const call = async () => {
    try {
      await buyCourse({variables:{email:user.user.email,courses:cour}})
    } catch (error) {
      console.log(error)
    }
  }
    
const onCheckout = async () => {
    if(user.user==null || user.user==undefined)
    {
        toast('Please login',{type:'warning'})
        return
    }
    const items = state?.cart?.map(val => {
        return {
            ...val,
            quantity:1
        }
    })
    try {
        call()
        buyCourseUser(cour,userDispatch)
        const res = await fetch('/api/checkout_sessions/',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(items)
        })
        const data = await res.json()
        const {id} = data
        console.log(data)
        if(res.status==200)
        {
            // await call()
            // router.push(`456`)
        }
        const stripe = await getStripe()
        await stripe.redirectToCheckout({sessionId: data.id})
        
    } catch (error) {
        toast(error.toString(),{type:'error'})
    }
    
}

  return (
    <Layout title={"My Cart"}>
        <section className='cart-section min-h-screen w-full flex flex-col p-16'>
            <h2 className='font-extrabold text-lg text-start pl-12'>My Cart</h2>
            <div className='user-added-items mt-2 pt-3 h-full w-full flex flex-row relative'>
                <div className='cart-items h-full w-3/4 space-y-2'>
                    {state?.cart?.map((item,ind) => <CartItems key={ind} course={item} />)}
                </div>
                <div className='total-price w-1/4 h-max p-6'>
                    {/* <h3 className='font-bold text-lg'>Total : </h3> */}
                    {/* <h4 className='font-semibold text-xl mx-2 flex flex-row'><FaRupeeSign /><span>{price}</span></h4> */}
                    <button className='checkout-btn w-max px-3 py-1 font-bold text-lg outline-none border-none bg-blue text-white rounded-md' onClick={onCheckout}>Checkout</button>
                </div>
            </div>
            <ToastContainer />
        </section>
    </Layout>
  )
}

export default Cart