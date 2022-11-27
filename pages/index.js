import { GET_COURSES } from "@/components/queries/CourseQueries";
import { gql } from "@apollo/client";
import useGetCourse, { useCheckLogin } from "hooks/useGetCourse";
import Carousal from "../components/Carousal";
import ListofCourses from "../components/Index/ListofCourses";
import Layout from "../components/Layout";
import { client } from "./_app";

const Index = ({data}) => {    
  // const {data} = useGetCourse()
  const {user} = useCheckLogin()
  console.log(data)
  // console.log(data,user)
  if(user)
  {
    localStorage.setItem("user","true")
  }
  return (
    <div className="w-screen h-auto overflow-x-hidden">
      
        <Layout>
        <Carousal />
        <ListofCourses />
        </Layout>
    </div>
  )
}

export async function getStaticProps(ctx){
  // const { data } = await client.query({
  //   query:  gql`
  //     query getCourses{
  //       courses{
  //           id
  //           ownerid
  //           name
  //           price
  //           hours
  //           thumbnail
  //           description
  //           instructor{
  //           name
  //           id
  //           }
  //           videos {
  //           id
  //           url
  //           name
  //           }
  //           }
  //     } 
  //   `
  // })

  return {
    props:{
      data:2
    }
  }
}

export default Index;