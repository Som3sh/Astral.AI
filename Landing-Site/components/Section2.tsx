import React from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });
import { Marcellus_SC } from "next/font/google";
const marcellus = Marcellus_SC({ subsets: ["latin"], weight: "400" });
import Link from "next/link";

function Section2() {
  return (
    <div className="flex h-[54rem] w-full flex-row justify-center border-2  bg-[#c6c8e9] bg-opacity-[80%] border-[#645ba7] pt-12">
      <div className=" h-[48rem]  w-[40rem]">
        <div className="relative h-4/5 w-full rounded-xl overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-[80%]"
            autoPlay
            loop
            muted
          >
            <source src="/trial20.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className=" ml-8 h-[48rem] w-[56rem] pr-24 text-right">
        <div className="font-pt-20 orange flex flex-col  gap-y-3 pt-24 text-6xl uppercase tracking-widest text-shadow">
          <p className={orbitron.className}>Reboot</p>
          <p className={orbitron.className}>Marketing</p>
        </div>
        <div className=" items-center pt-[8rem] text-lg uppercase tracking-wider">
          <p className={marcellus.className}>
            “Launch your e-commerce empire into the cosmos with our
          </p>
          <p className={marcellus.className}>
            {" "}
            platform—your gateway to infinite retail possibilities. Explore
          </p>
          <p className={marcellus.className}>
            {" "}
            the fusion of cutting-edge technology and Suit up for success
          </p>
          <p className={marcellus.className}>
            {" "}
            and let&apos;s conquer the digital universe together.”{" "}
          </p>
        </div>
        <div className="pt-20">
          <Link
            href="/UseCases"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section2;
