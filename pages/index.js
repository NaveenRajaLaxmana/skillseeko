import useGetCourse, { useCheckLogin } from "hooks/useGetCourse";
import Carousal from "../components/Carousal";
import ListofCourses from "../components/Index/ListofCourses";
import Layout from "../components/Layout";

const Index = () => {    
  const {data} = useGetCourse()
  const {user} = useCheckLogin()
  console.log(data,user)
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

export default Index;