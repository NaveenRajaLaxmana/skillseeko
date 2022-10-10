import Head from "next/head";
import Carousal from "../components/Carousal";
import Footer from "../components/Footer";
import ListofCourses from "../components/Index/ListofCourses";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const Index = () => {
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