import React, { useState, useEffect } from 'react';
import { GrLocation } from "react-icons/gr";
import { RxClock } from "react-icons/rx";
import Image from 'next/image';
import Link from 'next/link';
import useFetch from '../../../hooks/useFetch';
import { formatDistanceToNow } from "date-fns";



const SectionThree = () => {
const {recentJobs, error, loading} = useFetch("api/jobs/jobupload");
  if (error) {
    return (
      <div>
        <p>Error fetching jobs</p>
      </div>
    );
  }

  if(loading){
    return <div>Loading</div>
  }
console.log("All jobs page", recentJobs);

if (error) {
  return <div>Something went wrong, {error}</div>;
}


  return (
    <div className="container mx-auto text-center w-11/12 p-2">
      <div>
        <h1 className="font-bold text-xl">Latest Job Listing</h1>
        <p className="text-lg mt-5 p-2">
          Lorem ipsum dolor sit amet consectetur. Augue lacus senectus at amet
          viverra ultrices eget. Tincidunt tristique viverra facilisis arcu non
          nulla faucibus. Adipiscing blandit nunc lobortis pretium. Tempus
          viverra vitae nisl imperdiet auctor mattis viverra egestas mattis.
        </p>
      </div>
      <div>
        <div className=" block">
        <div className=" grid md:grid-cols-2 gap-10 lg:grid-cols-3">
           {recentJobs.map((job) => ( 
            <div
              key={recentJobs.id}
              className=" shadow-xl rounded-2xl w-full lg:min-w-[300px]   items-center justify-center mx-auto  mt-5 mb-5"
            >
              <div className=" mt-6 w-full md:w-full lg:min-w-[300px] lg:w-full xl:w-full p-5 ">
                <div className="mb-2">
                  <h1 className="text-start font-semibold text-xl">
                    {job.title}
                  </h1>
                  <div className="">
                    <div className="flex flex-row gap-2 mt-3">
                      <div className=" flex justify-start text-start">
                        <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
                      </div>
                      <div className="mt-1 ">
                        <p className="text-gray-400 text-1xl">
                          {formatDistanceToNow(new Date(job.createdAt), {
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row mt-4 justify-between">
                      <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0]">
                        <h1 className="mt-1 text-sm">{job.employmentType}</h1>
                      </div>
                      <div className="text-">
                        <p className="">{job.salary}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t-2 mb-2">
                  <div className="flex gap-3">
                    <div className="mt-2">
                      <Image
                        src="/Frame 23.png"
                        width={90}
                        height={100}
                        alt="frame"
                      />
                    </div>
                    <div className="mt-3 flex flex-col justify-start">
                      <div>
                        <p className="font-bold text-xl text-left mt-3">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex justify-center gap-2 items-center">
                        <div>
                          <GrLocation className="text-gray-600 " />
                        </div>
                        <div>
                          <p className="text-sm mt-1 text-gray-400">
                            {job.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-start p-2 mb-5">
                    <button className="text-white  bg-[#0DCAF0] rounded-lg md:p-3 text-lg  p-1 hover:bg-cyan-400 ">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
           ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default SectionThree



