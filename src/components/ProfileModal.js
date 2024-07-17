"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ProfileModal({show, setShow}) {

  return (
    <Dialog open={show} onClose={setShow} className=" relative z-10">
      <DialogBackdrop
        transition
        className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className=" w-full  fixed inset-0 z-10  overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="absolute right-20 top-12 transform overflow-hidden rounded-lg  bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8  w-80 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className=" sm:flex flex-col sm:items-start">
                <div className="  mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className=" text-xl font-semibold leading-6 text-gray-900"
                  >
                    Account Information
                  </DialogTitle>
                  <div className="mt-2 flex">
                    <div>
                      <Image
                        src="/iconamoon_profile.png"
                        width={50}
                        height={100}
                        alt="logo"
                      />
                    </div>
                    <div>
                      <p className="text-xl  text-gray-500 mt-4 ">My Profile</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2 flex">
                    <Image
                      src="/ic_outline-settings.png"
                      width={50}
                      height={100}
                      alt="logo"
                    />

                    <p className="text-xl mt-4 text-gray-500">Settings</p>
                  </div>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2 flex">
                    <div>
                      {" "}
                      <Image
                        src="/material-symbols_help-outline (1).png"
                        width={50}
                        height={100}
                        alt="logo"
                      />
                    </div>
                    <div>
                      <p className="text-xl mt-4 text-gray-500">Help Centre</p>
                    </div>
                  </div>
                </div>

                <div className=" px-4 container mt-5  mb-5 flex flex-row gap-3">
                  <div>
                    <Image
                      src="/Ellipse 4.png"
                      width={50}
                      height={100}
                      alt="logo"
                    />
                  </div>

                  <div>
                    {" "}
                    <h1 className="font-bold">Alicia Kayle</h1>
                    <p>aliciakayla5@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
      <div className="border border-black"></div>
    </Dialog>
  );
}
