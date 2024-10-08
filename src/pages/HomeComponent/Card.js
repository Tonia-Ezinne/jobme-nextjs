import React from 'react'
import Image from 'next/image';
import { GrLocation } from "react-icons/gr";
import { RxClock } from "react-icons/rx";
import useFetch from '../../../hooks/useFetch';
import PageLoading from '@/components/pageLoader.js/PageLoading';
import { formatDistanceToNow } from "date-fns";



//map over it from the recent job of jobupload

const Card = () => {

  const { recentJobs, error, loading } = useFetch("/api/jobs/jobupload");

   if (loading) {
     return <PageLoading />;
   }

   if (error) {
     return (
       <div>
         <p>Error fetching jobs</p>
       </div>
     );
   }

  return (
    <></>
    // <div className="container">
    //   <div className=" items-center justify-center w-11/12 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10">

    // <div className=" grid md:grid-cols-2 lg:grid-cols-3">
    //   {recentJobs.map((job) => (
    //     <div
    //       key={job.recentJobs}
    //       className=" shadow-xl rounded-2xl md:w-80 lg:min-w-[300px]  xl:w-96  items-center justify-center mx-auto  mt-5 mb-5"
    //     >
    //       <div className=" mt-6 w-full md:w-full lg:min-w-[300px] lg:w-full xl:w-full p-5 ">
    //         <div className="mb-2">
    //           <h1 className="text-start font-semibold text-xl">{job.title}</h1>
    //           <div className="">
    //             <div className="flex flex-row gap-2 mt-3">
    //               <div className=" flex justify-start text-start">
    //                 <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
    //               </div>
    //               <div className="mt-1 ">
    //                 <p className="text-gray-400 text-1xl">
    //                   {formatDistanceToNow(new Date(job.createdAt), {
    //                     addSuffix: true,
    //                   })}
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="flex flex-row mt-4 justify-between">
    //               <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0]">
    //                 <h1 className="mt-1 text-sm">{job.employmentType}</h1>
    //               </div>
    //               <div className="text-">
    //                 <p className="">{job.salary}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="border-t-2 mb-2">
    //           <div className="flex gap-3">
    //             <div className="mt-2">
    //               <Image
    //                 src="/Frame 23.png"
    //                 width={90}
    //                 height={100}
    //                 alt="frame"
    //               />
    //             </div>
    //             <div className="mt-3 flex flex-col justify-start">
    //               <div>
    //                 <p className="font-bold text-xl text-left mt-3">
    //                   {job.company}
    //                 </p>
    //               </div>
    //               <div className="flex justify-center gap-2 items-center">
    //                 <div>
    //                   <GrLocation className="text-gray-600 " />
    //                 </div>
    //                 <div>
    //                   <p className="text-sm mt-1 text-gray-400">
    //                     {job.location}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-start p-2 mb-5">
    //             <button className="text-white  bg-[#0DCAF0] rounded-lg md:p-3 text-lg  p-1 hover:bg-cyan-400 ">
    //               Apply Now
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    //   ;
    // </div>

    //     <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl ">
    //       <div className="order-2 lg:order-2 md:order-2 mt-6  w-full p-5  hidden ">
    //         <div className="">
    //           <h1 className="text-start font-bold text-xl">Web Developer</h1>
    //           <div className="">
    //             <div className="flex flex-row gap-2 mt-3">
    //               <div className=" flex justify-start text-start">
    //                 <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
    //               </div>
    //               <div className="mt-1 ">
    //                 <p className="text-gray-500 text-1xl">Posted 2 days ago</p>
    //               </div>
    //             </div>
    //             <div className="flex flex-row mt-4 gap-28">
    //               <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0] ">
    //                 <h1 className="mt-1 text-sm">Full Time</h1>
    //               </div>
    //               <div className="">
    //                 <p className="">$ 38k - 40K</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="border-t-2 mb-2 ">
    //           <div className="flex gap-3">
    //             <div className="mt-2">
    //               <Image
    //                 src="/Frame 2.3.jpg"
    //                 width={90}
    //                 height={100}
    //                 alt="frame"
    //               />
    //             </div>
    //             <div className="mt-3 flex flex-col justify-start">
    //               <div>
    //                 <p className="font-bold text-xl text-left mt-3">Facebook</p>
    //               </div>
    //               <div className="flex justify-center gap-2 items-center">
    //                 <div>
    //                   <GrLocation className="text-gray-600 " />
    //                 </div>
    //                 <div>
    //                   <p className="text-sm mt-1 text-gray-600">Australia</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-start p-2 mb-5">
    //             <button className="text-white  bg-[#0DCAF0] rounded-lg md:p-3 text-lg  p-1  ">
    //               Apply Now
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl">
    //       <div className="order-3 lg:order-3 md:order-3 mt-6  p-7 hidden  ">
    //         <div className="mb-2">
    //           <h1 className="text-start font-bold text-3xl">UI/UX Designer</h1>
    //           <div className="">
    //             <div className="flex flex-row gap-2 mt-3">
    //               <div className=" flex justify-start text-start">
    //                 <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
    //               </div>
    //               <div className="mt-1 ">
    //                 <p className="text-gray-500 text-1xl">Posted 3 hours ago</p>
    //               </div>
    //             </div>
    //             <div className="flex flex-row mt-4 gap-28">
    //               <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0] ">
    //                 <h1 className="mt-1 text-sm">Remote</h1>
    //               </div>
    //               <div className="">
    //                 <p className="">$ 26k - 34K</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="border-t-2 mb-2 ">
    //           <div className="flex gap-3">
    //             <div className="mt-2">
    //               <Image
    //                 src="/Frame 23 (3).jpg"
    //                 width={90}
    //                 height={100}
    //                 alt="Frame"
    //               />
    //             </div>
    //             <div className="mt-3 flex flex-col justify-start">
    //               <div>
    //                 <p className="font-bold text-xl text-left mt-3">LinkedIn</p>
    //               </div>
    //               <div className="flex justify-center gap-2 items-center">
    //                 <div>
    //                   <GrLocation className="text-gray-600 " />
    //                 </div>
    //                 <div>
    //                   <p className="text-sm mt-1 text-gray-600">South Africa</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-start p-2 mb-5">
    //             <button className="text-white  bg-[#0DCAF0] rounded-lg md:p-3 text-lg  p-1 ">
    //               Apply Now
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="justify-between  p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 ">
    //     <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl  hidden">
    //       <div className="order-1 md:order-1 lg:order-1 mt-6  p-7 ">
    //         <div className="mb-2">
    //           <h1 className="text-start font-bold text-3xl">Pen Tester</h1>
    //           <div className="">
    //             <div className="flex flex-row gap-2 mt-3">
    //               <div className=" flex justify-start text-start">
    //                 <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
    //               </div>
    //               <div className="mt-1 ">
    //                 <p className="text-gray-500 text-1xl">Posted 7 hours ago</p>
    //               </div>
    //             </div>
    //             <div className="flex flex-row mt-4 gap-28">
    //               <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0] h-7">
    //                 <h1 className="mt-1 text-sm ">Full Time</h1>
    //               </div>
    //               <div className="">
    //                 <p className="">$ 22k - 32K</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="border-t-2 mb-2 ">
    //           <div className="flex gap-3">
    //             <div className="mt-2">
    //               <Image
    //                 src="/Frame 23 (1).png"
    //                 width={100}
    //                 height={100}
    //                 alt="frame"
    //               />
    //             </div>
    //             <div className="mt-3 flex flex-col justify-start">
    //               <div>
    //                 <p className="font-bold text-4xl text-left mt-3">Apple</p>
    //               </div>
    //               <div className="flex justify-center gap-2 items-center">
    //                 <div>
    //                   <GrLocation className="text-gray-600 " />
    //                 </div>
    //                 <div>
    //                   <p className="text-sm mt-1 text-gray-600">
    //                     United Kingdom
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-start p-2 mb-5">
    //             <button className="text-white p-1 bg-[#0DCAF0] rounded-xl md:p-3 text-2xl h-16 w-44 ">
    //               Apply Now
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl ">
    //       <div className="order-2 md:order-2 lg:order-2 mt-6  p-7  hidden ">
    //         <div className="mb-2">
    //           <h1 className="text-start font-bold text-3xl">Data Analyst</h1>
    //           <div className="">
    //             <div className="flex flex-row gap-2 mt-3">
    //               <div className=" flex justify-start text-start">
    //                 <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
    //               </div>
    //               <div className="mt-1 ">
    //                 <p className="text-gray-500 text-1xl">Posted 6 days ago</p>
    //               </div>
    //             </div>
    //             <div className="flex flex-row mt-4 gap-28">
    //               <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0]  h-8">
    //                 <h1 className="mt-1 text-sm">Remote</h1>
    //               </div>
    //               <div className="">
    //                 <p className="">$ 30k - 32K</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="border-t-2 mb-2 ">
    //           <div className="flex gap-3">
    //             <div className="mt-2">
    //               <Image
    //                 src="/Frame 23 (2).png"
    //                 width={100}
    //                 height={100}
    //                 alt="frame"
    //               />
    //             </div>
    //             <div className="mt-3 flex flex-col justify-start">
    //               <div>
    //                 <p className="font-bold text-4xl text-left mt-3">
    //                   Whatsapp
    //                 </p>
    //               </div>
    //               <div className="flex justify-center gap-2 items-center">
    //                 <div>
    //                   <GrLocation className="text-gray-600 " />
    //                 </div>
    //                 <div>
    //                   <p className="text-sm mt-1 text-gray-600">
    //                     United States
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-start p-2 mb-5">
    //             <button className="text-white p-1 bg-[#0DCAF0] rounded-xl md:p-3 text-2xl h-16 w-44 ">
    //               Apply Now
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl hidden">
    //       <div className="order-3 md:order-3 lg:order-3 mt-6  p-7 hidden">
    //         <div className="mb-2">
    //           <h1 className="text-start font-bold text-3xl">PHP Developer</h1>
    //           <div className="">
    //             <div className="flex flex-row gap-2 mt-3">
    //               <div className=" flex justify-start text-start">
    //                 <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
    //               </div>
    //               <div className="mt-1 ">
    //                 <p className="text-gray-500 text-1xl">
    //                   Posted 22 hours ago
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="flex flex-row mt-4 gap-28">
    //               <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0]  h-8">
    //                 <h1 className="mt-1 text-sm">Remote</h1>
    //               </div>
    //               <div className="">
    //                 <p className="">$ 59k - 63K</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="border-t-2 mb-2 ">
    //           <div className="flex gap-3">
    //             <div className="mt-2">
    //               <Image
    //                 src="/Frame 23 (3).png"
    //                 width={100}
    //                 height={100}
    //                 alt="frame"
    //               />
    //             </div>
    //             <div className="mt-3 flex flex-col justify-start">
    //               <div>
    //                 <p className="font-bold text-4xl text-left mt-3">
    //                   Microsoft
    //                 </p>
    //               </div>
    //               <div className="flex justify-center gap-2 items-center">
    //                 <div>
    //                   <GrLocation className="text-gray-600 " />
    //                 </div>
    //                 <div>
    //                   <p className="text-sm mt-1 text-gray-600">
    //                     United Kingdom
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-start p-2">
    //             <button className="text-white p-1 bg-[#0DCAF0] rounded-xl md:p-3 text-2xl h-16 w-44 ">
    //               Apply Now
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card