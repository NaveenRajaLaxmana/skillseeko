import { CHECK_LOGIN, GET_COURSES } from "@/components/queries/CourseQueries";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

const useGetCourse = () => {
  const {data,loading,error} = useQuery(GET_COURSES)
  return {data,error,loading}
};

const useCheckLogin = () => {
  const {data,loading,error} = useQuery(CHECK_LOGIN)
  return {user:data,error,loading}
};

export default useGetCourse
export {useCheckLogin};