import React from 'react'
import Image from 'next/image';

const SectionFour = () => {
  return (
    <div className="  bg-[#0DCAF026]  flex items-center justify-center mt-5">
      <div className="w-11/12 p-2 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-between ">
        <div className=" order md:order-1 lg:order-1 ">
          <h1 className="font-semibold text-2xl mt-5  lg:w-4/6 xl:w-4/6 xl:text-3xl ">
            Get Jobs that match your Qualifications and Skill Set
          </h1>
          <p className="text-lg  mt-5  lg:w-6/6 xl:w-5/6 xl:text-xl">
            Lorem ipsum dolor sit amet consectetur. Dolor euismod mattis nulla
            aliquam a. In ac in ornare donec consectetur. Nam semper gravida
            enim dolor velit aliquam ut ac.{" "}
          </p>
          <div className="">
            <button className="text-white  bg-[#0DCAF0] rounded-lg md:p-1 text-lg mt-5 h-9 w-36 mb-5 ">
              Upload Your CV
            </button>
          </div>
        </div>
        <div className="order md:order-1 lg:order-1 hidden md:block lg:block">
          <Image
            src="/cv.png"
            width={600}
            height={650}
            alt="cv"
            className="md:w-full lg:w-full md:h-full lg:h-full xl-w-full "
          />
        </div>
      </div>
    </div>
  );
}

export default SectionFour