import React, { useEffect, useState } from 'react'
import { GrLocation } from "react-icons/gr";
import { RxClock } from "react-icons/rx";
import Image from 'next/image';
import PageLoading from './pageLoader.js/PageLoading';
import Link from 'next/link';
import { formatDistanceToNow } from "date-fns";
import useFetch from '../../hooks/useFetch';


const JobCard = () => {

  const { allJobs: jobs, error, loading } = useFetch("/api/jobs/jobupload");

    // const [loading, setLoading] = useState(false)
    // const [jobs, setJobs] = useState([])

    if (loading){
      return(
        <PageLoading/>
      )
    }

    if(error){
      return (
        <div>
          <p>Error fetching jobs</p>
        </div>
      );
    }

    // const getALlJobs = async ()=>{
    //    try {
    //     // setLoading(true)
    //      const res = await fetch("/api/jobs/jobupload", {
    //        method: "GET",
    //      });
    //      const resData = await res.json();
    //      if(res.ok){
    //         // setLoading(false)
    //         setJobs(resData.data)
    //      }
    //    } catch (error) {
    //     console.log(error);
    //    }

    //    console.log(jobs);
    // }

    // useEffect(()=>{
    //     getALlJobs()
    // },[]);
 

    // if (loading) {
    //   return(
    //     <div>
    //       <PageLoading/>
    //     </div>
    //   )
    // }



  
}

export default JobCard