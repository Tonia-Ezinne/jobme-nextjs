// "use client";

// import { useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   DialogTitle,
// } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
// import logout from "../../utils/logout";

// export default function LogModal() {
//   const [open, setOpen] = useState(true)

//   return (
//     <Dialog open={show} onClose={setShow} className="relative z-10">
//       <DialogBackdrop
//         transition
//         className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
//       />

//       <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//           <DialogPanel
//             transition
//             className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
//           >
//             <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//               <div className="sm:flex sm:items-start">
//                 <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                   <ExclamationTriangleIcon
//                     aria-hidden="true"
//                     className="h-6 w-6 text-red-600"
//                   />
//                 </div>
//                 <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                   <DialogTitle
//                     as="h3"
//                     className="text-base font-semibold leading-6 text-gray-900"
//                   >
//                     Do you want to Log Out.
//                   </DialogTitle>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gray-50 px-4 py-3 flex  sm:px-6">
//               <button
//                 type="button"
//                 onClick={logout}
//                 className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
//               >
//                 Yes
//               </button>
//               <button
//                 type="button"
//                 data-autofocus
//                 onClick={() => setOpen(false)}
//                 className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//               >
//                 No
//               </button>
//             </div>
//           </DialogPanel>
//         </div>
//       </div>
//     </Dialog>
//   );
// }


import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import logout from "../../utils/logout";

export default function LogModal({show, setShow}) {
  // const [show, setShow] = useState(true); // Changed 'open' to 'show' and 'setOpen' to 'setShow'

  return (
    <Dialog open={show} onClose={setShow} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0  z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full  items-end justify-end p-4 -mt-40 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative  transform overflow-hidden  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8  w-96 sm:translate-y-0 sm:scale-95">
            <div className="bg-white flex justify-center items-center  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className=" justify-center items-center">
                <div className="bg-red-100 text-center justify-center items-center flex rounded-full  w-10 h-10  mx-auto ">
                  <ExclamationTriangleIcon
                    className="w-10 h-10   text-red-600 "
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-xl font-semibold leading-6 text-gray-900"
                  >
                    Are you sure you want to Logout?
                  </DialogTitle>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-center gap-5 sm:px-6">
              <button
                type="button"
                onClick={logout}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setShow(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                No
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
