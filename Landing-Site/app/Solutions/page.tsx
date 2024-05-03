import React from "react";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });
import { Marcellus_SC } from "next/font/google";
const marcellus = Marcellus_SC({ subsets: ["latin"], weight: "400" });
import Link from "next/link";
function Solution() {
  return (
    <div className="flex flex-col">
      <section id="solution1">
        <div className="flex h-[52rem] w-full flex-row justify-center items-center  border-2 border-black  ">
          <div className=" animate h-[48rem]  w-[56rem] pl-24 ">
            <div className="font-pt-20 neon flex flex-col   pt-24 text-5xl uppercase tracking-widest">
              <p className={orbitron.className}>Rapid </p>
              <p className={orbitron.className}>Deployement</p>
            </div>
            <div className=" items-center pt-[8rem] text-lg uppercase tracking-wider">
              <p className={marcellus.className}>
                “Our e-commerce website builder offers a selection of
              </p>
              <p className={marcellus.className}>
                {" "}
                professional templates that can be easily customized to suit any
              </p>
              <p className={marcellus.className}>
                {" "}
                business niche. Users can quickly add products, configure
              </p>
              <p className={marcellus.className}>
                {" "}
                payment and shipping options, and launch their store with a few
              </p>
              <p className={marcellus.className}>
                {" "}
                clicks making the transition to online sales smooth and
                cost-effective.&quot;
              </p>
            </div>
          </div>
          <div className=" ml-10 flex items-center h-[48rem] w-[40rem]">
            {" "}
            <div className="h-4/5 w-full rounded-xl bg-gray-200"></div>
          </div>
        </div>
      </section>
      <section id="solution2">
        <div className="flex h-[52rem] w-full flex-row justify-center border-2 border-black  items-center">
          <div className=" flex items-center h-[48rem]  w-[40rem]">
            {" "}
            <div className="h-4/5 w-full rounded-xl bg-gray-200"></div>
          </div>
          <div className=" ml-8 h-[48rem] w-[56rem] pr-24 text-right">
            <div className="font-pt-20 orange flex flex-col   pt-24 text-5xl uppercase tracking-widest">
              <p className={orbitron.className}>Unified</p>
              <p className={orbitron.className}>Management</p>
            </div>
            <div className=" items-center pt-[8rem] text-lg uppercase tracking-wider">
              <p className={marcellus.className}>
                “The platform integrates essential e-commerce features,
              </p>
              <p className={marcellus.className}>
                {" "}
                including inventory tracking, order management, and customer
              </p>
              <p className={marcellus.className}>
                {" "}
                relationship management (CRM). This all-in-one approach saves
              </p>
              <p className={marcellus.className}>
                time and resources, allowing business owners to focus on growth
              </p>
              <p className={marcellus.className}>
                rather than backend administration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="solution3">
        <div className="flex h-[52rem] w-full flex-row justify-center border-2 border-black  items-center">
          <div className=" animate h-[48rem]  w-[56rem] pl-24 ">
            <div className="font-pt-20 neon flex flex-col   pt-24 text-5xl uppercase tracking-widest">
              <p className={orbitron.className}>Engagement</p>
              <p className={orbitron.className}>Automation</p>
            </div>
            <div className=" items-center pt-[8rem] text-lg uppercase tracking-wider">
              <p className={marcellus.className}>
                “Our website builder includes options for chatbot integration,
              </p>
              <p className={marcellus.className}>
                {" "}
                enabling businesses to offer personalized customer support
              </p>
              <p className={marcellus.className}>
                {" "}
                around the clock. Additionally, integrated marketing tools
              </p>
              <p className={marcellus.className}>
                {" "}
                for email and WhatsApp allow for targeted outreach and
              </p>
              <p className={marcellus.className}>
                {" "}
                promotions, fostering stronger customer relationships.
              </p>
            </div>
          </div>
          <div className=" ml-10 flex items-center h-[48rem] w-[40rem]">
            {" "}
            <div className="h-4/5 w-full rounded-xl bg-gray-200"></div>
          </div>
        </div>
      </section>
      <section id="solution4">
        <div className="flex h-[52rem] w-full flex-row justify-center border-2 border-black  items-center">
          <div className=" flex items-center h-[48rem]  w-[40rem]">
            {" "}
            <div className="h-4/5 w-full rounded-xl bg-gray-200"></div>
          </div>
          <div className=" ml-8 h-[48rem] w-[56rem] pr-24 text-right">
            <div className="font-pt-20 orange flex flex-col   pt-24 text-5xl uppercase tracking-widest">
              <p className={orbitron.className}>Growth</p>
              <p className={orbitron.className}> Adaptibility</p>
            </div>
            <div className=" items-center pt-[8rem] text-lg uppercase tracking-wider">
              <p className={marcellus.className}>
                “The platform is designed to grow with the business, offering
              </p>
              <p className={marcellus.className}>
                {" "}
                the ability to add new products, expand marketing campaigns, and
              </p>
              <p className={marcellus.className}>
                {" "}
                enhance site functionality without needing to migrate to a new
              </p>
              <p className={marcellus.className}>
                {" "}
                service. When the time is right, businesses can opt for a more
              </p>
              <p className={marcellus.className}>
                {" "}
                personalized website through our advanced services or seamlessly
              </p>
              <p className={marcellus.className}>
                {" "}
                transition to larger market players.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solution;
