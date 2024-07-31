// "use client"
// import React, { useState } from 'react'
// import UpdateStatusModal from '@/components/UpdateStatusModal';
// import { fetchAppliedJobs } from '../../../services/allJobsApplication';
// import { cookies } from 'next/headers';


// const AppliedJobs = () => {
//   const [open, setOpen] = useState(false)

//   const showStatuModal = ()=>{
//     setOpen(true)
//   }
//   return (
//     <div className="w-11/12 container mx-auto mt-3 md:mt-10">
//       <div className="border-[#0DCAF0] border-2 w-56  md:w-96 p-2 lg:w-96 xl:w-96 rounded-lg">
//         <h1 className="text-center font-semibold text-xl md:text-3xl">
//           My Job Applications
//         </h1>
//       </div>
//       <div className="md:mt-10  mt-3 text-lg md:text-xl lg:text-2xl xl:text-2xl">
//         <p>View and manage your job status</p>
//       </div>

//       {/* <div className="border border-blue-900 border-t-1">foo</div> */}

//       <div className="md:grid md:grid-cols-2 gap-96  mt-5 md:mt-10  border-t border-b">
//         <div className=" mt-5 md:mt-3 md:w-[350px] lg:w-[450px] ">
//           <h1 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl">
//             DIGITAL MARKETER
//           </h1>
//           <h2 className=" text-lg md:text-xl lg:text-2xl">Google</h2>
//           <h2 className="text-lg md:text-xl lg:text-2xl">United Kingdom</h2>
//           <h2 className="text-lg md:text-xl lg:text-2xl">
//             <span className='font-semibold'>Date of application:</span> February 20, 2024
//           </h2>
//         </div>
//         <div className="flex gap-5 md:justify-end md:gap-20 md:mt-3 mt-5 mb-5">
//           <div className=" ">
//             <button  onClick={showStatuModal} className="text-[#0DCAF0] border w-28 p-2 text-sm md:w-36  border-gray-400 bg-white md:text-lg text-center md:p-3 rounded-xl">
//               Update Status
//             </button>
//           </div>
//           <div className="  ">
//             <h5 className="text-white bg-[#187609] w-24 text-sm p-2 md:w-24 md:text-lg text-center md:p-3 rounded-xl">
//               Applied
//             </h5>
//           </div>
//           <div>
//             <UpdateStatusModal  show={open} setShow={setOpen}/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppliedJobs




import { useState, useEffect } from "react";
import { fetchAppliedJobs } from "../../../services/allJobsApplication";
import Cookies from "js-cookie";
import { format } from "date-fns";

const AppliedJobs = () => {
  const userId = Cookies.get("userId");
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAppliedJobs = async () => {
      try {
        const data = await fetchAppliedJobs(userId);
        setAppliedJobs(data.appliedJobs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadAppliedJobs();
  }, [userId]);

  if (error)
    return (
      <div className="w-11/12 mx-auto container flex justify-center py-14">
        Error: {error}
      </div>
    );
  if (loading)
    return (
      <div className="w-11/12 mx-auto container flex justify-center py-14">
        Loading...
      </div>
    );
  if (!appliedJobs)
    return (
      <div className="w-11/12 mx-auto container flex justify-center py-14">
        No Data
      </div>
    );

  return (
    <div className="container mx-auto w-11/12  py-6">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 p-3 rounded-lg w-8/12 md:w-4/12 text-center self-center lg:w-[30%] border-2 border-[#0dcaf0]">
        My Job Applications
      </h2>
      <p className="mb-8 font-semibold text-xl">
        View and manage your job status
      </p>
      <div className="space-y-14">
        {appliedJobs.map((job) => (
          <div
            key={job.applicationId}
            className="bg-white border-t border-b border-black p-4  grid grid-cols-1  md:grid-cols-2"
          >
            <div>
              <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
              <p className=" font-semibold">{job.company}</p>
              <p className=" font-semibold">{job.location}</p>
              <p className="font-semibold">
                Date of application:{" "}
                {format(new Date(job.appliedAt), "MMMM d, yyyy")}
              </p>
            </div>
            <div className="flex items-start md:items-center pt-5 md:pt-0 justify-start md:justify-end gap-3">
              <button className=" text-[#0DCAF0] border border-gray-200 rounded-lg p-2">
                Update Status
              </button>
              <p
                className={`  rounded-md px-3 py-2  font-semibold ${
                  job.status === "Applied"
                    ? "bg-green-100 text-green-700"
                    : job.status === "Not hired"
                    ? "bg-red-100 text-red-700"
                    : job.status === "Interviewing"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {job.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;