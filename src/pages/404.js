import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ErrorLayout from '@/components/ErrorLayout';






const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
             router.replace("/");
        }, 4000)
}, [router])

  return (
    <ErrorLayout>
      <div className="text-center  grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto container">
        <div className=" order-1 lg:order-2 md: mt-20 ">
          <Image src="/rafiki.png" width={600} height={600} alt='Error'/>
        </div>
        <div className="order-2 lg:order-1 lg:mt-7">
          <h1 className="font-bold text-6xl mt-6 md:mt-20">Ooops!</h1>
          <h1 className="text-5xl font-semibold mt-5">Page not found</h1>
          <p className="text-center text-2xl font-semibold mt-5">
            This page doesn&apos;t exist, we suggest you go back to home.
          </p>

          <Link href="/">
            {" "}
            <button className=" bg-[#0DCAF0] my-10 p-2 rounded-xl text-white text-md">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </ErrorLayout>
  );
}

export default NotFound