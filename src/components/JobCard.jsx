import React, { useEffect, useState } from 'react'
import { GrLocation } from "react-icons/gr";
import { RxClock } from "react-icons/rx";
import Image from 'next/image';
import { set } from 'react-hook-form';

const JobCard = () => {
    const [loading, setLoading] = useState(false)
    const [jobs, setJobs] = useState([])

    const getALlJobs = async ()=>{
       try {
        setLoading(true)
         const res = await fetch("/api/jobs/jobupload", {
           method: "GET",
         });
         const resData = await res.json();
         if(res.ok){
            setLoading(false)
            setJobs(resData.data)
         }
       } catch (error) {
        console.log(error);
       }

       console.log(jobs);
    }

    useEffect(()=>{
        getALlJobs()
    },[])



  return (
    <div>

        {jobs && jobs.map((job)=>(

      <div key={job.id} className="w-11/12 hidden lg:block  shadow-xl  rounded-lg mx-auto p-3 mt-10 ">
        <div className="container flex flex-col-4 w-11/12 mx-auto gap-4  items-center justify-between">
          <div className="flex gap-2 ">
            <div className="-mt-1">
              <Image src={job.logoUrl} width={70} height={100} alt="frame" />
            </div>
            <div className="grid grid-row">
              <div className="">
                <h1 className="text-start font-semibold text-xl mt-3">
                  {job.title}
                </h1>
              </div>
              <div className="-mt-1 text-lg">
                <h2>{job.company}</h2>
              </div>
            </div>
          </div>

          <div>
            <div className=" bg-[#0dcaf034] rounded w-16 p-1 text-[#0DCAF0] ">
              <h1 className=" text-sm">{job.employmentType}</h1>
            </div>
            <div className="flex flex-row gap-1">
              <div className=" flex justify-start text-start">
                <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end h-8" />
              </div>
              <div className="mt-1 ">
                <p className="text-gray-400 text-1xl">Posted 24 hours ago</p>
              </div>
            </div>
          </div>
          <div className="-mt-1">
            <div className="flex justify-center gap-2 items-center">
              <div>
                <GrLocation className="text-gray-600 " />
              </div>
              <div>
                <p className="text-sm mt-1 text-gray-400">United Kingdom</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="">$ 30k - 35K</p>
            </div>
          </div>
          <div>
            <div className=" w-32 -mt-6 ">
              <button className="text-white w-full bg-[#0DCAF0] rounded-lg  text-sm  p-3 ">
                Apply Now
              </button>
            </div>
          </div>

        
        </div>
      </div>

        ))}
    </div>
  );
}

export default JobCard