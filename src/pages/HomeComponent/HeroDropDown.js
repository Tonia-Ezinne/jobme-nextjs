import React from 'react'

const HeroDropDown = () => {
  return (
    <div className="bg-[#0dcaf063] lg:py-4 md:py-2  ">
      <div className="w-11/12 container mx-auto flex flex-row justify-between  md:gap-3 ">
        <div className=" lg:w-44  md:w-36 md:h-11 bg-white rounded-lg flex justify-center items-center ">
          <select className="rounded-lg   md:p-0">
            <option >Select Job Type</option>
          </select>
        </div>

        <div className=" lg:w-44 md:w-36 md:h-11 bg-white rounded-lg flex justify-center items-center ">
          <select className="rounded-lg  md:p-0">
            <option>Select Industry</option>
          </select>
        </div>

        <div className=" lg:w-48 md:w-44 md:h-11 bg-white rounded-lg flex justify-center items-center ">
          <select className="rounded-lg md:p-0">
            <option>Select Mode of Work</option>
          </select>
        </div>

        <div className=" lg:w-44 md:w-36 md:h-11 bg-white rounded-lg flex justify-center items-center">
          <select className="rounded-lg md:p-0">
            <option>Select Location</option>
          </select>
        </div>
        <div>
          <button className="text-white lg:w-44  md:w-24 md:h-11 bg-[#0DCAF0]  md:p-2   rounded-lg flex justify-center items-center">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroDropDown