"use client";
import React from "react";
import Image from "next/image";
import { IoEye } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";

import Link from "next/link";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Loading from "@/components/loader/Loading";
import { useRouter } from "next/router";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const password = watch("password");
  const [formError, setFormError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);

    console.log(data);
    try {
      const formData = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      };
      console.log(formData);

      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      setLoading(false);
      if (res.status === 409) {
        setFormError("User already exist");
      }
      const responseData = await res.json();
      console.log(responseData);
      // console.log(res.json());

      if (res.ok) {
        setLoading(false);
        toast.success("Registration Successful");
        reset();
        setFormError("");
        router.push("/login");

        //you can add additional logic here like a toast, redirect etc

        // console.log(res);
        // if (res.status == 201) {
        //   toast.success("Registration Successful");
        //   reset();
        // }
      } else {
        const errorData = await res.json();
        console.error("user registration failed", responseData);
        setFormError(responseData.message);
      }
    } catch (error) {
      console.log(error, "Something went wrong");
      setLoading(false);
    }
  };

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  const toggle2 = () => {
    setShow2(!show2);
  };


  const passTogle = show ? "text" : "password";
  const passTogle2 = show2 ? "text" : "password";
  return (
    <div className="signup flex justify-center items-center">
      <Toaster position="top-center" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="-mt-3 lg:w-6/12 md:w-6/12 md:rounded-3xl md:bg-[#ffffffee] lg:rounded-3xl lg:bg-[#ffffffee] xl:w-6/12  xl:rounded-3xl xl:bg-[#ffffffee]"
      >
        {formError && <p className="text-red-500 font-bold">{formError}</p>}
        <div className="  lg:mt-10 flex flex-col justify-center items-center">
          <Link href="/" className="flex items-center py-4 px-2 ">
            <Image src="/JOBME.png" width={100} height={100} alt="logo" />
          </Link>

          <h1 className="font-semibold text-2xl lg:text-2xl">Sign Up!</h1>
          <p className="font-semibold text-xl lg:text-xl">
            Register to hit your dream job!
          </p>
          <div className="">
            <input
              {...register("firstname", { required: "First name is required" })}
              className="bg-transparent border-2 rounded-lg p-3 w-80 mt-5 lg:p-2"
              type="text"
              placeholder="First Name"
            />
          </div>
          {errors.firstname && (
            <p className="text-red-500">{errors.firstname.message}</p>
          )}
          <div className="">
            <input
              {...register("lastname", { required: "Last name is required" })}
              className="bg-transparent border-2 rounded-lg p-3 w-80 mt-5 lg:p-2"
              type="text"
              placeholder="Last Name"
            />
          </div>
          {errors.lastname && (
            <p className="text-red-500">{errors.lastname.message}</p>
          )}

          <div className="">
            <input
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="bg-transparent border-2 rounded-lg p-3 w-80 mt-5 lg:p-2"
              type="email"
              placeholder="Email Address"
            />
          </div>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <div className=" relative flex ">
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "password must be at least 8 characters long",
                },
              })}
              className=" bg-transparent border-2 rounded-lg p-3 w-80 mt-5 lg:p-2"
              type={passTogle}
              id="password"
              placeholder={` ${errors.Password ? " " : "Password"}`}
            />

            {show ? (
              <IoEye onClick={toggle} className="absolute right-3 top-10" />
            ) : (
              <AiFillEyeInvisible
                onClick={toggle}
                className="absolute right-3 top-10"
              />
            )}
          </div>

          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div className="relative flex">
            <input
              {...register("confirmpassword", {
                required: "confirm password is required",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
              className=" bg-transparent border-2 rounded-lg p-3 w-80 mt-5 lg:p-2 "
              type={passTogle2}
              id="password"
              placeholder={` ${errors.Password ? " " : "Password"}`}
            />
            {show ? (
              <IoEye onClick={toggle2} className="absolute right-3 top-10" />
            ) : (
              <AiFillEyeInvisible
                onClick={toggle2}
                className="absolute right-3 top-10"
              />
            )}
          </div>
          {errors.confirmpassword && (
            <p className="text-red-500">{errors.confirmpassword.message}</p>
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
            <button type="submit">{loading ? <Loading /> : "Sign Up"}</button>
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
              <Link href="/login">
                <button className="text-[#0DCAF0]">Log in</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
