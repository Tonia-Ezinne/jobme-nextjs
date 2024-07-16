import React from 'react'
import Image from 'next/image'

const nav = () => {
  return (
    <div className="justify-center w-24 h-5 mt-5 border-2 border-[#000000]  rounded-full flex gap-3 p-4  items-center ">
      
      <div>
        <Image
          src="/Vector (4).png"
          width={250}
          height={150}
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <Image
        src="/Line 11.png"
        width={1}
        height={2}
        alt="logo"
      />
      <div className="-gap-5">
        <Image
          src="/Vector (5).png"
          width={39}
          height={10}
          alt="logo"
          className="w-full h-full"
        />
      </div>
      {/* <div className="h-full mx-4 border-l-2  p-5 flex items-center justify-center border-black-"></div> */}
    </div>
  );
}

export default nav