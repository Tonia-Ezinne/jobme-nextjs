"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoIosCheckmark } from "react-icons/io";
import Link from "next/link";

export default function Example({open, setOpen}) {
//   const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg p-5 bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8  w-96 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 text-center justify-center flex">
              <div className="sm:flex sm:items-center">
                <div className="mt-3 flex justify-center text-center  ">
                  <DialogTitle
                    as="h3"
                    className="text-xl font-semibold leading-6 text-gray-900 justify-center flex text-center"
                  >
                    Message Sent Successfully!
                  </DialogTitle>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <IoIosCheckmark className="mt-1 text-white rounded-full bg-[#0DCAF0] w-12 h-12 " />
              </div>
            </div>
            <div className="flex gap-1 text-center justify-center mt-3">
              <div>
                <p className=" text-center text-lg">Please proceed back to the</p>
              </div>
              <div>
                <Link
                  href="/"
                  className=" text-center text-[#0DCAF0] text-lg "
                >
                  Home Page
                </Link>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
