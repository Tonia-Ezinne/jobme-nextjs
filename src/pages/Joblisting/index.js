import withAuth from "@/components/hoc/withAuth";
import React from "react";
import Link from "next/link";
import HeroDropDown from "../HomeComponent/HeroDropDown";
import { GrLocation } from "react-icons/gr";
import { RxClock } from "react-icons/rx";
import Image from "next/image";
import Card from "../HomeComponent/Card";




const JobListing = () => {
  return (
    <>
      <div>
        <div className="background-c w-full h-12"></div>
        <div>
          <HeroDropDown />
        </div>
      </div>




      <div className=" lg:hidden ">
        <Card/>
      </div>

      





      <div className="w-11/12 hidden lg:block  shadow-xl  rounded-lg mx-auto p-3 mt-10 ">
        <div className="container flex flex-col-4 w-11/12 mx-auto gap-4  items-center justify-between">
          <div className="flex gap-2 ">
            <div className="-mt-1">
              <Image src="/Frame 23.png" width={70} height={100} alt="frame" />
            </div>
            <div className="grid grid-row">
              <div className="">
                <h1 className="text-start font-semibold text-xl mt-3">
                  Digital Marketer
                </h1>
              </div>
              <div className="-mt-1 text-lg">
                <h2>Google</h2>
              </div>
            </div>
          </div>

          <div>
            <div className=" bg-[#0dcaf034] rounded w-16 p-1 text-[#0DCAF0] ">
              <h1 className=" text-sm">Full Time</h1>
            </div>
            <div className="flex flex-row gap-1">
              <div className=" flex justify-start text-start">
                <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end h-8" />
              </div>
              <div className="mt-1 ">
                <p className="text-gray-400 text-1xl">Posted 24 hours ago</p>
              </div>
            </div>
          </div>
          <div className="-mt-1">
            <div className="flex justify-center gap-2 items-center">
              <div>
                <GrLocation className="text-gray-600 " />
              </div>
              <div>
                <p className="text-sm mt-1 text-gray-400">United Kingdom</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="">$ 30k - 35K</p>
            </div>
          </div>
          <div>
            <div className=" w-32 -mt-6 ">
              <button className="text-white w-full bg-[#0DCAF0] rounded-lg  text-sm  p-3 ">
                Apply Now
              </button>
            </div>
          </div>

          

          {/* <div>
          <div className="w-11/12  shadow-xl  rounded-2xl flex items-center justify-center mx-auto  mt-5 mb-5">
            <div className="order-1 lg:order-1 mt-6 w-full p-5 ">
              <div className="mb-2">
                <h1 className="text-start font-semibold text-xl">
                  Digital Marketer
                </h1>
                <div className="">
                  <div className="flex flex-row gap-2 mt-3">
                    <div className=" flex justify-start text-start">
                      <RxClock className="flex text-[#0dcaf0]  my-auto items-end justify-end w-10/12 h-8" />
                    </div>
                    <div className="mt-1 ">
                      <p className="text-gray-400 text-1xl">
                        Posted 24 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row mt-4 justify-between">
                    <div className=" bg-[#0dcaf034] rounded text-[#0DCAF0]">
                      <h1 className="mt-1 text-sm">Full Time</h1>
                    </div>
                    <div className="text-">
                      <p className="">$ 30k - 35K</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-2 mb-2">
                <div className="flex gap-3">
                  <div className="mt-2">
                    <Image
                      src="/Frame 23.png"
                      width={90}
                      height={100}
                      alt="frame"
                    />
                  </div>
                  <div className="mt-3 flex flex-col justify-start">
                    <div>
                      <p className="font-bold text-xl text-left mt-3">Google</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                      <div>
                        <GrLocation className="text-gray-600 " />
                      </div>
                      <div>
                        <p className="text-sm mt-1 text-gray-400">
                          United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-start p-2 mb-5">
                  <button className="text-white  bg-[#0DCAF0] rounded-lg md:p-3 text-lg  p-1 ">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>

      {/* <div>
        <Link href="/Joblisting/details-1">Apply</Link>
        <Link href="/Joblisting/details-2">Apply</Link>
        <Link href="/Joblisting/details-3">Apply</Link>
      </div> */}
    </>
  );
};

export default withAuth(JobListing);
