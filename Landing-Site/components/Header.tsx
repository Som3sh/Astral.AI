import React from "react";
import { Marcellus_SC } from "next/font/google";
import Link from "next/link";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });
const marcellus = Marcellus_SC({ subsets: ["latin"], weight: "400" });
function Header() {
  return (
    <div className="relative flex justify-center items-center border-2 border-[#645ba7] border-opacity-[60%] w-full h-[8rem] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-[50%]"
        autoPlay
        loop
        muted
      >
        <source src="/trial18.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-8xl tracking-widest font-black  font-[marcellus] ">
        <Link className="opacity-[85%]" href="/">
          Astral.ai
        </Link>
      </div>
    </div>
  );
}

export default Header;
