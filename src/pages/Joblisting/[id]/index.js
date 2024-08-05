// // {
// // import React, { useEffect, useState } from 'react'
// // import Image from 'next/image'
// // import Card from '@/pages/HomeComponent/Card'
// // import { useRouter } from 'next/router';
// // import { formatDistanceToNow } from 'date-fns';
// // import Loader from '@/components/loader/Loader';
// // import Link from 'next/link';
// // import useFetch from '../../../../hooks/useFetch';

// // export default function JobDetail() {
// //   const [job, setJob] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const router = useRouter();
// //   const { id } = router.query;

// //   const fetchJob = async () => {
// //     try {
// //       const response = await fetch(/api/jobs/${id});
// //       if (!response.ok) {
// //         throw new Error('Failed to fetch job');
// //       }
// //       const data = await response.json();
// //       setJob(data.data);
// //       console.log(job);
// //     } catch (error) {
// //       setError(err.message);      
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (id) {
// //       fetchJob();
// //     }
// //   }, [id]);


  
// //   const { recentJobs } = useFetch("/api/jobs/jobupload");

// //   if (loading) return <div className='flex justify-center items-center mx-auto py-20'><Loader/></div>  ;
// //   if (error) return <div>Error: {error}</div>;
// //   if (!job) return <div>Job not found</div>;


// //   const postedTime = job?.createdAt ? formatDistanceToNow(new Date(job.createdAt),
// //   { addSuffix: true}) : " "




// //   return (
// //     <div className='w-11/12 mx-auto  '>
// //       <div className=' px-2 py-2 flex flex-col lg:flex-row gap-24'>


      
// //       <div className='lg:w-5/12'>
// //         <div className='bg-[#DBF7FD] rounded-md px-3 lg:px-6 py-8 lg:mt-3'>
// //           <div>
// //             <div className='flex justify-center items-center bg-[#FFFFFF]  w-16 h-16 rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>            
// //             <Image src={job.logoUrl} width={25} height={25} className='w-12' alt=''/>            
// //             </div>

// //             <div className='mt-2'>            
// //             <h1 className='text-lg lg:text-2xl font-semibold'>{job.title}</h1>
// //             </div>

// //             <div className='mt-5'>
// //               <p className='lg:text-xl'>
// //               Lorem ipsum dolor sit amet consectetur. Et ultrices tellus convallis quam. Sed opi commodo proin gravida magnis pretium senectus aliquet.
// //               </p>
// //             </div>



// //           </div>




// //           <div className='lg:w-[280px] mt-5'>
// //             <h1 className='text-lg font-semibold'>Job Information:</h1>

// //             <div className='bg-[#FFFFFF] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg p-2 lg:px-4 lg:py-3 mt-2 flex flex-col gap-3'>
// //               <div className='flex justify-start items-center font-semibold gap-2'>
// //                 <Image src="/profilecheck.svg" width={20} height={20} alt=''/>
// //                 <p>
// //                 Employment Type: <span className='text-[#0DCAF0]'>{job.employmentType}</span>
// //                 </p>
// //               </div>
// //               <div className='flex justify-start items-center font-semibold gap-2'>
// //               <Image src="/loc-img.svg" width={20} height={20} alt=''/>
// //                 <p>
// //                 Location: <span className='text-[#0DCAF0]'>{job.location}</span>
// //                 </p>
// //               </div>
// //               <div className='flex justify-start items-center font-semibold gap-2'>
// //               <Image src="/time-img.svg" width={20} height={20} alt='' />
// //                 <p>
// //                 Date Posted: <span className='text-[#0DCAF0]'>{postedTime}</span>
// //                 </p>
// //               </div>
// //               <div className='flex justify-start items-center font-semibold gap-2'>
// //               <Image src="/work-img.svg" width={20} height={20} alt='' />
// //                 <p>
// //                 Experience: <span className='text-[#0DCAF0]'>{job.experience}</span>
// //                 </p>
// //               </div>
// //               <div className='flex justify-start items-center font-semibold gap-2'>
// //               <Image src="/dollar-img.svg" width={20} height={20} alt='' />
// //                 <p>
// //                 Salary: <span className='text-[#0DCAF0]'>{job.salary}</span>
// //                 </p>
// //               </div>

// //             </div>


// //           </div>

// //         </div>





// //         <div className='map'></div>
// //       </div>

// //       <div className='lg:w-8/12'>
// //       <div>
// //         <h1 className='text-2xl font-semibold'>Job Description:</h1>
// //         <p className='mt-5 lg:text-lg'>{job.description}</p>
        
// //       </div>


// //       <div className='flex flex-col gap-2 mt-6'>
// //       <h1 className='text-xl font-semibold'>Duties & Responsibilities:</h1>
// //       <div className='flex gap-2 items-center mt-3'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
// //       <div className='flex gap-2 items-center'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
// //       <div className='flex gap-2 items-center'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
// //       <div className='flex gap-2 items-center'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
// //       <div className='flex gap-2 items-center'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
// //       <div className='flex gap-2 items-center'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
      
// //       </div>




// //       <div className='flex flex-col gap-2 mt-6'>
// //       <h1 className='text-xl font-semibold'>Skills & Qualifications:</h1>
// //       <div className='flex gap-2 items-center mt-3'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
// //       <div className='flex gap-2 items-center'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
// //       <div className='flex gap-2 items-center'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
// //       <div className='flex gap-2 items-center'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
// //       <div className='flex gap-2 items-center'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
// //       <div className='flex gap-2 items-center'>
// //         <Image src="/bluecheck.svg" width={20} height={20} alt='' />
// //         <p>Lorem ipsum dolor sit amet consectetur.</p>
// //       </div>
      
// //       </div>


// //       <div className='mt-5'>
// //         <Link href="/jobapplication" className='bg-[#0DCAF0] text-white hover:bg-[white] hover:text-black py-2 px-5 rounded-lg'>
// //           Apply Now
// //         </Link>
// //       </div>





// //       </div>
// //       </div>


// //       <div>
// //         <div>
// //           <h1 className='text-center text-xl font-semibold mt-9'>Related Jobs</h1>
// //           <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Risus tempus eget egestas dolor ut. At interdum amet id duis pulvinar quis massa elit. Amet quam commodo est pulvinar vitae.</p>
// //         </div>

        

// //         <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
// //       {recentJobs.map((job) => (


      
// //       <div key={job.id} className='rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 p-5 mx-auto mt-5'>
// //         <div>
// //           <div>
// //             <h1 className='text-xl font-semibold'>{job.title}</h1>
// //           </div>
// //           <div className='flex gap-2 items-center mt-4'>
// //             <GoClock className='icon-color' size={20} />
// //             <p className='text-gray-600'>Posted 24 hours ago</p>
// //           </div>
// //           <div className='flex justify-between mt-4'>
// //             <div className='rounded px-1 py-1 bg-[#0DCAF01F]'>
// //               <p className='text-[#0dcaf0] text-xs'>{job.employmentType}</p>
// //             </div>
// //             <div>
// //               <p>{job.salary}</p>
// //             </div>
// //           </div>
// //           <hr className='mt-4' />
// //           <div className='flex items-center gap-4 mt-4'>
// //             <div className='flex justify-center items-center p-2 rounded shadow-md'>
// //               <Image src={job.logoUrl} width={25} height={25} alt={job.title} />
// //             </div>
// //             <div>
// //               <div>
// //                 <h1 className='text-lg font-semibold'>{job.company}</h1>
// //               </div>
// //               <div className='flex items-center gap-2'>
// //                 <SlLocationPin className='text-gray-600' />
// //                 <p className='text-gray-600'>{job.location}</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className='mt-4'>
// //             <Link href={/joblisting/${job._id}} className='btn-color text-white p-2 px-3 rounded-lg hover:bg-white hover:text-black ease-in-out duration-500'>
// //               Apply Now
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //       ))
      
// //     }
// //     </div>


// //       </div>
// //     </div>
// //   )
// // }
// // }


// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Card from '@/pages/HomeComponent/Card';
// import { useRouter } from 'next/router';
// import { formatDistanceToNow } from 'date-fns';
// import Loader from '@/components/loader/Loader';
// import Link from 'next/link';
// import useFetch from '../../../../hooks/useFetch';
// import { GoClock } from 'react-icons/go';
// import { SlLocationPin } from 'react-icons/sl';
// import Cookies from 'js-cookie';
// import dynamic from 'next/dynamic';
// const Map = dynamic(() => import('../../../components/Hoc/MapComponent'), {
//   ssr: false
// });


// export default function JobDetail() {
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const router = useRouter();
//   const { id } = router.query;

//   const fetchJob = async () => {
//     try {
//       const response = await fetch(/api/jobs/${id});
//       if (!response.ok) {
//         throw new Error('Failed to fetch job');
//       }
//       const data = await response.json();
//       setJob(data.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       fetchJob();
//     }
//   }, [id]);

//   const { recentJobs } = useFetch('/api/jobs/jobupload');

//   if (loading) return <div className='flex justify-center items-center mx-auto py-20'><Loader /></div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!job) return <div>Job not found</div>;

//   const postedTime = job?.createdAt ? formatDistanceToNow(new Date(job.createdAt), { addSuffix: true }) : ' ';

  
// const updateJobId =()=>{
//   Cookies.set("jobId", job._id)
// }


// return (
//     <div className='w-11/12 mx-auto'>
//       <div className='px-2 py-2 flex flex-col lg:flex-row gap-24'>
//         <div className='lg:w-5/12'>
//           <div className='bg-[#DBF7FD] rounded-md px-3 lg:px-6 py-8 lg:mt-3'>
//             <div>
//               <div className='flex justify-center items-center bg-[#FFFFFF] w-16 h-16 rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
//                 <Image src={job.logoUrl} width={25} height={25} className='w-12' alt='' />
//               </div>
//               <div className='mt-2'>
//                 <h1 className='text-lg lg:text-2xl font-semibold'>{job.title}</h1>
//               </div>
//               <div className='mt-5'>
//                 <p className='lg:text-xl'>
//                   Lorem ipsum dolor sit amet consectetur. Et ultrices tellus convallis quam. Sed opi commodo proin gravida magnis pretium senectus aliquet.
//                 </p>
//               </div>
//             </div>
//             <div className='lg:w-[280px] mt-5'>
//               <h1 className='text-lg font-semibold'>Job Information:</h1>
//               <div className='bg-[#FFFFFF] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg p-2 lg:px-4 lg:py-3 mt-2 flex flex-col gap-3'>
//                 <div className='flex justify-start items-center font-semibold gap-2'>
//                   <Image src='/profilecheck.svg' width={20} height={20} alt='' />
//                   <p>
//                     Employment Type: <span className='text-[#0DCAF0]'>{job.employmentType}</span>
//                   </p>
//                 </div>
//                 <div className='flex justify-start items-center font-semibold gap-2'>
//                   <Image src='/loc-img.svg' width={20} height={20} alt='' />
//                   <p>
//                     Location: <span className='text-[#0DCAF0]'>{job.location}</span>
//                   </p>
//                 </div>
//                 <div className='flex justify-start items-center font-semibold gap-2'>
//                   <Image src='/time-img.svg' width={20} height={20} alt='' />
//                   <p>
//                     Date Posted: <span className='text-[#0DCAF0]'>{postedTime}</span>
//                   </p>
//                 </div>
//                 <div className='flex justify-start items-center font-semibold gap-2'>
//                   <Image src='/work-img.svg' width={20} height={20} alt='' />
//                   <p>
//                     Experience: <span className='text-[#0DCAF0]'>{job.experience}</span>
//                   </p>
//                 </div>
//                 <div className='flex justify-start items-center font-semibold gap-2'>
//                   <Image src='/dollar-img.svg' width={20} height={20} alt='' />
//                   <p>
//                     Salary: <span className='text-[#0DCAF0]'>{job.salary}</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>


//           <div className='mapp rounded-lg mt-5'>

//             <div className='map rounded-lg -z-10'>
//             <Map/>
            
//             </div>

//           </div>







//         </div>
//         <div className='lg:w-8/12'>
//           <div>
//             <h1 className='text-2xl font-semibold'>Job Description:</h1>
//             <p className='mt-5 lg:text-lg'>{job.description}</p>
//           </div>
//           <div className='flex flex-col gap-2 mt-6'>
//             <h1 className='text-xl font-semibold'>Duties & Responsibilities:</h1>

//             <ul>
//               {job.duties.map((duty) => (
//                 <li key={duty._id} className='flex gap-2 items-center mt-3' >
//                 <Image src='/bluecheck.svg' width={20} height={20} alt='tick' />
//                 {duty}                  
//                 </li>
//               ))}
//             </ul>
//           </div>


//           <div className='flex flex-col gap-2 mt-6'>

//             <h1 className='text-xl font-semibold'>Skills & Qualifications:</h1>

//             <ul>
//               {job.skills.map((skill) => (
//                 <li key={skill._id} className='flex gap-2 items-center mt-3' >
//                 <Image src='/bluecheck.svg' width={20} height={20} alt='tick' />
//                 {skill}                  
//                 </li>
//               ))}
//             </ul>


//           </div>
//           <div className='mt-5'>
//             <Link onClick={updateJobId} href='/jobapplication' className='bg-[#0DCAF0] text-white hover:bg-[white] hover:text-black py-2 px-5 rounded-lg'>
//               Apply Now
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div>
//           <h1 className='text-center text-xl font-semibold mt-9'>Related Jobs</h1>
//           <p className='text-center'>
//             Lorem ipsum dolor sit amet consectetur. Risus tempus eget egestas dolor ut. At interdum amet id duis pulvinar quis massa elit. Amet quam commodo est pulvinar vitae.
//           </p>
//         </div>
//         <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
//           {recentJobs?.map((job) => (
//             <div key={job.id} className='rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 p-5 mx-auto mt-5'>
//               <div>
//                 <div>
//                   <h1 className='text-xl font-semibold'>{job.title}</h1>
//                 </div>
//                 <div className='flex gap-2 items-center mt-4'>
//                   <GoClock className='icon-color' size={20} />
//                   <p className='text-gray-600'>Posted 24 hours ago</p>
//                 </div>
//                 <div className='flex justify-between mt-4'>
//                   <div className='rounded px-1 py-1 bg-[#0DCAF01F]'>
//                     <p className='text-[#0dcaf0] text-xs'>{job.employmentType}</p>
//                   </div>
//                   <div>
//                     <p>{job.salary}</p>
//                   </div>
//                 </div>
//                 <hr className='mt-4' />
//                 <div className='flex items-center gap-4 mt-4'>
//                   <div className='flex justify-center items-center p-2 rounded shadow-md'>
//                     <Image src={job.logoUrl} width={25} height={25} alt={job.title} />
//                   </div>
//                   <div>
//                     <div>
//                       <h1 className='text-lg font-semibold'>{job.company}</h1>
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <SlLocationPin className='text-gray-600' />
//                       <p className='text-gray-600'>{job.location}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='mt-4'>
//                   <Link href={/joblisting/${job._id}} className='btn-color text-white p-2 px-3 rounded-lg hover:bg-white hover:text-black ease-in-out duration-500'>
//                     Apply Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import Card from "@/pages/HomeComponent/Card";
import MapComponent from "@/components/MapComponent";
import Cookies from 'js-cookie'
import useFetch from "../../../../hooks/useFetch";

export default function JobDetail() {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const fetchJob = async () => {
    try {
      const response = await fetch(`/api/jobs/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch job");
      }
      const data = await response.json();
      setJob(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchJob();
    }
  }, []);



  // const {recentJobs} = useFetch("/api/jobs/jobupload");

  const postedTime = job?.createdAt
    ? formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })
    : "";

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!job) return <div>Job not found</div>;

  const updateJobId = ()=>{
    Cookies.set("jobId", job._id)
  }

  return (
    <>
      <div className="md:grid-cols-2 lg:grid xl:grid container mx-auto md:gap-10">
        <div className="p-8 container">
          <div className="bg-[#DBF7FD] ">
            <div className="py-3">
              <Image
                src={job.logoUrl}
                width={70}
                height={100}
                alt="Company Logo"
              />
            </div>
            <div className="p-3 md:mt-full">
              <h1 className="font-semibold text-2xl -mt-5 md:w-72 md:text-3xl">
                {job.title}
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl xl:text-3xl md:mt-5">
                {job.description}
              </p>
            </div>
            <div className="mt-5 p-3">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Job Information
              </h2>
              <div className="bg-white mt-5 mb-5 p-5 md:p-10 rounded-lg md:w-96">
                <JobDetailItem
                  icon="/clarity_employee-line.png"
                  label="Employment Type"
                  value={job.employmentType}
                />
                <JobDetailItem
                  icon="/carbon_location.png"
                  label="Location"
                  value={job.location}
                />
                <JobDetailItem
                  icon="/carbon_time.png"
                  label="Date Posted"
                  value={postedTime}
                />
                <JobDetailItem
                  icon="/clarity_employee-line.png"
                  label="Experience"
                  value={job.experience}
                />
                <JobDetailItem
                  icon="/clarity_dollar-line.png"
                  label="Salary"
                  value={job.salary}
                />
              </div>
            </div>
          </div>
          <div className="rounded-xl  mt-5">
            <MapComponent/>
          </div>
        </div>

        <div className="p-5 md:p-0">
          <h1 className="mt-10 md:mt-0 text-3xl font-semibold">
            Job Description:
          </h1>
          <p className="text-lg md:text-lg lg:text-2xl xl:text-3xl mt-3">
            {job.description}
          </p>
          <div className="mt-5">
            <h1 className="font-semibold text-2xl mt-3 mb-3">
              Duties & Responsibilities:
            </h1>
            <div>
              {job.duties.map((duty, index) => (
                <div key={index} className="flex items-start gap-2">
                  <IoIosCheckmark className="text-white rounded-full bg-[#0DCAF0] w-8 h-8 mt-1" />
                  <span className="text-lg md:text-lg lg:text-2xl xl:text-2xl">
                    {duty}
                  </span>
                </div>
              ))}
            </div>

            <h1 className="font-semibold text-2xl mt-5 mb-3">
              Skills & Qualifications:
            </h1>
            <div className="">
              {job.skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-2">
                  <IoIosCheckmark className="text-white rounded-full bg-[#0DCAF0] w-8 h-8" />
                  <span className="text-lg md:text-lg lg:text-2xl xl:text-3xl">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <Link onClick={updateJobId} href="/Jobapplication">
              <button className="bg-[#0DCAF0] p-2 text-white text-sm rounded-lg">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <div>
          <h1 className="font-semibold text-2xl">Related Jobs</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Risus tempus eget egestas
            dolor ut. At interdum amet id duis pulvinar quis massa elit. Amet
            quam commodo est pulvinar vitae.
          </p>
        </div>
        <div className="">
          <div>
            <Card />
          </div>
        </div>
      </div>
      
    </>
  );
}

function JobDetailItem({ icon, label, value }) {
  return (
    <div className="flex mt-3 gap-2">
      <Image src={icon} width={20} height={20} alt="Icon" />
      <div>
        <h1 className="text-xl font-bold ">{label}:</h1>
      </div>
      <div>
        <h2 className=" text-xl text-[#0DCAF0]">{value}</h2>
      </div>
      
    </div>
  );
}







