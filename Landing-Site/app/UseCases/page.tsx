import React from "react";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });
import { Marcellus_SC } from "next/font/google";
const marcellus = Marcellus_SC({ subsets: ["latin"], weight: "400" });
import Link from "next/link";
function useCase() {
  return (
    <div className="flex flex-col">
      <section id="useCase1">
        <div className="flex h-[54rem] w-full flex-row justify-center border-2 border-black pt-12 ">
          <div className=" animate h-[48rem]  w-[56rem] pl-24 ">
            <div className="font-pt-20 neon flex flex-col   pt-24 text-5xl uppercase tracking-widest">
              <p className={orbitron.className}>Seamless Online</p>
              <p className={orbitron.className}>Store Creation</p>
            </div>
            <div className=" items-center pt-[8rem] text-lg uppercase tracking-wider">
              <p className={marcellus.className}>
                “Businesses need to engage with customers proactively to build
              </p>
              <p className={marcellus.className}>
                {" "}
                loyalty and drive sales but lack the resources for extensive
              </p>
              <p className={marcellus.className}>
                {" "}
                customer service teams.&quot;{" "}
              </p>
            </div>
            <div className="pt-20">
              <Link
                href="/Solutions#solution1"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-xl hover:bg-gray-800 focus:shadow-outline focus:outline-none"
              >
                Solution
              </Link>
            </div>
          </div>
          <div className=" ml-10 flex items-center h-[48rem] w-[40rem]">
            {" "}
            <div className="h-4/5 w-full rounded-xl bg-gray-200"></div>
          </div>
        </div>
      </section>
      <section id="useCase2">
        <div className="flex h-[54rem] w-full flex-row justify-center border-2 border-black pt-12">
          <div className=" h-[48rem] flex items-center  w-[40rem]">
            {" "}
            <div className="h-4/5 w-full rounded-xl bg-gray-200"></div>
          </div>
          <div className=" ml-8 h-[48rem] w-[56rem] pr-24 text-right">
            <div className="font-pt-20 orange flex flex-col   pt-24 text-5xl uppercase tracking-widest">
              <p className={orbitron.className}>Streamlined</p>
              <p className={orbitron.className}>Business Operations</p>
            </div>
            <div className=" items-center pt-[8rem] text-lg uppercase tracking-wider">
              <p className={marcellus.className}>
                “Small business owners require tools to manage their online
              </p>
              <p className={marcellus.className}>
                {" "}
                business efficiently, from inventory management to customer
              </p>
              <p className={marcellus.className}>
                {" "}
                relations, without juggling multiple platforms.&quot;
              </p>
            </div>
            <div className="pt-20">
              <Link
                href="/Solution#solution2"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-xl hover:bg-gray-800 focus:shadow-outline focus:outline-none"
              >
                Solution
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="useCase3">
        <div className="flex h-[54rem] w-full flex-row justify-center border-2 border-black pt-12 ">
          <div className=" animate h-[48rem]  w-[56rem] pl-24 ">
            <div className="font-pt-20 neon flex flex-col   pt-24 text-5xl uppercase tracking-widest">
              <p className={orbitron.className}>Enhanced</p>
              <p className={orbitron.className}>Customer Engagement</p>
            </div>
            <div className=" items-center pt-[8rem] text-lg uppercase tracking-wider">
              <p className={marcellus.className}>
                “Businesses need to engage with customers proactively
              </p>
              <p className={marcellus.className}>
                {" "}
                to build loyalty and drive sales but lack the resources
              </p>
              <p className={marcellus.className}>
                {" "}
                for extensive customer service teams.
              </p>
            </div>
            <div className="pt-20">
              <Link
                href="/Solutions#solution3"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-xl hover:bg-gray-800 focus:shadow-outline focus:outline-none"
              >
                Solution
              </Link>
            </div>
          </div>
          <div className=" ml-10 flex items-center h-[48rem] w-[40rem]">
            {" "}
            <div className="h-4/5 w-full rounded-xl bg-gray-200"></div>
          </div>
        </div>
      </section>
      <section id="useCase4">
        <div className="flex h-[54rem] w-full flex-row justify-center border-2 border-black pt-12">
          <div className=" h-[48rem] flex items-center  w-[40rem]">
            {" "}
            <div className="h-4/5 w-full rounded-xl bg-gray-200"></div>
          </div>
          <div className=" ml-8 h-[48rem] w-[56rem] pr-24 text-right">
            <div className="font-pt-20 orange flex flex-col   pt-24 text-5xl uppercase tracking-widest">
              <p className={orbitron.className}>Scalability &</p>
              <p className={orbitron.className}>Growth</p>
            </div>
            <div className=" items-center pt-[8rem] text-lg uppercase tracking-wider">
              <p className={marcellus.className}>
                “Growing businesses need a flexible online platform that can
              </p>
              <p className={marcellus.className}>
                {" "}
                scale with their expanding product lines and customer
              </p>
              <p className={marcellus.className}>
                {" "}
                base without requiring a complete overhaul.&quot;
              </p>
            </div>
            <div className="pt-20">
              <Link
                href="/Solution#solution4"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-xl hover:bg-gray-800 focus:shadow-outline focus:outline-none"
              >
                Solution
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default useCase;
