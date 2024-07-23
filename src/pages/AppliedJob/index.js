"use client"
import React, { useState } from 'react'
import UpdateStatusModal from '@/components/UpdateStatusModal';


const AppliedJobs = () => {
  const [open, setOpen] = useState(false)

  const showStatuModal = ()=>{
    setOpen(true)
  }
  return (
    <div className="w-11/12 container mx-auto mt-3 md:mt-10">
      <div className="border-[#0DCAF0] border-2 w-56  md:w-96 p-2 lg:w-96 xl:w-96 rounded-lg">
        <h1 className="text-center font-semibold text-xl md:text-3xl">
          My Job Applications
        </h1>
      </div>
      <div className="md:mt-10  mt-3 text-lg md:text-xl lg:text-2xl xl:text-2xl">
        <p>View and manage your job status</p>
      </div>

      {/* <div className="border border-blue-900 border-t-1">foo</div> */}

      <div className="md:grid md:grid-cols-2 gap-96  mt-5 md:mt-10  border-t border-b">
        <div className=" mt-5 md:mt-3 md:w-[350px] lg:w-[450px] ">
          <h1 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl">
            DIGITAL MARKETER
          </h1>
          <h2 className=" text-lg md:text-xl lg:text-2xl">Google</h2>
          <h2 className="text-lg md:text-xl lg:text-2xl">United Kingdom</h2>
          <h2 className="text-lg md:text-xl lg:text-2xl">
            <span className='font-semibold'>Date of application:</span> February 20, 2024
          </h2>
        </div>
        <div className="flex gap-5 md:justify-end md:gap-20 md:mt-3 mt-5 mb-5">
          <div className=" ">
            <button  onClick={showStatuModal} className="text-[#0DCAF0] border w-28 p-2 text-sm md:w-36  border-gray-400 bg-white md:text-lg text-center md:p-3 rounded-xl">
              Update Status
            </button>
          </div>
          <div className="  ">
            <h5 className="text-white bg-[#187609] w-24 text-sm p-2 md:w-24 md:text-lg text-center md:p-3 rounded-xl">
              Applied
            </h5>
          </div>
          <div>
            <UpdateStatusModal  show={open} setShow={setOpen}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobs