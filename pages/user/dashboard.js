import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import {useRouter} from 'next/router'
import car1 from '../../assets/images/car1.jpg'
import Image from 'next/image'
import {FaStar,FaStarHalfAlt,FaRupeeSign,FaArrowLeft,FaArrowRight,FaDesktop,FaChartBar,FaDatabase,FaLaptop,FaCamera} from 'react-icons/fa'
import nookies from 'nookies'
import client from 'apolloClient'
import { gql, useQuery } from '@apollo/client'
import { GET_COURSE } from '@/components/queries/CourseQueries'

const CourseBox =({course}) => {
  const router = useRouter()
  const {data,error} = useQuery(GET_COURSE,{
    variables:{id:course}
  })
  
  if(!data){
    return (
      <h2>no data</h2>
    )
  }
  return (
       <div className={`course-box flex flex-col h-auto max-w-max cursor-pointer shadow-md py-2`} onClick={() => router.push(`/course/list/${course}`)}>
          <Image src={data?.course.thumbnail} height="150px" width="220px" alt='Image'/>
          <h6 className='course-title-box font-semibold max-w-[220px] px-1'>
          {data?.course.name}
          </h6>
          <p className='course-instructor-box capitalize text-xs'>{data?.course.instructor?.name}</p>
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
              {data?.course.price}
          </h6>
          <div className='w-max p-1 mt-1 bg-best-seller-box'>
              <h6 className='text-best-seller-text font-semibold text-xs'>Best Seller</h6>
          </div>
      </div>
  )
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const Home = ({data}) => {
  let courses = data.user.courselist

  return (
    <Layout title={"Home"}>
      <section className='user-homepage'>
        <div className='my-learnings w-full min-h-screen flex flex-col py-6 px-7'>
          <h2 className='font-extrabold text-lg self-start '>My Learnings</h2>
          <div className='h-full w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-1'>
            {courses.map((course,ind) => <CourseBox key={ind} course={course}/>)}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context)
{
    const cookies = nookies.get(context)
    if(!cookies.user)
    {
      return {
        redirect:{
          destination:'/login',
          permanent:false
        }
      }
    }

    const {data} = await client.query({
      query: gql `
        query user{
          user{
            id
            email
            username
            token
            courselist
          }
        }
      `,
      context:{
        headers:{
          authorization: `Bearer ${cookies.user}`
        }
      }
    })

    return {
      props:{
        data
      }
    }

}

export default Home