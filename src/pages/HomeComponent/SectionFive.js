import React from 'react'
import Image from 'next/image';

const SectionFive = () => {
  return (
    <div>
      <div className="text-center mt-10 ">
        <h1 className="text-[#0DCAF0] text-lg mb-2">Testimonials</h1>
        <h1 className='font-bold text-3xl'>Feedbacks from clients</h1>
      </div>
      <div className="grid lg:grid-cols-3 container mx-auto mt-10 gap-10">
        <div className="order 1 lg:order-1 lg:w-80  bg-[#F5F3F399] rounded-xl">
          <div className="flex justify-center mt-5">
            <Image src="/testy1.png" width={60} height={60} alt='image'/>
          </div>

          <div className="text-center">
            <p className="text-grey-500 text-2xl mt-5">
              “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
              tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
              aliquet eu gravida massa vel.”
            </p>
            <h2 className="text-[#0DCAF0] mt-5 sectionfive">Alice Shata</h2>
            <h2 className="mt-2 text-xl text-grey-500">South Africa</h2>
          </div>
        </div>
        <div className="order 1 lg:order-2 lg:w-80 bg-[#F5F3F399] rounded-xl">
          <div className="flex justify-center mt-5">
            <Image src="/testy1.png" width={60} height={60} alt='image' />
          </div>

          <div className="text-center">
            <p className="text-grey-500 text-2xl mt-5">
              “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
              tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
              aliquet eu gravida massa vel.”
            </p>
            <h2 className="text-[#0DCAF0] mt-5 sectionfive">Blard James</h2>
            <h2 className="mt-2 text-xl text-grey-500">United Kingdom</h2>
          </div>
        </div>
        <div
          className="order 1 lg:order-3 lg:w-80 bg-[#F5F3F399] rounded-xl
]"
        >
          <div className="flex justify-center mt-5">
            <Image src="/testy3.png" width={60} height={60} alt='image' />
          </div>

          <div className="text-center">
            <p className="text-grey-500 text-2xl mt-5">
              “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
              tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
              aliquet eu gravida massa vel.”
            </p>
            <h2 className="text-[#0DCAF0] mt-5 sectionfive">Jide Oba</h2>
            <h2 className="mt-2 text-xl text-grey-500">Nigeria</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive