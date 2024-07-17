"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import Image from "next/image";


export default function UpdateStatusModal() {
  const [open, setOpen] = useState(true);

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
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    <div className="font-semibold text-2xl mb-5">
                      <h1>Update Your Application Status</h1>
                    </div>
                    <div>
                      <p className="text-gray-400 text-2xl">
                        Only Job seeker can see this!
                      </p>
                    </div>
                  </DialogTitle>
                  <div className="flex mt-10 gap-3 border-b-2 ">
                    <div className="mb-3">
                      <Image
                        src="/Frame 154.png"
                        width={40}
                        height={100}
                        alt="frame"
                      />
                    </div>
                    <div className="mb-3">
                      <h1 className="text-3xl">Applied</h1>
                    </div>
                  </div>
                  <div className="flex mt-10 gap-3 border-b-2">
                    <div className="mb-3">
                      <Image
                        src="/Frame 154 (1).png"
                        width={40}
                        height={100}
                        alt="frame"
                      />
                    </div>
                    <div>
                      <h1 className="text-3xl">Interviewing</h1>
                    </div>
                  </div>
                  <div className="flex mt-10 gap-3 border-b-2">
                    <div className="mb-3">
                      <Image
                        src="/Frame 154 (2).png"
                        width={40}
                        height={100}
                        alt="frame"
                      />
                    </div>
                    <div className="mb-3">
                      <h1 className="text-3xl">Received offer</h1>
                    </div>
                  </div>
                  <div className="flex mt-10 gap-3 border-b-2">
                    <div className="mb-3">
                      <Image
                        src="/Frame 154 (3).png"
                        width={40}
                        height={100}
                        alt="frame"
                      />
                    </div>
                    <div className="mb-3">
                      <h1 className="text-3xl">Hired by employmer</h1>
                    </div>
                  </div>
                  <div className="flex mt-10 gap-3 border-b-2">
                    <div className="mb-3">
                      <Image
                        src="/Frame 154 (4).png"
                        width={40}
                        height={100}
                        alt="frame"
                      />
                    </div>
                    <div className="mb-3">
                      <h1 className="text-3xl">Not hired by employer</h1>
                    </div>
                  </div>
                  <div className="flex mt-10 gap-3 border-b-2">
                    <div className="mb-3">
                      <Image
                        src="/Frame 154 (5).png"
                        width={40}
                        height={100}
                        alt="frame"
                      />
                    </div>
                    <div className="mb-3">
                      <h1 className="text-3xl">No longer interesed</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

