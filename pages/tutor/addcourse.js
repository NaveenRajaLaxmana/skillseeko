import React from 'react'
import Layout from '../../components/Layout'

const AddCourse = () => {
  return (
    <Layout title={"AddCourse"}>
        <section className='addcourse-tab min-h-screen w-screen flex flex-row justify-center'>
            <div className='main-content flex flex-col mt-14'>
                <h2 className='font-bold text-lg'>Add Course</h2>
                <form className='my-2 p-2 w-full h-max flex flex-col border'>
                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Course Name</label>
                        <input className='font-normal text-md w-full h-10 border corder-black outline-none rounded-lg pl-1' type={"text"} placeholder={"Course Name"}/>
                    </div>

                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Description</label>
                        <input className='font-normal text-md w-full h-10 border outline-none rounded-lg pl-1' type={"text"} placeholder={"Description"}/>
                    </div>

                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Price</label>
                        <input className='font-normal text-md w-full h-10 border outline-none rounded-lg pl-1' type={"text"} placeholder={"Price"}/>
                    </div>

                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Hours</label>
                        <input className='font-normal text-md w-full h-10 border outline-none rounded-lg pl-1' type={"text"} placeholder={"Hours"}/>
                    </div>

                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Instructor</label>
                        <input className='font-normal text-md w-full h-10 border outline-none rounded-lg pl-1' type={"text"} placeholder={"Instructors"}/>
                    </div>

                    <div className='course-name my-1 w-full flex flex-col'>
                        <label className='font-semibold text-md'>Videos</label>
                        <input className='font-normal text-md w-full h-10 outline-none rounded-lg pl-1' type={"file"} multiple placeholder={"Videos"}/>
                    </div>

                    <button className='submit-btn px-2 py-1 bg-blue text-white rounded-lg' type={"submit"}>Submit</button>
                </form>
            </div>
        </section>
    </Layout>
  )
}

export default AddCourse