import withAuth from "@/components/hoc/withAuth";
import React from "react";
import Link from "next/link";


const JobListing = () => {
  return (
    <>
      <div> joblisting</div>












      

      <div>
        <Link href="/Joblisting/details-1">Apply</Link>
        <Link href="/Joblisting/details-2">Apply</Link>
        <Link href="/Joblisting/details-3">Apply</Link>
      </div>


    </>
  );
};

export default withAuth(JobListing);
