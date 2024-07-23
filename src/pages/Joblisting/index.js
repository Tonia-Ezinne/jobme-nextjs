import withAuth from "@/components/hoc/withAuth";
import React from "react";
import Link from "next/link";
import HeroDropDown from "../HomeComponent/HeroDropDown";
import Image from "next/image";
import Card from "../HomeComponent/Card";
import { useState, useEffect } from "react";
import JobCard from "@/components/JobCard";


// export async function getServerSideProps(){
//   const res = await fetch('http://localhost:3000/api/jobs/jobuploads');
//   const data = await res.json()
//   console.log(data);

//   return {
//     props: {
//       jobs: data.data
//     }

//   }



// }




const JobListing = () => {


  return (
    <>
    <div>
  
    </div>
      <div>
        <div className="background-c w-full h-12"></div>
        <div>
          <HeroDropDown />
        </div>
      </div>
      <JobCard/>


      {/* <div>
        <Link href="/Joblisting/details-1">Apply</Link>
        <Link href="/Joblisting/details-2">Apply</Link>
        <Link href="/Joblisting/details-3">Apply</Link>
      </div> */}
    </>
  );
};

export default withAuth(JobListing);
