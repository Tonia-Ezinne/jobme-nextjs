import React from 'react'
import Image from 'next/image'

const SectionOne = () => {
  return (
    <div className="bg-[#F5F3F3]">
      <div className="mx-auto w-11/12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:justify-center lg:items-center md: gap-15 md:gap-16 lg:gap-20 lg:mx-auto  pb-7 pt-7">
        <div className="md:order-1 lg:order-1 md:block hidden lg:block mt-3">
          <Image
            src="/Frame 9.png"
            width={450}
            height={400}
            alt="frame"
            className="xl:w-full ml-0"
          />
        </div>
        <div className="order md:order-2 lg:order-2  mx-auto mr-0 px-2 md:mt-5  ">
          <h1 className="font-bold text-xl lg:text-2xl ">
            Find Millions of Job Opportunities Right for You!
          </h1>
          <p className="lg:text-xl mt-3">
            Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing
            sed platea integer habitant. Eros quis hac amet dignissim morbi
            vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras
            fringilla integer sed praesent urna amet. Donec suspendisse quis sed
            placerat lacus eupiii pretium duis semper est ac nec ultricie.
          </p>
          <div>
            <button className="text-white p-1 md:mb-5 bg-[#0DCAF0] rounded-lg md:p-1 mt-3 lg:font-semibold">
              Discover More
            </button>
          </div>
        </div>
        <div className=" md:order-3 lg:order-3 mx-auto mr-0 px-2 md:mt-5 ">
          <h1 className="font-semibold text-2xl lg:text-3xl">
            Looking to be one of the World’s Best Talents?
          </h1>
          <p className="lg:text-xl mt-3">
            Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing
            sed platea integer habitant. Eros quis hac amet dignissim morbi
            vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras
            fringilla integer sed praesent urna amet. Donec suspendisse quis sed
            placerat lacus eupiii pretium duis semper est ac nec ultricie.
          </p>
          <div>
            <button className="text-white p-1 bg-[#0DCAF0] rounded-lg md:p-1 mt-3 lg:font-semibold ">
              Discover More
            </button>
          </div>
        </div>
        <div className="md:order-4 lg:order-4 md:block hidden lg:block mt-3 mr-0 w-full">
          <Image
            src="/Frame. 12.png"
            width={450}
            height={400}
            alt="frame"
            className="xl:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionOne