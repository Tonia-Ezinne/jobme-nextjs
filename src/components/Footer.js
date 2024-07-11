import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='border-t-2 border-b-2'>
      <div className="w-11/12 container mx-auto px-4 grid grid-cols-2 items-center ">
        <div className="footer-social flex flex-col justify-between">
          <div className="footer-img mt-5">
            <Image
              src="/JOBME.png"
              width={100}
              height={100}
              alt="footer-logo"
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-2 mt-5">
            <div className="flex flex-col">
              <h4>Find Us On:</h4>
            </div>
            <div className="footer-links flex flex-row gap-2">
              <Image src="/fiby.png" width={25} height={25} alt="facebook" />
              <Image
                src="/linklogo.png"
                width={25}
                height={25}
                alt="linkindin"
              />
              <Image
                src="/instanta.png"
                width={25}
                height={25}
                alt="instagram"
              />
              <Image src="/xster.png" width={25} height={25} alt="xster" />
            </div>
          </div>
        </div>
        <div className="footer-links flex justify-end ">
          <ul className="flex flex-col md:flex-row md:gap-6 lg:gap-20 ">
            <Link href="#">
              {" "}
              <li className="list-disc">Find Jobs</li>
            </Link>

            <Link href="#">
              {" "}
              <li className="list-disc">Contact Us</li>
            </Link>

            <Link href="#">
              {" "}
              <li className="list-disc">Contact Us</li>
            </Link>

            <Link href="#">
              {" "}
              <li className="list-disc">Log In</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer