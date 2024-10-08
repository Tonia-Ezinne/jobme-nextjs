import React from 'react'
import Image from 'next/image'

const SectionOne = () => {
  return (
    <div className="bg-[#F5F3F3]">
      <div className="mx-auto w-11/12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:justify-center lg:items-center md:gap-15 lg:gap-20 pb-7 pt-7">
        <div className="md:order-1 lg:order-1 md:block hidden lg:block mt-3">
          <Image
            src="/Frame 9.png"
            width={600}
            height={400}
            alt="frame"
            className="ml-0"
          />
        </div>
        <div className="order md:order-2 lg:order-2  mx-auto px-2 md:mt-5  ">
          <h1 className="font-bold text-xl lg:text-2xl xl:w-7/12">
            Find Millions of Job Opportunities Right for You!
          </h1>
          <p className="lg:text-xl mt-3 xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing
            sed platea integer habitant. Eros quis hac amet dignissim morbi
            vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras
            fringilla integer sed praesent urna amet. Donec suspendisse quis sed
            placerat lacus eupiii pretium duis semper est ac nec ultricie.
          </p>
          <div>
            <button className="text-white p-1 bg-[#0DCAF0] rounded-lg md:p-2 mt-3  hover:bg-cyan-400">
              Discover More
            </button>
          </div>
        </div>
        <div className=" md:order-3 lg:order-3 mx-auto mt-5 px-2">
          <h1 className="font-semibold text-2xl lg:text-3xl xl:w-7/12">
            Looking to be one of the World’s Best Talents?
          </h1>
          <p className="lg:text-xl xl:text-2xl mt-3">
            Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing
            sed platea integer habitant. Eros quis hac amet dignissim morbi
            vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras
            fringilla integer sed praesent urna amet. Donec suspendisse quis sed
            placerat lacus eupiii pretium duis semper est ac nec ultricie.
          </p>
          <div>
            <button className="text-white p-1 bg-[#0DCAF0] rounded-lg md:p-2 mt-3  hover:bg-cyan-400">
              Discover More
            </button>
          </div>
        </div>
        <div className="md:order-4 lg:order-4 md:block hidden lg:block -mt-6 lg:mr-0">
          <Image
            src="/Frame. 12.png"
            width={600}
            height={400}
            alt="frame"
            className="lg:ml-28"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionOne