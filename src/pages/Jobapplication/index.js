import React from 'react'
import { useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Loading from '@/components/loader/Loading';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import withAuth from '@/components/hoc/withAuth';
import SuccessModals from '@/components/SuccessModal'



const Jobapplication = () => {
  const userId = Cookies.get("userId")
  const jobId = Cookies.get("jobId")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //const {jobId} = router.query

  console.log(userId);
  console.log(jobId);
  // useEffect(()={..})
  const onSubmit = async (data) => {
    if (!userId || !jobId) {
      console.error("User or job ID not available");
      return;

    }
    setLoading(true);
    
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("jobId", jobId);
      formData.append("firstName", data.firstname);
      formData.append("lastName", data.lastname);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phone);
      formData.append("coverLetter", data.coverLetter);
      // formData.append("resume", data.resume[0]); // Assuming resume is a FileList

      const response = await axios.post(
        "/api/jobs/submitapplication",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Application submitted successfully:", response.data);
      // You can add a success message or redirect the user here
      router.push("/AppliedJob"); // Redirect to a success page
    } catch (error) {
      console.error(
        "Error submitting application:",
        error.response?.data?.message || error.message
      );
      // Handle the error (e.g., show an error message to the user)
    } finally {
      setLoading(false);
    }
  };
 
  // const {register, handleSubmit, reset, formState:{errors},}=useForm();
  // const [loading, setLoading] = useState(false)
  // const onSubmit = async (data)=>{
  //   setLoading(true);
    
  //   console.log(data);
    
  // }
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
              <div className="md:grid md:grid-cols-1 md:w-full gap-5 mx-auto justify-center container items-center">
                <div className="p-1 md:order-1 mt-5">
                  <label htmlFor="text" className="text-gray-400">
                    Cover Letter*
                    <textarea
                      {...register("coverletter", {
                        required: "Cover Letter is required",
                      })}
                      className="bg-white rounded-lg p-2 w-full md:w-full"
                      name="coverletter"
                      rows="7"
                      cols="50"
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
                  <input
                    {...register("checkbox", { required: "This is required" })}
                    type="checkbox"
                    className="form-checkbox"
                  />
                  <p className="text-gray-400">
                    I agree to the{" "}
                    <span className="text-[#0DCAF0] font-semibold text-sm">
                      Terms & Conditions
                    </span>
                  </p>
                </div>
                {errors.checkbox && (
                  <p className="text-red-500">{errors.checkbox.message}</p>
                )}

                <div className="bg-[#0DCAF0] w-24 text-center text-sm p-2 rounded-lg mt-4 mb-5">
                  <button className="text-white" type="submit">
                    {loading ? <Loading /> : <span>Apply Now</span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <SuccessModals />
      </div>
    </div>
  );
}

export default Jobapplication