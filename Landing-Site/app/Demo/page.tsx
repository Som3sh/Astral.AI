"use client";
import React, { useState } from "react";

import ProfileForm from "@/components/Form";
import Home from "@/components/Form";

function DemoPage() {
  return (
    <div className=" h-full  w-full gap-3">
      <div className="flex flex-row h-[45%] border border-black  ">
        <div className=" w-1/2  flex justify-center items-center border border-black bg-[#fdd7fd] ">
          <div className="border-2 border-black h-full w-full">
            <video
              src="/video3.mp4"
              className="aspect-square w-full h-full object-cover"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
        <div className=" w-1/2 border border-black flex justify-center items-center bg-[#d1e4f1]  ">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default DemoPage;
