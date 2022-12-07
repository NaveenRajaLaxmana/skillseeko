import {useState} from 'react'
import Layout from "../../components/Layout"
import Star from "../../components/Star"
import Link from 'next/link'
import Image from 'next/image'
import instimage from '../../assets/images/img-inst.jpg'
import {AiFillExclamationCircle} from 'react-icons/ai'
import {GiWorld} from 'react-icons/gi'
import {FaRegListAlt,FaPlayCircle,FaRupeeSign,FaRegClock,FaInfinity,FaMobileAlt,FaStar} from 'react-icons/fa'
import {IoIosArrowDown,IoMdPeople} from 'react-icons/io'
import {MdOutlineOndemandVideo,MdOutlineArticle,MdCloudDownload} from 'react-icons/md'
import {GrCertificate} from 'react-icons/gr'
import client from 'apolloClient'
import { gql } from '@apollo/client'
import { addtoCart, useCart } from 'contexts/CartContext'



let reviews = [
  {
    id:1,
    name:"Karnan",
    star:5,
    review:"damn basic for beginners. will help you to clear out your all concepts with great examples"
  },
  {
    id:2,
    name:"Arjunan",
    star:4,
    review:"help you to clear out your all concepts with great examples"
  }
]
const Review = ({review}) => {
  return (
    <div className='review-layout w-3/5 h-max p-2 flex lg:flex-row flex-col'>
      <div className='pro-image rounded-full w-[50px] h-[50px] relative basis-12 mx-2'>
        <Image src={instimage} width="50" height="50" className='w-full h-full absolute rounded-full object-cover' alt='Image'/>
      </div>
      <div className='details basis-3/4 flex flex-col'>
        <h2 className='font-bold text-lg'>{review.name}</h2>
        {review.star>3 && <Star />}
        <p className='font-normal'>{review.review}</p>
      </div>
    </div>
  )
}
let Instructors =[
  {
    name:"Balram",
    company:"CEO OF Dwarka",
    image: instimage,
    instpoint:{
      students:3,
      star:5,
      courses:2
    },
    description:`Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational platform focused on bringing the best programming content to hundreds of thousands of students around the world.

    His programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather. Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. He's launched a plethora of applications in the App Store amassing thousands of downloads. Additionaly, he's competed and won in several hackathons around the world including PennApps and NWHacks.
    
    Avinash has a passion to teach - his enthusiasm and love for programming is evident in every video. For the past 7 years he's been an instructor on Udemy and he loves motivating and enabling others to pursue their programming dreams. He hopes to help students realize the power of programming and jumpstart their careers through his courses.
    
    Checkout TheCodex for all of his courses, fantastic discounts, and any guidance or help. `
  },
  {
    name:"Krishna",
    company:"Founder OF Dwarka",
    image: instimage,
    instpoint:{
      students:15,
      star:5,
      courses:2
    },
    description:`Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational platform focused on bringing the best programming content to hundreds of thousands of students around the world.

    His programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather. Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. He's launched a plethora of applications in the App Store amassing thousands of downloads. Additionaly, he's competed and won in several hackathons around the world including PennApps and NWHacks.
    
    Avinash has a passion to teach - his enthusiasm and love for programming is evident in every video. For the past 7 years he's been an instructor on Udemy and he loves motivating and enabling others to pursue their programming dreams. He hopes to help students realize the power of programming and jumpstart their careers through his courses.
    
    Checkout TheCodex for all of his courses, fantastic discounts, and any guidance or help. `
  }
]
let category = "Development"
let title = "Learn Python: The Complete Python Programming Course"
let description = "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!"
let instructer = ["Krishna","Balram"]
let month = "8"
let year = "2022"
let hours = "14"
let article = "1"
let downloads = "3"

export let courseTopics = [{name:"Front-End Web Development",list:[{name:"HTML Learning"},{name:"Css learning"}]},{name:"BackEnd Development",list:[{name:"nodejs learning"},{name:"java learning"}]},{name:"FullStack Development",list:[{name:"react learning"},{name:"express learning"}]},{name:"Devops",list:[{name:"ansible learning"},{name:"kubernetes learning"}]}]
let requirements = ["Macintosh (OSX)/ Windows(Vista and higher) Machine","Internet Connection"]
let coursedescription = `Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?

If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!

Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years.

The best part? Python is one of the easiest coding languages to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an absolute pro at programming!

This course will cover all the basics and several advanced concepts of Python. We’ll go over:

The fundamentals of Python programming

Writing and Reading to Files

Automation of Word and Excel Files

Web scraping with BeautifulSoup4

Browser automation with Selenium

Data Analysis and Visualization with MatPlotLib

Regex parsing and Task Management

GUI and Gaming with Tkinter

And much more!

If you read the above list and are feeling a bit confused, don’t worry! As an instructor and student on Udemy for almost 4 years, I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over 200,000+ students from over 200 countries jumpstart their programming journeys through my courses.`

export const Coursetopic = (course) => {
  return courseTopics.map(top => <TopicsSection key={top.name} topic={top} course={course}/>)
}

export const TopicsSection = ({topic=null,width=null,course=null}) => {
  const [show,setShow] = useState(false)
  const {name:title,list} = topic
  
  return (
    <div className={`section-title ${width ? width : `w-3/5`} border border-y-best-seller-box flex flex-col space-y-1 cursor-pointer duration-500`}>
      <div className="flex flex-row space-x-1 py-2 px-3 items-center bg-textGrey" onClick={() => setShow(show => !show)}>
            <IoIosArrowDown size={16}/>
          <h5 className="lg:text-lg text-xs font-bold">{title}</h5>
      </div>
   
      {list.length>0 &&<div className={`font-normal text-sm px-3 flex-col ${show ? 'flex' : 'hidden'}`}>
        {course?.videos.map((vid,ind) => <div key={ind} className="flex flex-row space-x-2"><FaPlayCircle size={16}/> <p>{vid.name}</p></div>)}
      </div>}
    
  </div>
  )
}



const InstructorDetails = ({instructor}) => {
  return (
    <div className='instructor-panel my-2 flex flex-col'>
      <Link href={`/instructor/${instructor.name}`}><a className='font-bold text-blue text-lg underline'>{instructor.name}</a></Link>
      <h6 className='text-textGrey my-1'>{instructor.company}</h6>
      <div className='profile flex flex-row items-center my-2 space-x-6'>
        <div className='pro-image h-[100px] w-[100px] relative rounded-full'>
          <Image src={instructor.image} width="100" height="100" className='h-full w-full object-cover object-center rounded-full' alt='Image'/>
        </div>
        <div className='flex flex-col'>
          <p className='space-x-1 flex flex-row'><FaStar size={16}/><span>{instructor.instpoint.star} instructor ratings</span></p>
          <p className='space-x-1 flex flex-row'><IoMdPeople size={16}/><span>{instructor.instpoint.students} students</span></p>
          <p className='space-x-1 flex flex-row'><FaPlayCircle size={16}/><span>{instructor.instpoint.courses} Courses</span></p>
        </div>
      </div>
      <p className='max-w-[75ch]'>{instructor.description}</p>
    </div>
  )
}

const CourseView = ({course}) => {

  const {state,dispatch} = useCart()

  console.log(useCart())

  const onCartAdd = () => {
    addtoCart(course,dispatch)
  }
  
  return (
    <Layout title={title} description={description}>
      <section className="couse-view-banner relative">
      <div className="lg:px-[100px] lg:py-[50px] p-3 bg-black flex flex-col w-full items-center lg:items-start">
        <div className="course-details flex flex-col w-2/3 lg:items-start">
        <h6 className="text-category-color font-semibold text-sm cursor-pointer mb-3 flex-wrap self-start">{category}</h6>
        {/* <Image src={car1} className="w-2/4 h-1/3 object-cover lg:hidden"/> */}
        <div className="course thumbnail h-1/3 w-full relative flex flex-col items-center justify-center cursor-pointer lg:hidden">
        <Image src={course.thumbnail} width={350} height={250} className="w-full h-full object-cover" alt='Image'/>
        <FaPlayCircle size={60} className="z-10 absolute text-white"/>
        <p className="font-semibold text-white text-base capitalize absolute bottom-7">Preview this course</p>
        </div>
           

            <h1 className="font-bold text-2xl text-white mb-2 mt-2">{course.name}</h1>
            <h2 className="font-bold text-lg text-white mb-2 max-w-lg">{course.description}</h2>

            <Star />
            <p className="text-white my-2">Created By{" "}
              {/* {instructer.map(mp => <Link key={mp} href={`/instructor/${mp}`}><a className="text-category-color underline">{mp+", "}</a></Link>)} */}
              <Link href={`/instructor/${course.instructor.name}`}><a className="text-category-color underline">{course.instructor.name}</a></Link>
            </p>
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4 my-3">
              <p className="text-sm text-white flex flex-row space-x-1">
              <AiFillExclamationCircle size={18}/>
              <span>Last Updated {month}/{year}</span>
              </p>
              <p className="text-sm text-white flex flex-row space-x-1">
              <GiWorld size={18}/>
              <span>English</span>
              </p>

              <p className="text-sm text-white flex flex-row space-x-1">
              <FaRegListAlt size={18}/>
              <span>English</span>
              </p>
            </div>

            <div className="price-div mt-2 flex flex-col lg:hidden">
          <h5 className="font-bold text-white text-lg flex flex-row items-center">
            <FaRupeeSign size={26}/>
            <span className="font-bold text-3xl">{course.price}</span>
          </h5>
          <p className="text-sm text-offer-ends-color font-bold flex flex-row items-center space-x-1">
          <FaRegClock className="text-sm"/>
          <span>1 day left at this price!</span>
          </p>

          <button className="button w-full py-3 text-center flex justify-center items-center bg-blue text-white font-bold text-lg m-2 self-center" onClick={onCartAdd}>Add to Cart</button>
          <p className="my-3 text-center text-sm text-white">
          30-Day Money-Back Guarantee
          </p>
        </div>


        <div className="lg:hidden coupon-div self-center mt-3 w-full relative justify-center flex flex-col items-center">
          <button className="apply-coupon underline font-semibold text-sm mb-2 text-white">
            Apply Coupon
          </button>
          <div className="coupon-apply-div h-[45px] w-4/5 relative flex flex-row">
            <input placeholder="Enter Coupon" className="w-9/12 h-full border outline-none border-white pl-2 uppercase text-sm"/>
            <button className="h-full w-1/4 bg-black border-white border text-white font-bold text-sm">Apply</button>
          </div>
        </div>

        
        </div>

        
      </div>

      <div className="hidden course-price-details h-max pb-[50px] bg-white shadow-lg w-1/4 fixed right-14 top-[110px] lg:flex flex-col">
        <div className="course thumbnail h-1/3 w-full relative flex flex-col items-center justify-center cursor-pointer">
        <Image src={course.thumbnail} width={250} height={150} className="w-full h-full object-cover" alt='Image'/>
        <FaPlayCircle size={60} className="z-10 absolute text-white"/>
        <p className="font-semibold text-white text-base capitalize absolute bottom-7">Preview this course</p>
        </div>

        <div className="price-div m-2 flex flex-col">
          <h5 className="font-bold text-black text-lg flex flex-row items-center">
            <FaRupeeSign size={26}/>
            <span className="font-bold text-3xl">{course.price}</span>
          </h5>
          <p className="text-sm text-offer-ends-color flex flex-row items-center space-x-1">
          <FaRegClock className="text-sm"/>
          <span>1 day left at this price!</span>
          </p>

          <button className="button w-full py-3 text-center flex justify-center items-center bg-blue text-white font-bold text-lg m-2 self-center" onClick={onCartAdd}>Add to Cart</button>
          <p className="my-3 text-center text-sm">
          30-Day Money-Back Guarantee
          </p>
        </div>

        <div className="course-details ml-6 flex flex-col space-y-1">
          <h6 className="text-base font-black">This course includes:</h6>
          <p className="flex flex-row items-center space-x-1">
            <MdOutlineOndemandVideo size={16}/>
            <span className="text-sm">{course.hours} hours on-demand video</span>
          </p>

          <p className="flex flex-row items-center space-x-1">
            <MdOutlineArticle size={16}/>
            <span className="text-sm">{article} article</span>
          </p>

          <p className="flex flex-row items-center space-x-1">
            <MdCloudDownload size={16}/>
            <span className="text-sm">{downloads} downloadable resources</span>
          </p>

          <p className="flex flex-row items-center space-x-1">
            <FaInfinity size={16}/>
            <span className="text-sm">Full lifetime access</span>
          </p>

          <p className="flex flex-row items-center space-x-1">
            <FaMobileAlt size={16}/>
            <span className="text-sm">Access on mobile and TV</span>
          </p>

          <p className="flex flex-row items-center space-x-1">
            <GrCertificate size={16}/>
            <span className="text-sm">Certificate of completion</span>
          </p>
        </div>

        <div className="coupon-div self-center mt-3 w-full relative justify-center flex flex-col items-center">
          <button className="apply-coupon underline font-semibold text-sm mb-2">
            Apply Coupon
          </button>
          <div className="coupon-apply-div h-[45px] w-4/5 relative flex flex-row">
            <input placeholder="Enter Coupon" className="w-9/12 h-full border outline-none border-black pl-2 uppercase text-sm"/>
            <button className="h-full w-1/4 bg-black text-white font-bold text-sm">Apply</button>
          </div>
        </div>
      </div>


    </section>
    <section className="what-u-learn flex flex-col my-2 mx-2 border border-highest-rated p-8 h-max lg:ml-20 lg:p-3 lg:max-w-lg justify-self-center">
      <h3 className="font-bold text-lg mb-2">What you'll learn</h3>
      <div className="div-container flex flex-col lg:flex-row lg:space-x-2.5">
        <ul className="flex flex-col text-sm space-y-1.5 lg:max-w-md">
          <li className="before:content-['✔']">You will build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</li>
          <li className="before:content-['✔']">You will master both front and back-end development, becoming a full-stack developer by the end of the course.</li>
          <li className="before:content-['✔']">Build fully-fledged websites and web apps for your startup or business.</li>
          <li className="before:content-['✔']">Master frontend development with React</li>
          <li className="before:content-['✔']">Learn professional developer best practices.</li>
        </ul>

        <ul className="flex flex-col text-sm space-y-1.5 lg:max-w-md">
          <li className="before:content-['✔']">You will learn the latest technologies, including Javascript, React, Node and even Web3 development.</li>
          <li className="before:content-['✔']">After the course you will be able to build ANY website you want.</li>
          <li className="before:content-['✔']">Work as a freelance web developer.</li>
          <li className="before:content-['✔']">Master backend development with Node</li>
        </ul>
      </div>
    </section>

    <section className="course-content my-2 ml-20 lg:max-w-screen-lg">
      <h3 className="font-bold text-2xl">Course Content</h3>
      <p className="text-sm my-1">41 sections . 12h total length</p>
      {Coursetopic(course)}
    </section>

    <section className='requirement-section my-2 ml-20'>
      <h2 className='font-bold text-lg'>Requirements</h2>
      <ul className='flex flex-col list-disc pl-5'>
        {requirements.map(it => <li key={it}>{it}</li>)}
      </ul>
    </section>

    <section className='description my-2 ml-20 lg:max-w-3xl lg:text-justify max-w-sm text-center'>
      <h2 className='font-bold text-lg'>Description</h2>
      <p className='max-w-[150ch]'>{coursedescription}</p>
    </section>

    <section className='Instructor-detail h-auto my-5 ml-20'>
      <h2 className='font-bold text-lg'>Instructors</h2>
      {Instructors.map(inst => <InstructorDetails key={inst.name} instructor={inst}/>)}
    </section>

    <section className='reviews my-2 ml-20'>
      <h2 className='font-bold text-xl'>Reviews</h2>
      {reviews.map(review => <Review key={review.id} review={review}/>)}
    </section>
    </Layout>
  )
}

export async function getServerSideProps(context){
  const {data,error} = await client.query({
    variables:{id:context.query.id},
    query:gql`
    query getcourse($id:String){
      course(id:$id){
          id
            ownerid
            name
            price
            hours
            thumbnail
            description
            instructor{
            name
            id
            }
            videos {
            id
            url
            name
            }
            priceid
      }
    }
    `
  })
  if(error)console.log(error)
 
  return {
    props:{
      course:data.course
    }
  }
}

export default CourseView