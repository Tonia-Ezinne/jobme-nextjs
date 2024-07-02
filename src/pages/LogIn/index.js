import React from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import Link from "next/link";


const LogIn = () => {
  return (
    <div className="login flex justify-center items-center">
      <form className="mt-3 lg:w-6/12 lg:h-4/6 lg:rounded-3xl lg:bg-[#ffffffee]">
        <div className="  lg:mt-10 flex flex-col justify-center items-center">
          <Link href="/" className="flex items-center py-4 px-2 ">
            <Image src="/JOBME.png" width={100} height={100} alt="logo" />
          </Link>

          <h1 className="font-semibold text-2xl lg:text-2xl">Welcome back!</h1>
          <p className="font-semibold text-xl lg:text-xl">
            Log in to hit your dream job!
          </p>

          <div className="border-2 rounded-xl p-3 w-80 mt-5 lg:p-2">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className=" border-2 rounded-lg p-3 w-80 mt-5 lg:p-2 ">
            <input type="password" id="password" placeholder="Password" />
          </div>
          <FaEye className="text-gray-500 absolute right-9 top-80" />
          <div className="flex flex-col-2 gap-12 mt-5">
            <div className="flex gap-1">
              <div className="text-gray-600">
                <input type="checkbox" placeholder="" />
              </div>
              <div className="">
                <h1>Remeber Me</h1>
              </div>
            </div>

            <div className="text-[#0DCAF0]">
              <h1>Forgot Password</h1>
            </div>
          </div>
          <div className="bg-[#0DCAF0] text-white w-80 h-10 lg:p-2 rounded-xl text-lg mt-5 text-center p-2 ">
            <button className="">Log In</button>
          </div>
          <p className="font-semibold text-lg mt-10 lg:mt-3">
            Or continue with
          </p>
          <div className="flex flex-row gap-3 mt-3">
            <div>
              <Image
                src="/devicon_facebook.jpg"
                width={35}
                height={35}
                alt="facebook"
              />
            </div>
            <div>
              <Image
                src="/devicon_google.jpg"
                width={35}
                height={35}
                alt="google"
              />
            </div>
            <div>
              <Image
                src="/devicon_linkedIn.jpg"
                width={35}
                height={35}
                alt="linkdin"
              />
            </div>
          </div>

          <div className="flex gap-5 text-xl mt-5 mb-10">
            <div>
              <p className="">Dont have an account?</p>
            </div>
            <div className="">
              <Link href="/signup">
                <button className="text-[#0DCAF0]">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
