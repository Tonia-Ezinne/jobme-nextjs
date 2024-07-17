import React from 'react'

const HeroDropDown = () => {
  return (
    <div className="bg-[#0dcaf063] py-4 mx-auto flex items-center justify-center   ">
      <div className="w-11/12 container mx-auto flex flex-row justify-center lg:justify-between gap-4  md:gap-3 flex-wrap lg:flex-nowrap ">
        <div className=" lg:mt-0 rounded-lg  lg:w-48   w-36 h-11 bg-white flex justify-center items-center ">
          <select className="rounded-lg   md:p-0">
            <option >Select Job Type</option>
          </select>
        </div>

        <div className=" lg:mt-0 rounded-lg lg:w-48  w-36 h-11 bg-white  flex justify-center items-center ">
          <select className="rounded-lg  md:p-0">
            <option>Select Industry</option>
          </select>
        </div>

        <div className=" lg:mt-0 rounded-lg lg:w-48  w-42 h-11 bg-white  flex justify-center items-center ">
          <select className="rounded-lg md:p-0">
            <option>Select Mode of Work</option>
          </select>
        </div>

        <div className=" lg:mt-0 rounded-lg lg:w-48  w-32 h-11 bg-white  flex justify-center items-center">
          <select className="rounded-lg md:p-0">
            <option>Select Location</option>
          </select>
        </div>
        <div className='w-11/12 lg:w-28'>
          <button className=" lg:mt-0 text-white lg:w-28  w-full h-11 bg-[#0DCAF0]  md:p-2   rounded-lg flex justify-center items-center">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroDropDown