import Image from 'next/image'
import car1 from '../../assets/images/car1.jpg'
import {FaStar,FaStarHalfAlt,FaRupeeSign,FaArrowLeft,FaArrowRight,FaDesktop,FaChartBar,FaDatabase,FaLaptop,FaCamera} from 'react-icons/fa'
import {IoMdColorPalette,IoMdMusicalNotes} from 'react-icons/io'
import {GiStrongMan} from 'react-icons/gi'
import {useState} from 'react'
import instructor from '../../assets/images/instructor-baaner.png'
import student from '../../assets/images/student-banner.png'
import {useRouter} from 'next/router'


const ListofCourses = () => {
    
    const [temp,setTemp] = useState(0)
   const changeTemplateLeft = (e) => {
    setTemp(temp+10)
   }
   const changeTemplateRight = (e) => {
    setTemp(temp-10)
   }
    const ar = new Array(10)
    for(let i=0;i<10;i++){
        ar[i] = i;
    }
  return (
    <section className="courses mt-6 lg:mt-16 ml-7 w-screen">
        <div className="lg:flex lg:flex-col hidden">
        <h2 className="font-bold text-2xl">A Broad Selection of Courses</h2>
        <h6>Choose from 185,000 online video courses with new additions published every month</h6>
        </div>
        <div className="hidden selection-boxes lg:flex flex-row justify-between my-3 max-w-[800px]">
            <h6 className="cursor-pointer font-semibold text-lg text-textGrey hover:text-black">Python</h6>
            <h6 className="cursor-pointer font-semibold text-lg text-textGrey hover:text-black">Excel</h6>
            <h6 className="cursor-pointer font-semibold text-lg text-textGrey hover:text-black">Web Development</h6>
            <h6 className="cursor-pointer font-semibold text-lg text-textGrey hover:text-black">JavaScript</h6>
            <h6 className="cursor-pointer font-semibold text-lg text-textGrey hover:text-black">Data Science</h6>
            <h6 className="cursor-pointer font-semibold text-lg text-textGrey hover:text-black">AWS Certification</h6>
            <h6 className="cursor-pointer font-semibold text-lg text-textGrey hover:text-black">Drawing</h6>
        </div>
        <div className="courses-items-categories p-7 w-11/12 border border-textGrey overflow-hidden relative">
            <div className={`course-slider p-2 flex flex-row space-x-8 relative`}>
                {ar.map(mp => <CourseBox key={mp} temp={temp}/>)}
                
            </div>
            <FaArrowLeft className='p-1 bg-black rounded-full text-white absolute left-0 top-2/4 cursor-pointer shadow-xl' onClick={changeTemplateLeft} size={30}/>
            <FaArrowRight className='p-1 bg-black rounded-full text-white absolute right-0 top-2/4 cursor-pointer shadow-xl' onClick={changeTemplateRight} size={30}/>
        </div>

        <div className='mt-11'>
            <h5 className='font-bold text-xl'>
            Students are viewing
            </h5>
            <div className={`course-slider p-2 flex flex-row space-x-8 relative w-11/12 overflow-hidden`}>
                {ar.map(mp => <CourseBox key={mp} temp={temp}/>)}
                
            </div>
        </div>

        <TopCategories />

        <div className='instructer-banner my-4 mx-3 min-h-[250px] flex flex-col lg:flex-row items-center justify-around h-[550px] w-full'>
            <div className='img-div h-5/6 bg-star-yellow w-2/6 flex justify-center items-center'>
                <Image src={instructor} className="object-cover object-center"/>
            </div>
            <div className='content-div h-5/6 flex flex-col justify-center'>
                <h4 className='font-bold text-xl'>
                Become an instructor
                </h4>
                <p className='text-sm max-w-xs'>
                Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                </p>
                <button className='outline-none border-none px-3 py-2 bg-black capitalize text-white w-max'>
                    start teaching today
                </button>
            </div>
        </div>

        <div className='student-banner my-4 mx-3 min-h-[250px] flex flex-col lg:flex-row items-center justify-around h-[550px] w-full'>
            <div className='img-div h-5/6 bg-company-color w-2/6 flex justify-center items-center'>
                <Image src={student} className="object-cover object-center"/>
            </div>
            <div className='content-div h-5/6 flex flex-col justify-center'>
                <h4 className='font-bold text-xl'>
                Become a Student
                </h4>
                <p className='text-sm max-w-xs'>
                Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                </p>
                <button className='outline-none border-none px-3 py-2 bg-black capitalize text-white w-max'>
                    start learning today
                </button>
            </div>
        </div>
    </section>
  )
}

const CourseBox =({temp}) => {
    const router = useRouter()
    return (
        <div className={`course-box flex flex-col h-auto max-w-max cursor-pointer translate-x-[${temp}px]`} onClick={() => router.push(`/course`)}>
            <Image src={car1} height="150px" width="220px"/>
            <h6 className='course-title-box font-semibold max-w-[220px]'>
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
const CatBox = ({cat}) => {
    return (
        <div className='flex flex-col'>
            <div className='bg-textGrey min-h-[200px] max-h-[300px] min-w-[200px] max-w-[300px]'>

            </div>
        </div>
    )
}
const TopCategories = () => {
    let categories = ["Design","Development","Marketing","IT and Software","Personal Development","Business","Photography","Music"] 
    return (
        <div className='top-categories m-4 m-w-screen h-auto'>
            <h4 className='capitalize font-bold text-2xl'>top categories</h4>
            <div className='flex flex-row flex-wrap justify-evenly w-full h-auto'>
                <div className='flex flex-col mt-2 cursor-pointer'>
                    <div className='bg-textGrey min-h-[200px] max-h-[400px] min-w-[200px] max-w-[500px] flex justify-center items-center'>
                        <IoMdColorPalette size={50} className="hover:scale-110"/>
                    </div>
                    <h6 className='font-semibold text-lg'>Design</h6>
                </div>

                <div className='flex flex-col cursor-pointer'>
                    <div className='bg-textGrey min-h-[200px] max-h-[400px] min-w-[200px] max-w-[500px] flex justify-center items-center'>
                        <FaDesktop size={50} className="hover:scale-110"/>
                    </div>
                    <h6 className='font-semibold text-lg'>Development</h6>
                </div>

                <div className='flex flex-col cursor-pointer'>
                    <div className='bg-textGrey min-h-[200px] max-h-[400px] min-w-[200px] max-w-[500px] flex justify-center items-center'>
                        <FaChartBar size={50} className="hover:scale-110"/>
                    </div>
                    <h6 className='font-semibold text-lg'>Marketing</h6>
                </div>

                <div className='flex flex-col cursor-pointer'>
                    <div className='bg-textGrey min-h-[200px] max-h-[400px] min-w-[200px] max-w-[500px] flex justify-center items-center'>
                        <FaDatabase size={50} className="hover:scale-110"/>
                    </div>
                    <h6 className='font-semibold text-lg'>IT and Software</h6>
                </div>

            </div>

            <div className='flex flex-row flex-wrap justify-evenly w-full h-auto mt-2'>
            <div className='flex flex-col cursor-pointer'>
                    <div className='bg-textGrey min-h-[200px] max-h-[400px] min-w-[200px] max-w-[500px] flex justify-center items-center'>
                        <GiStrongMan size={50} className="hover:scale-110"/>
                    </div>
                    <h6 className='font-semibold text-lg'>Personal Development</h6>
                </div>

                <div className='flex flex-col cursor-pointer'>
                    <div className='bg-textGrey min-h-[200px] max-h-[400px] min-w-[200px] max-w-[500px] flex justify-center items-center'>
                        <FaLaptop size={50} className="hover:scale-110"/>
                    </div>
                    <h6 className='font-semibold text-lg'>Business</h6>
                </div>

                <div className='flex flex-col cursor-pointer'>
                    <div className='bg-textGrey min-h-[200px] max-h-[400px] min-w-[200px] max-w-[500px] flex justify-center items-center'>
                        <FaCamera size={50} className="hover:scale-110"/>
                    </div>
                    <h6 className='font-semibold text-lg'>Photography</h6>
                </div>


                <div className='flex flex-col cursor-pointer'>
                    <div className='bg-textGrey min-h-[200px] max-h-[400px] min-w-[200px] max-w-[500px] flex justify-center items-center'>
                        <IoMdMusicalNotes size={50} className="hover:scale-110"/>
                    </div>
                    <h6 className='font-semibold text-lg'>Music</h6>
                </div> 
            </div>
        </div>
    )
}

 

export default ListofCourses