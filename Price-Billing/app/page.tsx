import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import Link from "next/link";
import { Marcellus_SC } from "next/font/google";
const marcellus = Marcellus_SC({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) {
    return redirect("/dashboard/billing");
  }
  return (
    <div className="  h-[40rem] border-2 border-black pt-[8rem] text-center font-[MarcellusSc]">
      <div
        className="taos:translate-y-[200px] taos:opacity-0 flex flex-col gap-y-5 text-4xl font-light  uppercase  tracking-wider delay-[300ms] duration-[600ms] "
        data-taos-offset="300"
      >
        <p className={marcellus.className}>Revamp Your E-Commerce</p>
        <p className={marcellus.className}> Strategy with Our </p>
        <p className={marcellus.className}> AI-Driven Marketing Automation</p>
      </div>
      <div className="flex flex-col pt-10 text-xl">
        <p>
          Accelerate your Customer Experience with chatbots and analytics,
          delivering tailored{" "}
        </p>
        <p> experiences, amplifying Sales and cultivating Leads</p>
      </div>
      <div className="pt-14">
        {/* <Link
        href="/"
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          Start Your Journey
        </span>
      </Link> */}
        <LoginLink className="group relative inline-block text-lg">
          <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
            <span className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3"></span>
            <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
            <span className="relative">Start Your Journey</span>
          </span>
          <span
            className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </LoginLink>
      </div>
    </div>
  );
}
