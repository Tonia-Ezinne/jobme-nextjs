import React, { useState } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import cookies from 'js-cookie'
import { useRouter } from "next/router";
import Loading from "@/components/loader/Loading";
import { IoIosEyeOff } from "react-icons/io";
import useFetch from "../../../hooks/useFetch";



const LogIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false)

  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      console.log(data);
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      console.log(responseData.token);


      console.log(responseData.user.id);
      Cookies.set("userId", responseData.user.id)
      //  localStorage.setItem('token', responseData.userToken)

      //using cookies to save token instead of localstorage
      console.log(responseData.token);
      Cookies.set("token", responseData.token, {
        expires: 1,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      router.push("/joblisting");
      

      if (res.ok) {
        setLoading(false)
        setSigninError("")
        
        console.log("login successfull:", responseData);
        //setUserId


        reset();
      } else {
        console.error("An error occured", responseData);
      }
    } catch (error) {}
  };

  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  const passTogle = show ? "text" : "password";

  return (
    <div className="login flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-3 md:bg-[#ffffffee]  md:w-7/12 md:rounded-3xl lg:w-6/12 lg:rounded-3xl lg:bg-[#ffffffee] xl:w-6/12 xl:rounded-3xl xl:bg-[#ffffffee]"
      >
        <div className="  lg:mt-10 flex flex-col justify-center items-center">
          <Link href="/" className="flex items-center mt-10">
            <Image src="/JOBME.png" width={100} height={100} alt="logo" />
          </Link>

          <h1 className="font-semibold text-2xl lg:text-2xl mt-5">
            Welcome back!
          </h1>
          <p className="text-xl lg:text-xl mt-1">
            Log in to hit your dream job!
          </p>

          <div className="">
            <input
              {...register("email", {
                required: "Email Address is requuired",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email adress",
                },
              })}
              className="bg-transparent border-2 rounded-xl p-3 w-80 mt-10 lg:p-2"
              type="email"
              placeholder="Email Address"
            />
          </div>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <div className="relative flex ">
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "password must be at least 8 characters long",
                },
              })}
              className="bg-transparent border-2 rounded-lg p-3 w-80 mt-5 lg:p-2"
              type={passTogle}
              id="password"
              placeholder={` ${errors.Password ? "" : "Password"}`}
            />

            {show ? (
              <FaEye
                onClick={toggle}
                className="text-gray-400 absolute right-3 top-8 "
              />
            ) : (
              <IoIosEyeOff
                onClick={toggle}
                className="text-gray-400 absolute right-3 top-8"
              />
            )}
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

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
            <button type="submit">
              {loading ? <Loading /> : <span>login </span>}
            </button>
          </div>
          <p className="text-lg mt-10 lg:mt-3">Or continue with</p>
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

          <div className="flex gap-5 text-lg mt-5 mb-10">
            <div>
              <p className="">Dont have an account?</p>
            </div>
            <div className="">
              <Link href="/signup">
                <button className="text-[#0DCAF0] text-lg">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
