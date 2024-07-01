import React from 'react'
import Image from 'next/image';

const SectionFour = () => {
  return (
    <div className="container mx-auto bg-[#0DCAF026]">
      <div className="grid lg:grid-cols-2 p-5">
        <div className="lg:w-96 h-80 mt-10">
          <h1 className="font-bold text-3xl mt-10 ">
            Get Jobs that match your Qualifications and Skill Set
          </h1>
          <p className="font-semibold text-sm mt-10">
            Lorem ipsum dolor sit amet consectetur. Dolor euismod mattis nulla
            aliquam a. In ac in ornare donec consectetur. Nam semper gravida
            enim dolor velit aliquam ut ac.{" "}
          </p>
          <div className="">
            <button className="text-white p-1 bg-[#0DCAF0] rounded-xl md:p-1 text-xl mt-5 h-12 font-semibold w-44 ">
              Upload Your CV
            </button>
          </div>
        </div>
        <div className="p-5">
          <Image src="/cv.png" width={600} height={600} alt='cv'/>
        </div>
      </div>
    </div>
  );
}

export default SectionFour