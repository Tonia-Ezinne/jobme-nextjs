import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Loading from "@/components/loader/Loading";
import MessageModal from "@/components/MessageModal";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = {
        name: data.name,
        email: data.email,
        phonenumber: data.phonenumber,
        subject: data.subject,
        message: data.usermessage,
      };

      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setLoading(false);
      const responseData = await res.json();

      if (res.ok) {
        setSuccess(true);
        reset();
      } else {
        console.error("user message failed", responseData);
        setFormError(responseData.message);
      }
    } catch (error) {
      console.log(error, "Something went wrong");
      setLoading(false);
      setFormError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="relative mb-10">
      <div className="contact -z-10 ">
        <div className="text-center">
          <h1 className="text-white text-2xl">Get In Touch With Us</h1>
          <p className="text-white text-lg">We want to hear from you</p>
        </div>
      </div>
      <div className="-mt-10 mx-auto w-9/12 z-1 md:w-8/12 lg:w-7/12 xl:w-8/12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg bg-[#DBF7FD] p-1"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="md:gap-4 md:w-11/12 lg:w-11/12 xl:w-11/12">
              <div className="md:grid md:grid-cols-2 md:w-full gap-5 mx-auto justify-center container items-center">
                <div className="justify-center">
                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="bg-white rounded-lg p-2 w-56 md:w-full mt-5"
                    type="text"
                    placeholder="Name*"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="justify-center">
                  <input
                    {...register("email", {
                      required: "Email Address is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="bg-white rounded-lg p-2 w-56 md:w-full mt-5"
                    type="email"
                    placeholder="Email*"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:w-full gap-5 mx-auto justify-center items-center">
                <div className="justify-center">
                  <input
                    {...register("phonenumber", {
                      required: "Phonenumber is required",
                    })}
                    className="bg-white rounded-lg p-2 w-56 md:w-full mt-5"
                    type="text"
                    placeholder="Phone number*"
                  />
                  {errors.phonenumber && (
                    <p className="text-red-500">{errors.phonenumber.message}</p>
                  )}
                </div>

                <div className="justify-center">
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="bg-white rounded-lg p-2 w-56 md:w-full mt-5"
                    type="text"
                    placeholder="Subject*"
                  />
                  {errors.subject && (
                    <p className="text-red-500">{errors.subject.message}</p>
                  )}
                </div>
              </div>

              <div className="md:grid md:grid-cols-1 md:w-full gap-5 mx-auto justify-center container items-center">
                <div className="justify-center md:order-1">
                  <textarea
                    {...register("usermessage", {
                      required: "Message is required",
                    })}
                    className="bg-white rounded-lg p-2 w-56 md:w-full mt-5"
                    name="usermessage"
                    rows="7"
                    cols="50"
                    placeholder="Message*"
                  ></textarea>
                  {errors.usermessage && (
                    <p className="text-red-500">{errors.usermessage.message}</p>
                  )}
                </div>

                <div className="md:order-2 bg-[#0DCAF0] rounded-lg mt-5 mb-6 flex justify-center">
                  <button
                    type="submit"
                    className="text-white w-56 md:w-full md:p-4 p-2"
                  >
                    {loading ? <Loading /> : <span>Send Message</span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="w-11/12 container mx-auto text-center mt-10 md:grid md:grid-cols-3">
        <div className="shadow-2xl md:w-10/12 lg:w-11/12 xl:w-10/12 p-2 mt-5 rounded-lg md:order-1">
          <div className="justify-center items-center flex">
            <Image src="/Frame117.png" width={60} height={100} alt="Call Us" />
          </div>
          <h1 className="mt-5 text-2xl">Call Us</h1>
          <p className="mt-2">Lorem ipsun ddolor sit amet</p>
          <h2 className="text-[#0DCAF0]">+44567890239</h2>
        </div>
        <div className="shadow-2xl rounded-lg md:w-10/12 lg:w-11/12 xl:w-10/12 mt-5 p-2 md:order-2">
          <div className="justify-center items-center flex">
            <Image src="/Frame119.png" width={60} height={100} alt="Call Us" />
          </div>
          <h1 className="mt-5 text-2xl semibold">Email Us</h1>
          <p className="mt-2">Lorem ipsun ddolor sit amet</p>
          <h2 className="text-[#0DCAF0]">Commando22@gmail.com</h2>
        </div>
        <div className="shadow-2xl rounded-lg md:w-10/12 lg:w-11/12 xl:w-10/12 xl:p-5 mt-5 md:order-3 mr-o">
          <div className="justify-center items-center flex">
            <Image src="/Frame120.png" width={60} height={100} alt="Call Us" />
          </div>
          <h1 className="mt-5 semibold text-2xl">Location</h1>
          <p className="mt-2">Lorem ipsun ddolor sit amet</p>
          <h2 className="text-[#0DCAF0]">23 shinghai street Lagos, Nigeria</h2>
        </div>
      </div>
      {success && <MessageModal open={success} setOpen={setSuccess} />}
      {/* Optionally, you could render an error message here */}
      {formError && (
        <p className="text-red-500 text-center mt-4">{formError}</p>
      )}
    </div>
  );
};

export default Contact;
