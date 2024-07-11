import React from 'react'
import { useState } from 'react';
import {useForm} from 'react-hook-form';


const Jobapplication = () => {
  const {register, handleSubmit, reset, formState:{errors},}=useForm();
  const onSubmit = async (data)=>{
    console.log(data);
  }
  return (
    <div className="">
      <div className="mx-auto  md:w-8/12 lg:w-7/12 xl:w-8/12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" rounded-lg bg-[#DBF7FD] p-1 "
        >
          <div className="w-11/12 mx-auto md:flex md:flex-col md:justify-center md:items-center ">
            <div className="md:gap-4 md:w-11/12 lg:w-11/12 xl:w-11/12">
              <div className="xl:grid-cols-2 xl:w-full xl:gap-12 lg:grid-cols-2 lg:w-full lg:gap-12 md:grid md:grid-cols-2 md:w-full gap-5 md:gap-10 mx-auto justify-center container items-center">
                <div className="p-1 mt-5">
                  <label for="name" className="text-gray-400">
                    First Name*
                    <input
                      {...register("firstname", {
                        required: "First name is required",
                      })}
                      className="bg-white  rounded-lg p-2  w-full md:w-full  "
                      type="text"
                      placeholder=""
                    />
                  </label>
                  {errors.firstname && (
                    <p className="text-red-500">{errors.firstname.message}</p>
                  )}
                </div>

                <div className="p-1 mt-5">
                  <label for="name" className="text-gray-400">
                    Last Name*
                    <input
                      {...register("lastname", {
                        required: "Last name is required",
                      })}
                      className="bg-white  rounded-lg p-2 w-full md:w-full"
                      type="text"
                      placeholder=""
                    />
                  </label>
                  {errors.lastname && (
                    <p className="text-red-500">{errors.lastname.message}</p>
                  )}
                </div>
              </div>
              <div className="xl:grid-cols-2 xl:w-full xl:gap-12 lg:grid-cols-2 lg:w-full lg:gap-12 md:grid md:grid-cols-2 md:w-full gap-5 md:gap-10 mx-auto justify-center items-center">
                <div className="p-1 mt-5">
                  <label for="name" className="text-gray-400">
                    Email*
                    <input
                      {...register("email", {
                        required: "email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      className="bg-white  rounded-lg p-2 w-full md:w-full"
                      type="email"
                      placeholder=""
                    />
                  </label>
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="p-1 mt-5 ">
                  <label for="name" className="text-gray-400">
                    Phone Number*
                    <input
                      {...register("phonenumber", {
                        required: "Phone Number is required",
                      })}
                      className="bg-white  rounded-lg p-2 w-full md:w-full"
                      type="text"
                      id=""
                      placeholder=""
                    />
                  </label>
                  {errors.phonenumber && (
                    <p className="text-red-500">{errors.phonenumber.message}</p>
                  )}
                </div>
              </div>
              <div className=" md:grid md:grid-cols-1 md:w-full gap-5 mx-auto justify-center container items-center">
                <div className="p-1 md:order-1 mt-5">
                  <label for="text" className="text-gray-400">
                    {" "}
                    Cover Letter*
                    <textarea
                      {...register("coverletter", {
                        required: "Cover Letter is required",
                      })}
                      className="bg-white  rounded-lg p-2 w-full md:w-full"
                      name="comment"
                      rows="7"
                      cols="50"
                      form=""
                    ></textarea>
                  </label>
                  {errors.coverletter && (
                    <p className="text-red-500">{errors.coverletter.message}</p>
                  )}
                </div>
              </div>
              <div className="container mx-auto p-1">
                <h3 className="text-gray-400 mt-5">Upload CV/Resume*</h3>
                <input
                  className="bg-white outline-none placeholder:bg-gray-400 file:border-0 file:py-2 file:bg-[#CCCCCCB2] rounded-lg border-[#CCCCCCB2] border-2 w-full"
                  type="file"
                  id=""
                  placeholder="Choose file"
                />
                <p className="mt-2 m:text-sm">
                  File type should be larger than 12MB. Supported file types
                  doc. docs. pdf
                </p>
                <div className="flex gap-1 bg-[#DBF7FD]">
                  <input className="bcc" type="checkbox" />
                  <p className="text-gray-400">
                    I agree to the{" "}
                    <span className="text-[#0DCAF0] font-semibold text-sm">
                      Terms & Conditions
                    </span>
                  </p>
                </div>
                <div className="bg-[#0DCAF0] w-24 text-center text-sm p-2 rounded-lg mt-4 mb-5">
                  <button className="text-white" type="submit">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Jobapplication