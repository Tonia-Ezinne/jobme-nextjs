// "use client"
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { IoIosCheckmark } from "react-icons/io";
// import { formatDistanceToNow } from "date-fns";

// export default function JobDetail() {
//     const [job, setJob] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const router = useRouter();
//     const { id } = router.query;

//     const fetchJob = async () => {
//         try {
//             const response = await fetch(`/api/jobs/${id}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch job');
//             }
//             const data = await response.json();
//             setJob(data.data);
//             console.log(job);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (id) {
//             fetchJob();
//         }
//     }, [id]);

//      const postedTime = job?.createdAt
//        ? formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })
//        : "";

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (!job) return <div>Job not found</div>;

//     console.log("job details:", job)
//     return (
//       <>
//         <div className="">
//           <div className=" md:grid-cols-2 lg:grid xl:grid  container mx-auto md:gap-10">
//             <div className="">
//               <div className="bg-[#DBF7FD]">
//                 <div className="py-8 p-3">
//                   <Image
//                     src={job.logoUrl}
//                     width={70}
//                     height={100}
//                     alt="frame"
//                     className=""
//                   />
//                 </div>
//                 <div className="p-3 md:mt-full">
//                   <h1 className="font-semibold text-2xl -mt-5 md:w-72 md:text-3xl">
//                     {job.title}
//                   </h1>
//                   <p className="text-sm md:text-xl lg:text-2xl xl:text-3xl md:mt-5">
//                     {job.description}
//                   </p>
//                 </div>
//                 <div className="mt-5 p-3 ">
//                   <h2 className="text-2xl font-semibold md:text-3xl">
//                     Job Information
//                   </h2>
//                   <div className="bg-white mt-5 mb-5 p-5 md:p-2 rounded-lg md:w-72">
//                     <div className="flex gap-2 ">
//                       <div className="">
//                         <Image
//                           src="/clarity_employee-line.png"
//                           width={20}
//                           height={20}
//                           alt="frame"
//                         />
//                       </div>
//                       <div className="">
//                         <h1 className="text-sm font-bold">Employment Type:</h1>
//                       </div>
//                       <div>
//                         <h2 className="text-[#0DCAF0]">{job.employmentType}</h2>
//                       </div>
//                     </div>
//                     <div className="flex mt-3 gap-2 ">
//                       <div>
//                         <Image
//                           src="/carbon_location.png"
//                           width={20}
//                           height={20}
//                           alt="frame"
//                         />
//                       </div>
//                       <div>
//                         <h1 className="text-sm font-bold">Location:</h1>
//                       </div>
//                       <div>
//                         <h2 className="text-[#0DCAF0]">{job.location}</h2>
//                       </div>
//                     </div>
//                     <div className="flex mt-3 gap-1 ">
//                       <div>
//                         <Image
//                           src="/carbon_time.png"
//                           width={20}
//                           height={20}
//                           alt="frame"
//                         />
//                       </div>
//                       <div>
//                         <h1 className="text-sm font-bold">Date Posted:</h1>
//                       </div>
//                       <div>
//                         <h2 className="text-[#0DCAF0]">{postedTime}</h2>
//                       </div>
//                     </div>
//                     <div className="flex mt-3 gap-2">
//                       <div>
//                         <Image
//                           src="/clarity_employee-line.png"
//                           width={20}
//                           height={20}
//                           alt="frame"
//                         />
//                       </div>
//                       <div>
//                         <h1 className="text-sm font-bold">Experience:</h1>
//                       </div>
//                       <div>
//                         <h2 className="text-[#0DCAF0]">{job.experience}</h2>
//                       </div>
//                     </div>
//                     <div className="flex mt-3 gap-2">
//                       <div>
//                         <Image
//                           src="/clarity_dollar-line.png"
//                           width={20}
//                           height={20}
//                           alt="frame"
//                         />
//                       </div>
//                       <div>
//                         <h1 className="text-sm font-bold">Salary:</h1>
//                       </div>
//                       <div>
//                         <h2 className="text-[#0DCAF0]">{job.salary}</h2>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="">map</div>
//             </div>

//             <div>
//               <div className=" p-5 md:p-0 ">
//                 <h1 className="mt-10 md:mt-0 text-3xl font-semibold">
//                   Job Description:
//                 </h1>

//                 <p className="text-lg md:text-lg lg:text-2xl xl:text-3xl mt-3">
//                   {job.description}
//                 </p>
//                 <p className="text-lg mt-3 md:text-lg lg:text-2xl xl:text-3xl">
//                   {job.description}
//                 </p>
//                 <h1 className="font-semibold text-2xl mt-3 mb-3">
//                   Duties & Responsibilitis:
//                 </h1>
//                 <div className="">
//                   <div className="flex gap-1">
//                     <div>
//                       <IoIosCheckmark className=" text-white rounded-full bg-[#0DCAF0] w-8 h-8 " />
//                     </div>

//                     <div>
//                       <ul>
//                         {job.duties.map((duty) => (
//                           <li
//                             key={duty._id}
//                             className="text-lg md:text-lg lg:text-2xl xl:text-2xl "
//                           >
//                             {duty}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="flex gap-1">
//                     <div>
//                       <IoIosCheckmark className="mt-1 text-white rounded-full bg-[#0DCAF0] w-8 h-8 " />
//                     </div>
//                   </div>
//                   <div className="flex gap-1">
//                     <div>
//                       <IoIosCheckmark className="mt-1 text-white rounded-full bg-[#0DCAF0] w-8 h-8 " />
//                     </div>
//                   </div>
//                   <div className="flex gap-1"></div>
//                   <div className="flex gap-1">
//                     <div>
//                       <IoIosCheckmark className="mt-1 text-white rounded-full bg-[#0DCAF0] w-8 h-8 " />
//                     </div>
//                   </div>
//                   <div className="flex gap-1">
//                     <div>
//                       <IoIosCheckmark className="mt-1 text-white rounded-full bg-[#0DCAF0] w-8 h-8 " />
//                     </div>
//                   </div>
//                 </div>
//                 <h1 className="font-semibold text-2xl mt-3 mb-3">
//                   Skills & Qualifications:
//                 </h1>
//                 <div className="flex gap-1">
//                   <div>
//                     <IoIosCheckmark className=" text-white rounded-full bg-[#0DCAF0] w-8 h-8 " />
//                   </div>

//                   <div>
//                     <ul>
//                       {job.skills.map((skills) => (
//                         <li
//                           key={skills._id}
//                           className="text-lg md:text-lg lg:text-2xl xl:text-3xl "
//                         >
//                           {skills}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="flex gap-1">
//                   <div>
//                     <IoIosCheckmark className="mt-1 text-white rounded-full bg-[#0DCAF0] w-4 h-4 " />
//                   </div>

//                   <div></div>
//                 </div>
//                 <div className="flex gap-1">
//                   <div>
//                     <IoIosCheckmark className="mt-1 text-white rounded-full bg-[#0DCAF0] w-4 h-4 " />
//                   </div>

//                   <div></div>
//                 </div>
//                 <div className="flex gap-1">
//                   <div>
//                     <IoIosCheckmark className="mt-1 text-white rounded-full bg-[#0DCAF0] w-4 h-4 " />
//                   </div>

//                   <div></div>
//                 </div>
//                 <div className="flex gap-1">
//                   <div>
//                     <IoIosCheckmark className="mt-1 text-white rounded-full bg-[#0DCAF0] w-4 h-4 " />
//                   </div>
//                   <div></div>
//                 </div>
//                 <div className="flex gap-1">
//                   <div>
//                     <IoIosCheckmark className="mt-1 text-white rounded-full bg-[#0DCAF0] w-4 h-4 " />
//                   </div>

//                   <div className=""></div>
//                 </div>
//                 <div>
//                   {" "}
//                   <button className="bg-[#0DCAF0] p-2 mt-5 text-white text-sm rounded-lg">
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="text-center">
//             <div>
//               <h1 className="font-semibold text-2xl">Related Jobs</h1>
//               <p className="text-xl">
//                 Lorem ipsum dolor sit amet consectetur. Risus tempus eget
//                 egestas dolor ut. At interdum amet id duis pulvinar quis massa
//                 elit. Amet quam commodo est pulvinar vitae.
//               </p>
//             </div>
//             <div className="p-5"></div>
//           </div>
//         </div>
//       </>
//     );
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
  }, [id]);

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
