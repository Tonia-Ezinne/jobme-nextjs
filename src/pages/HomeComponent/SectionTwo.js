import React from 'react'
import Image from 'next/image'


const SectionTwo = () => {
  return (
    <div className="container w-11/12  mx-auto mt-10 mb-10 p-2">
      <div>
        <h1 className="font-semibold text-2xl text-center">How It Works</h1>
        <div className="flex flex-col justify-items-center items-center mx-auto mt-5  ">
          <Image src="/Frame 17.png" width={9000} height={9000} alt="frame" />
          <Image src="/Frame 18.jpg" width={9000} height={9000} alt="frame" />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo