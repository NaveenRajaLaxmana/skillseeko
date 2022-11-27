import { useAuthTutor } from 'contexts/TutorContext'
import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'
import {useRouter} from 'next/router'
import nookies from 'nookies'
import Link from 'next/link'

const VideoAdd = ({setVideo,modulenamevideo,setmodule}) => {
    const [videoname,setVideoName] = useState('')
    const Change = (e) => {
        setVideo(vi => [...vi,{videoname,file:e.target.files[0],modulename:modulenamevideo }])
        // setmodule(val =}))
    }
    return (
        <div className='video-content-add w-full mt-1'>
                <input className='font-normal text-md w-full h-10 border corder-black outline-none rounded-lg pl-1' type={"text"} value={videoname} onChange={e => setVideoName(e.target.value)} placeholder={"Video Title"}/>
                <input className='font-normal text-md w-full h-10 outline-none rounded-lg mt-3 pl-1' onChange={e => Change(e)} type={"file"} placeholder={"Videos"}/>
            </div>
    )
}

const CourseModule = ({setmodule,setVideo}) => {
    const [count,setCount] = useState([])
    const [modulename,setModuleName] = useState('')
    // const [videos,setVideos]  = useState([])

    const addTomodule = () => {
        // setmodule(values => ({...values,modules:values.modules.push(videos)}))
    }
   
    return (
        <div className='module h-max py-2 w-full'>
            <input className='font-normal text-md w-full h-10 border corder-black outline-none rounded-lg pl-1' type={"text"} value={modulename} onChange={e => setModuleName(e.target.value)} placeholder={"Module Name"}/>
            <h6 className='font-semibold text-sm text-black'>Videos</h6>
            {count.length > 0 && count.map((v,i) => <VideoAdd key={i} setVideo={setVideo} modulenamevideo={modulename} setmodule={setmodule}/>)}
            <button className='px-2 py-1 bg-blue text-white text-sm mr-2 font-normal outline-none border-none' type={'button'} onClick={() => {setCount([...count,1]) }}>Add videos</button>
            <button className='px-2 py-1 bg-blue text-white text-sm font-normal outline-none border-none' type={'button'} onClick={() => setCount(count.slice(0,count.length-1))}>Remove videos</button>
            <button className='px-2 py-1 bg-blue text-white text-sm font-normal outline-none border-none' type={'button'} onClick={() => addTomodule()}>Confirm</button>
        </div>
    )
}

const AddCourse = ({cookies}) => {
    // const router = useRouter()
    const {state,dispatch} = useAuthTutor()
    
    // if(!state.tutor){
    //   return router.push('/tutor/login')
    // }
    const [countM,setCountM] = useState([1])
    const [values,setValues] = useState({
        courseName:'',
        description:'',
        price:"",
        hours:'',
        instructors:'',
        thumbnail:'',
        modules:[]
    })


    const [videos,setVideos] = useState([])
    
    // useEffect(() => {

    // },[countM])

    
    const uploadVideo = async(e) => {
        e.preventDefault()
        // if(video==null)return
        
        console.log('called')

        console.log(videos)
        console.log(values)
        videos.forEach(v => {
            const data = new FormData()
        data.append("file",v.file)
        data.append("upload_preset",`${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`)
        data.append("cloud_name",`${process.env.NEXT_PUBLIC_CLOUD_NAME}`)

        fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_USER_NAME}/video/upload`,{
            method:"POST",
            body: data
        }).then(res => res.json()).then(data =>{
            console.log(data)
            setValues(values => ({
                ...values,
                modules:[...values.modules,{module:v.modulename,videoname:v.videoname,url:data.url}]
            }))
        }).catch(error => console.log(error))
        })
        setTimeout(() => {
            console.log(values)
        },10000)
    }
  return (
    <Layout title={"AddCourse"}>
        <section className='addcourse-tab min-h-screen w-screen flex flex-row justify-center'>
            <div className='main-content flex flex-col mt-14'>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='font-bold text-lg'>Add Course</h2>
                <Link href={`/tutor/`}><p className='bg-blue text-white font-semibold text-sm py-3 px-3 rounded-lg cursor-pointer'>Back</p></Link>
            </div>
                <form className='my-2 p-2 w-full h-max flex flex-col border'>
                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Course Name</label>
                        <input className='font-normal text-md w-full h-10 border corder-black outline-none rounded-lg pl-1' value={values.courseName} onChange={e => setValues(values => ({...values,courseName:e.target.value}))} type={"text"} placeholder={"Course Name"}/>
                    </div>

                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Description</label>
                        <input className='font-normal text-md w-full h-10 border outline-none rounded-lg pl-1' type={"text"} value={values.description} onChange={e => setValues(values => ({...values,description:e.target.value}))} placeholder={"Description"}/>
                    </div>

                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Price</label>
                        <input className='font-normal text-md w-full h-10 border outline-none rounded-lg pl-1' type={"text"} value={values.price} onChange={e => setValues(values => ({...values,price:e.target.value}))} placeholder={"Price"}/>
                    </div>

                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Hours</label>
                        <input className='font-normal text-md w-full h-10 border outline-none rounded-lg pl-1' type={"text"} value={values.hours} onChange={e => setValues(values => ({...values,hours:e.target.value}))} placeholder={"Hours"}/>
                    </div>

                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Instructor</label>
                        <input className='font-normal text-md w-full h-10 border outline-none rounded-lg pl-1' type={"text"} value={values.instructors} onChange={e => setValues(values => ({...values,instructors:e.target.value}))} placeholder={"Instructors"}/>
                    </div>

                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Course Thumbnail</label>
                        <input className='font-normal text-md w-full h-10 outline-none rounded-lg pl-1' onChange={e => setValues(values => ({...values,thumbnail:e.target.files[0]}))} type={"file"} multiple placeholder={"Videos"}/>
                    </div>
                    <div className='course-structure h-max w-full'>
                        <h5 className='my-1 font-bold text-sm'>Add Modules</h5>
                        {countM.length > 0 && countM.map((c,i) => <CourseModule key={i} setVideo={setVideos} setmodule={setValues}/>)}

                        <button className='px-2 py-1 bg-blue text-white mr-2 text-sm font-normal outline-none border-none' type='button' onClick={() => setCountM([...countM,1])}>Add Course Module</button>
                        <button className='px-2 py-1 bg-blue text-white text-sm font-normal outline-none border-none' type={'button'} onClick={() => setCountM(countM.slice(0,countM.length-1))}>Remove Module</button>
                    </div>

                    <button className='submit-btn px-2 py-1 mt-2 bg-blue text-white rounded-lg' type={"button"} onClick={uploadVideo}>Submit</button>
                </form>
            </div>
        </section>
    </Layout>
  )
}

export async function getServerSideProps(ctx){
    const cookies = nookies.get(ctx)
    console.log('here===============')
    console.log(cookies.tutor)

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

export default AddCourse