import React from 'react'
import Image from 'next/image'

const SectionOne = () => {
  return (
    <div
      className="mx-auto container grid grid-cols-1 lg:grid-cols-2 lg:justify-center lg:items-center lg:gap-2 lg:mx-auto bg-[#F5F3F3]"
    >
      <div className="sectionone-top-left lg:order-1 hidden lg:block mt-5 mb-6 lg:mx-auto">
        <Image src="/Frame 9.png" width={450} height={450} alt='frame' />
      </div>
      <div className="sectionone-top-right lg:order-2 mb-6 lg:w-9/12 p-1 lg:mx-auto">
        <h1 className="font-bold text-2xl mb-5 w-11/12 mt-5 lg:text-xl lg:w-7/12">
          Find Millions of Job Opportunities Right for You!
        </h1>
        <p className=" font-semibold w-10/11 ">
          Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed
          platea integer habitant. Eros quis hac amet dignissim morbi vulputate
          eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla
          integer sed praesent urna amet. Donec suspendisse quis sed placerat
          lacus eupiii pretium duis semper est ac nec ultricie.
        </p>
        <div>
          <button className="text-white p-1 bg-[#0DCAF0] rounded-lg md:p-1 mt-5 lg:font-semibold">
            Discover More
          </button>
        </div>
      </div>
      <div className="sectionone-top-left lg:order-3 mb-5 mt-10 lg:w-9/12 lg:mx-auto p-2">
        <h1 className="font-bold text-2xl mb-5 w-11/12 mt-5 lg:text-xl lg:w-7/12">
          Looking to be one of the World’s Best Talents?
        </h1>
        <p className=" font-semibold w-10/11 ">
          Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed
          platea integer habitant. Eros quis hac amet dignissim morbi vulputate
          eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla
          integer sed praesent urna amet. Donec suspendisse quis sed placerat
          lacus eupiii pretium duis semper est ac nec ultricie.
        </p>
        <div>
          <button className="text-white p-1 bg-[#0DCAF0] rounded-lg md:p-1 md:font-thin mt-5 lg:font-semibold ">
            Discover More
          </button>
        </div>
      </div>
      <div className="sectionone-top-right lg:order-4 hidden lg:block mt-10 mb-5 mx-auto">
        <Image src="/Frame. 12.png" width={450} height={450} alt='frame'/>
      </div>
    </div>
  );
}

export default SectionOne