import withAuth from "@/components/hoc/withAuth";

import Link from "next/link";
import HeroDropDown from "../HomeComponent/DropDown";
import Image from "next/image";
import { useState, useContext } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import AppContext from "../../../context/AppContext";
import useFetch from "../../../hooks/useFetch";
// import Card from "../HomeComponent/Card";
// import JobCard from "@/components/JobCard";
import { GrLocation } from "react-icons/gr";
import { RxClock } from "react-icons/rx";
import PageLoading from "@/components/pageLoader.js/PageLoading";
import { formatDistanceToNow } from "date-fns";




const JobListing = () => {
  const { selectedJobType, selectedIndustry, selectedMode, selectedLocation } =
    useContext(AppContext);
  const {
    allJobs: jobs,
    recentJobs,
    error,
    loading,
  } = useFetch("api/jobs/jobupload");
  console.log("All jobs page", jobs);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  if (loading) {
    return <div>Loading</div>;
  }

  // job filtering
  const filteredJobs = jobs.filter((job) => {
    return (
      (selectedJobType ? job.employmentType === selectedJobType : true) &&
      (selectedIndustry ? job.industry === selectedIndustry : true) &&
      (selectedMode ? job.employmentType === selectedMode : true) &&
      (selectedLocation ? job.location === selectedLocation : true)
    );
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (error) {
    return <div>Something went wrong, {error}</div>;
  }

  return (
    <>
      <div></div>
      <div>
        <div className="background-c w-full h-12"></div>
        <div>
          <HeroDropDown />
        </div>
      </div>
      <div>
        {jobs &&
          jobs.map((job) => (
            <div
              key={job.id}
              className="w-11/12 hidden lg:block  shadow-xl  rounded-lg mx-auto p-3 mt-10 "
            >
              <div className="container flex flex-col-4 w-11/12 mx-auto gap-4  items-center justify-between">
                <div className="flex gap-2 ">
                  <div className="-mt-1">
                    <Image
                      src={job.logoUrl}
                      width={70}
                      height={100}
                      alt="frame"
                    />
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
                      <p className="text-gray-400 text-1xl">
                        {" "}
                        {formatDistanceToNow(new Date(job.createdAt), {
                          addSuffix: true,
                        })}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="-mt-1">
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
                  <div className="mt-3">
                    <p className="">{job.salary}</p>
                  </div>
                </div>
                <div>
                  <div className=" w-32 -mt-6 ">
                    <Link
                      href={`/joblisting/${job._id}`}
                      className="text-white w-full bg-[#0DCAF0] rounded-lg  text-sm  p-3 "
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="md:hidden lg:hidden xl:hidden block">
        <div className=" grid md:grid-cols-2 lg:grid-cols-3">
          {recentJobs.map((job) => (
            <div
              key={job.recentJobs}
              className=" shadow-xl rounded-2xl md:w-80 lg:min-w-[300px]  xl:w-96  items-center justify-center mx-auto  mt-5 mb-5"
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
          ;
        </div>
      </div>
      {/* Pagination controls */}
      <div className="flex items-center justify-between  border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
          <div>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            >
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    currentPage === index + 1
                      ? "bg-[#0DCAF0] text-white"
                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  } focus:z-20 focus:outline-offset-0`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* <div>
        <Link href="/Joblisting/details-1">Apply</Link>
        <Link href="/Joblisting/details-2">Apply</Link>
        <Link href="/Joblisting/details-3">Apply</Link>
      </div> */}
    </>
  );
};

export default withAuth(JobListing);
