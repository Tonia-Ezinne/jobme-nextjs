// import React from 'react'

// const HeroDropDown = () => {
//   return (
//     <div className="bg-[#0dcaf063] py-4 mx-auto flex items-center justify-center   ">
//       <div className="w-11/12 container mx-auto flex flex-row justify-center lg:justify-between gap-4  md:gap-3 flex-wrap lg:flex-nowrap ">
//         <div className=" lg:mt-0 rounded-lg  lg:w-48   w-36 h-11 bg-white flex justify-center items-center ">
//           <select className="rounded-lg   md:p-0">
//             <option >Select Job Type</option>
//           </select>
//         </div>

//         <div className=" lg:mt-0 rounded-lg lg:w-48  w-36 h-11 bg-white  flex justify-center items-center ">
//           <select className="rounded-lg  md:p-0">
//             <option>Select Industry</option>
//           </select>
//         </div>

//         <div className=" lg:mt-0 rounded-lg lg:w-48  w-42 h-11 bg-white  flex justify-center items-center ">
//           <select className="rounded-lg md:p-0">
//             <option>Select Mode of Work</option>
//           </select>
//         </div>

//         <div className=" lg:mt-0 rounded-lg lg:w-48  w-32 h-11 bg-white  flex justify-center items-center">
//           <select className="rounded-lg md:p-0">
//             <option>Select Location</option>
//           </select>
//         </div>
//         <div className=' lg:w-28'>
//           <button className=" lg:mt-0 text-white lg:w-28  w-full h-11 bg-[#0DCAF0]  md:p-2   rounded-lg flex justify-center items-center">
//             Find Jobs
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroDropDown


import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { jobType, mode, industry } from "../../../data/filter.Jobs";
// import { jobType, mode, industry } from "../../../data/filterJobs";
import Link from "next/link";

const DropDown = () => {
  const {
    selectedJobType,
    setSelectedJobType,
    selectedIndustry,
    setSelectedIndustry,
    selectedMode,
    setSelectedMode,
    selectedLocation,
    setSelectedLocation,
  } = useContext(AppContext);

  return (
    <div className="section-2 py-10 flex items-center">
      <div className="bg-[#bfeaf1]">
        <form className="container w-10/12 mx-auto">
          <div className="grid items-center grid-cols-2 md:grid-cols-5 gap-10 justify-between">
            <div className="relative w-full">
              <select
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
                className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="">Select Job Type</option>
                {jobType.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                <svg
                  class="-mr-1 h-5 w-5 text-gray-950"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-full">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="">Select Industry</option>
                {industry.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                <svg
                  class="-mr-1 h-5 w-5 text-gray-950"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-full">
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="">Select Mode of Work</option>
                {mode.map((m, i) => (
                  <option key={i} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                <svg
                  class="-mr-1 h-5 w-5 text-gray-950"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-full">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="">Select Location</option>
                {/* Populate locations dynamically if you have a list */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                <svg
                  class="-mr-1 h-5 w-5 text-gray-950"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              {/* Conditional rendering for the button */}
              <Link href="/joblisting">
                <button className="bg-cyan-500 text-white py-3 px-6 rounded-md font-semibold">
                  Find Jobs
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex md:hidden mt-4  items-center justify-center">
            {/* Conditional rendering for the button */}
            <Link className="w-full" href="/joblisting">
              <button className="bg-cyan-500 w-full text-white py-3 px-6 rounded-md font-semibold">
                Find Jobs
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DropDown;