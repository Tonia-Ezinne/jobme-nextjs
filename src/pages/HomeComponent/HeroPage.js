import React from 'react'
import Image from 'next/image';
import HeroDropDown from './HeroDropDown';

const HeroPage = () => {
  return (
    <div>
      <div className=" hero h-40 flex flex-col justify-center  items-center ">
        <div className="text-center mx-auto mt-5 md:mt-7 ">
          <h1 className="text-white text-xl w-11/12 font-bold text-center mx-auto">
            SECURE JOBS AS AN AMAZING TALENT!
          </h1>
          <button className="text-white p-2 bg-[#0DCAF0] rounded-lg mt-5  lg:hidden">
            Find Jobs
          </button>
        </div>
        <div className='hidden lg:block w-full mt-10'>
          <HeroDropDown/>
        </div>
      </div>
    </div>
  );
}

export default HeroPage