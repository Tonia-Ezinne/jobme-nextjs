import React from 'react'
import Image from 'next/image';
import { GrLocation } from "react-icons/gr";
import { RxClock } from "react-icons/rx";





const Card = () => {
  return (
    <div className="container">
      <div className=" justify-between gap-3 p-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl ">
          <div className="order-1 lg:order-1 mt-6  p-7 ">
            <div className="mb-2">
              <h1 className="text-start font-bold text-3xl">
                Digital Marketer
              </h1>
              <div className="">
                <div className="flex flex-row gap-2 mt-3">
                  <div className=" flex justify-start text-start">
                    <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
                  </div>
                  <div className="mt-1 ">
                    <p className="text-gray-500 text-1xl">
                      Posted 24 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex flex-row mt-4 gap-28">
                  <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0]  h-8">
                    <h1 className="mt-1 text-sm">Full Time</h1>
                  </div>
                  <div className="">
                    <p className="">$ 30k - 35K</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-2 mb-2 ">
              <div className="flex gap-3">
                <div className="mt-2">
                  <Image src="/Frame 23.png" width={100} height={100}  alt='frame'/>
                </div>
                <div className="mt-3 flex flex-col justify-start">
                  <div>
                    <p className="font-bold text-4xl text-left mt-3">Google</p>
                  </div>
                  <div className="flex justify-center gap-2 items-center">
                    <div>
                      <GrLocation className="text-gray-600 " />
                    </div>
                    <div>
                      <p className="text-sm mt-1 text-gray-600">
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-start p-2 mb-5">
                <button className="text-white p-1 bg-[#0DCAF0] rounded-xl md:p-3 text-2xl h-16 w-44 ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl ">
          <div className="order-2 lg:order-2 mt-6  p-7 ">
            <div className="mb-2">
              <h1 className="text-start font-bold text-3xl">Web Developer</h1>
              <div className="">
                <div className="flex flex-row gap-2 mt-3">
                  <div className=" flex justify-start text-start">
                    <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
                  </div>
                  <div className="mt-1 ">
                    <p className="text-gray-500 text-1xl">Posted 2 days ago</p>
                  </div>
                </div>
                <div className="flex flex-row mt-4 gap-28">
                  <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0]  h-8">
                    <h1 className="mt-1 text-sm">Full Time</h1>
                  </div>
                  <div className="">
                    <p className="">$ 38k - 40K</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-2 mb-2 ">
              <div className="flex gap-3">
                <div className="mt-2">
                  <Image src="/Frame 2.3.jpg" width={100} height={100} alt='frame'/>
                </div>
                <div className="mt-3 flex flex-col justify-start">
                  <div>
                    <p className="font-bold text-4xl text-left mt-3">
                      Facebook
                    </p>
                  </div>
                  <div className="flex justify-center gap-2 items-center">
                    <div>
                      <GrLocation className="text-gray-600 " />
                    </div>
                    <div>
                      <p className="text-sm mt-1 text-gray-600">Australia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-start p-2 mb-5">
                <button className="text-white p-1 bg-[#0DCAF0] rounded-xl md:p-3 text-2xl h-16 w-44 ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl ">
          <div className="order-3 lg:order-3 mt-6  p-7 ">
            <div className="mb-2">
              <h1 className="text-start font-bold text-3xl">UI/UX Designer</h1>
              <div className="">
                <div className="flex flex-row gap-2 mt-3">
                  <div className=" flex justify-start text-start">
                    <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
                  </div>
                  <div className="mt-1 ">
                    <p className="text-gray-500 text-1xl">Posted 3 hours ago</p>
                  </div>
                </div>
                <div className="flex flex-row mt-4 gap-28">
                  <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0]  h-8">
                    <h1 className="mt-1 text-sm">Remote</h1>
                  </div>
                  <div className="">
                    <p className="">$ 26k - 34K</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-2 mb-2 ">
              <div className="flex gap-3">
                <div className="mt-2">
                  <Image src="/Frame 23 (3).jpg" width={100} height={100} alt='Frame'/>
                </div>
                <div className="mt-3 flex flex-col justify-start">
                  <div>
                    <p className="font-bold text-4xl text-left mt-3">
                      LinkedIn
                    </p>
                  </div>
                  <div className="flex justify-center gap-2 items-center">
                    <div>
                      <GrLocation className="text-gray-600 " />
                    </div>
                    <div>
                      <p className="text-sm mt-1 text-gray-600">South Africa</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-start p-2 mb-5">
                <button className="text-white p-1 bg-[#0DCAF0] rounded-xl md:p-3 text-2xl h-16 w-44 ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-between gap-3 p-5 grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl ">
          <div className="order-1 lg:order-1 mt-6  p-7 ">
            <div className="mb-2">
              <h1 className="text-start font-bold text-3xl">Pen Tester</h1>
              <div className="">
                <div className="flex flex-row gap-2 mt-3">
                  <div className=" flex justify-start text-start">
                    <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
                  </div>
                  <div className="mt-1 ">
                    <p className="text-gray-500 text-1xl">Posted 7 hours ago</p>
                  </div>
                </div>
                <div className="flex flex-row mt-4 gap-28">
                  <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0] h-7">
                    <h1 className="mt-1 text-sm ">Full Time</h1>
                  </div>
                  <div className="">
                    <p className="">$ 22k - 32K</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-2 mb-2 ">
              <div className="flex gap-3">
                <div className="mt-2">
                  <Image src="/Frame 23 (1).png" width={100} height={100} alt='frame'/>
                </div>
                <div className="mt-3 flex flex-col justify-start">
                  <div>
                    <p className="font-bold text-4xl text-left mt-3">Apple</p>
                  </div>
                  <div className="flex justify-center gap-2 items-center">
                    <div>
                      <GrLocation className="text-gray-600 " />
                    </div>
                    <div>
                      <p className="text-sm mt-1 text-gray-600">
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-start p-2 mb-5">
                <button className="text-white p-1 bg-[#0DCAF0] rounded-xl md:p-3 text-2xl h-16 w-44 ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl ">
          <div className="order-2 lg:order-2 mt-6  p-7 ">
            <div className="mb-2">
              <h1 className="text-start font-bold text-3xl">Data Analyst</h1>
              <div className="">
                <div className="flex flex-row gap-2 mt-3">
                  <div className=" flex justify-start text-start">
                    <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
                  </div>
                  <div className="mt-1 ">
                    <p className="text-gray-500 text-1xl">Posted 6 days ago</p>
                  </div>
                </div>
                <div className="flex flex-row mt-4 gap-28">
                  <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0]  h-8">
                    <h1 className="mt-1 text-sm">Remote</h1>
                  </div>
                  <div className="">
                    <p className="">$ 30k - 32K</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-2 mb-2 ">
              <div className="flex gap-3">
                <div className="mt-2">
                  <Image src="/Frame 23 (2).png" width={100} height={100} alt='frame' />
                </div>
                <div className="mt-3 flex flex-col justify-start">
                  <div>
                    <p className="font-bold text-4xl text-left mt-3">
                      Whatsapp
                    </p>
                  </div>
                  <div className="flex justify-center gap-2 items-center">
                    <div>
                      <GrLocation className="text-gray-600 " />
                    </div>
                    <div>
                      <p className="text-sm mt-1 text-gray-600">
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-start p-2 mb-5">
                <button className="text-white p-1 bg-[#0DCAF0] rounded-xl md:p-3 text-2xl h-16 w-44 ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-2xl ">
          <div className="order-3 lg:order-3 mt-6  p-7 ">
            <div className="mb-2">
              <h1 className="text-start font-bold text-3xl">PHP Developer</h1>
              <div className="">
                <div className="flex flex-row gap-2 mt-3">
                  <div className=" flex justify-start text-start">
                    <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
                  </div>
                  <div className="mt-1 ">
                    <p className="text-gray-500 text-1xl">Posted 22 hours ago</p>
                  </div>
                </div>
                <div className="flex flex-row mt-4 gap-28">
                  <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0]  h-8">
                    <h1 className="mt-1 text-sm">Remote</h1>
                  </div>
                  <div className="">
                    <p className="">$ 59k - 63K</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-2 mb-2 ">
              <div className="flex gap-3">
                <div className="mt-2">
                  <Image src="/Frame 23 (3).png" width={100} height={100} alt='frame' />
                </div>
                <div className="mt-3 flex flex-col justify-start">
                  <div>
                    <p className="font-bold text-4xl text-left mt-3">Microsoft</p>
                  </div>
                  <div className="flex justify-center gap-2 items-center">
                    <div>
                      <GrLocation className="text-gray-600 " />
                    </div>
                    <div>
                      <p className="text-sm mt-1 text-gray-600">
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-start p-2 mb-5">
                <button className="text-white p-1 bg-[#0DCAF0] rounded-xl md:p-3 text-2xl h-16 w-44 ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card