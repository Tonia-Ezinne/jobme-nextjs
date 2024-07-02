import React from 'react'
import Image from 'next/image';

const SectionFive = () => {
  return (
    <div className="container w-11/12 mx-auto flex flex-col justify-center ">
      <div className="text-center mt-10 ">
        <h1 className="text-[#0DCAF0] text-lg ">Testimonials</h1>
        <h1 className="font-semibold text-xl">Feedbacks from clients</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 mt-4 justify-between mx-auto gap-3">
        <div className="order 1 lg:order-1 lg:w-72 p-2 bg-[#F5F3F399] rounded-xl">
          <div className="flex justify-center mt-3 ">
            <Image src="/testy1.png" width={50} height={60} alt="image" />
          </div>

          <div className="text-center">
            <p className="text-grey-500 text-lg mt-3 ">
              “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
              tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
              aliquet eu gravida massa vel.”
            </p>
            <h2 className="text-[#0DCAF0] mt-5 sectionfive">Alice Shata</h2>
            <h2 className=" text-lg text-grey-500">South Africa</h2>
          </div>
        </div>
        <div className="order 1 lg:order-2 lg:w-72 p-2 bg-[#F5F3F399] rounded-xl hidden md:block lg:block">
          <div className="flex justify-center mt-3">
            <Image src="/testy1.png" width={50} height={60} alt="image" />
          </div>

          <div className="text-center">
            <p className="text-grey-500 text-lg mt-3">
              “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
              tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
              aliquet eu gravida massa vel.”
            </p>
            <h2 className="text-[#0DCAF0] mt-5 sectionfive">Blard James</h2>
            <h2 className=" text-lg text-grey-500">United Kingdom</h2>
          </div>
        </div>
        <div
          className="order 1 lg:order-3 lg:w-72 p-2 bg-[#F5F3F399] rounded-xl hidden md:block lg:block
]"
        >
          <div className="flex justify-center mt-3">
            <Image src="/testy3.png" width={50} height={60} alt="image" />
          </div>

          <div className="text-center">
            <p className="text-grey-500 text-lg mt-3">
              “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
              tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
              aliquet eu gravida massa vel.”
            </p>
            <h2 className="text-[#0DCAF0] mt-5 sectionfive">Jide Oba</h2>
            <h2 className="text-xl text-grey-500">Nigeria</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive