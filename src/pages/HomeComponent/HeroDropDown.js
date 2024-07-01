import React from 'react'

const HeroDropDown = () => {
  return (
    <div className="bg-[#0dcaf063] w-full p-4 ">
      <div className="flex flex-row justify-between gap-2 w-4/5 mx-auto">
        <div className="font-semibold">
          <select className="rounded-lg  p-1">
            <option>Select Job Type</option>
          </select>
        </div>

        <div className="font-semibold">
          <select className="rounded-lg p-1">
            <option>Select Industry</option>
          </select>
        </div>

        <div className="font-semibold">
          <select className="rounded-lg p-1">
            <option>Select Mode of Work</option>
          </select>
        </div>

        <div className="font-semibold">
          <select className="rounded-lg p-1">
            <option>Select Location</option>
          </select>
        </div>
        <div>
          <button className="text-white p-1 bg-[#0DCAF0] rounded-lg md:p-1 font-semibold ">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroDropDown