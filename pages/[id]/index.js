import React from 'react'
import Layout from '../../components/Layout'
import {useRouter} from 'next/router'
import car1 from '../../assets/images/car1.jpg'
import Image from 'next/image'
import {FaStar,FaStarHalfAlt,FaRupeeSign,FaArrowLeft,FaArrowRight,FaDesktop,FaChartBar,FaDatabase,FaLaptop,FaCamera} from 'react-icons/fa'

const CourseBox =() => {
  const router = useRouter()
  return (
      <div className={`course-box flex flex-col h-auto max-w-max cursor-pointer shadow-md py-2`} onClick={() => router.push(`/course/list/123`)}>
          <Image src={car1} height="150px" width="220px"/>
          <h6 className='course-title-box font-semibold max-w-[220px] px-1'>
          Learn Python: The Complete Python Programming Course
          </h6>
          <p className='course-instructor-box capitalize text-xs'>Avinash Jain,The Codex</p>
          <div className='ratings-box flex flex-row items-center space-x-0.5'>
          <h6 className='font-semibold text-star-yellow'>4.4</h6>
          <FaStar size={13} color={"#e59819"}/>
          <FaStar size={13} color={"#e59819"}/>
          <FaStar size={13} color={"#e59819"}/>
          <FaStar size={13} color={"#e59819"}/>
          <FaStarHalfAlt size={13} color={"#e59819"}/>
          <p className='rated-people text-xs self-center'>(2906)</p>
          </div>
          <h6 className='font-bold flex flex-row items-center'>
              <FaRupeeSign size={13}/>
              3399
          </h6>
          <div className='w-max p-1 mt-1 bg-best-seller-box'>
              <h6 className='text-best-seller-text font-semibold text-xs'>Best Seller</h6>
          </div>
      </div>
  )
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const Home = () => {
  return (
    <Layout title={"Home"}>
      <section className='user-homepage'>
        <div className='my-learnings w-full min-h-screen flex flex-col py-6 px-7'>
          <h2 className='font-extrabold text-lg self-start '>My Learnings</h2>
          <div className='h-full w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-1'>
            {arr.map(key => <CourseBox key={key}/>)}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home