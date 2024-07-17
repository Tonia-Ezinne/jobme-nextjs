import React from "react";
import Image from "next/image";

const jobDetails = () => {
  return (
    <div>
      <div className=" bg-[#DBF7FD]">
        <div className="">
          <Image src="/Frame 23.png" width={70} height={100} alt="frame" />
        </div>
        <div>
          <h1 className="font-semibold text-2xl">Digital Marketer</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur. Et ultrices tellus convallis
            quam. Sed opi commodo proin gravida magnis pretium senectus aliquet.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl">Job Information:</h2>
          <div className="bg-white mt-5">
            <div></div>
            <div className="flex">
              <div>
                <Image
                  src="/clarity_employee-line.png"
                  width={20}
                  height={20}
                  alt="frame"
                />
              </div>
              <div>
                <h1>Employment Type:</h1>
              </div>
              <div>
                <h2>Full Time</h2>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image
                  src="/carbon_location.png"
                  width={20}
                  height={20}
                  alt="frame"
                />
              </div>
              <div>
                <h1>Location:</h1>
              </div>
              <div>
                <h2>United Kingdom</h2>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image
                  src="/carbon_time.png"
                  width={20}
                  height={20}
                  alt="frame"
                />
              </div>
              <div>
                <h1>Date Posted:</h1>
              </div>
              <div>
                <h2>13th April, 2024</h2>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image
                  src="/clarity_employee-line.png"
                  width={20}
                  height={20}
                  alt="frame"
                />
              </div>
              <div>
                <h1>Experience:</h1>
              </div>
              <div>
                <h2>3+ Years</h2>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image
                  src="/clarity_dollar-line.png"
                  width={20}
                  height={20}
                  alt="frame"
                />
              </div>
              <div>
                <h1>Salary:</h1>
              </div>
              <div>
                <h2>30k - 35k Per Month</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default jobDetails;
