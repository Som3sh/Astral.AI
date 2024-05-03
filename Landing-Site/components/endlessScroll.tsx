// components/ImageSlider.tsx
import React from "react";

const ImageSlider: React.FC = () => {
  const images = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",

    // Repeat the images for the animation loop
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
  ];

  return (
    <div className="flex items-center  justify-center h-fit bg-white border-2 border-black">
      <div className="relative w-screen h-[100px] overflow-hidden bg-white shadow-md ">
        <div className="absolute top-0 left-0 h-[100px] w-[200px] z-10 white-gradient"></div>
        <div className="absolute top-0 right-0 h-[100px] w-[200px] z-10 transform rotate-180 white-gradient"></div>
        <div
          className="flex scroll-animation w-full"
          style={{ animationDuration: "40s", width: "calc(250px * 14)" }}
        >
          {images.map((src, index) => (
            <div key={index} className="h-[100px] w-[250px]">
              <img src={src} alt="" height="100" width="250" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
