import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcDiscover } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black border border-white z-50">
      <div className=" h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-xl pb-4">
              <a href="">General Information</a>
            </p>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <div className="flex flex-col">
            <ul>
              <p className="text-white font-bold text-xl pb-4">Company</p>
              <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <Link href="/">FAQS</Link>
              </li>
              <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <Link href="/">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-5">
          <div className=" flex flex-col">
            <ul>
              <p className="text-white font-bold text-xl pb-4">Contact </p>
              <div className="flex flex-row gap-2 items-right">
                <a href="">
                  {" "}
                  <FaInstagram className="text-2xl text-gray-300 cursor-pointer hover:text-purple-600" />
                </a>

                <a href="">
                  <FaTwitter className="text-2xl text-gray-300 cursor-pointer hover:text-blue-600" />
                </a>
                <a href="">
                  <FaLinkedin className="text-2xl text-gray-300 cursor-pointer hover:text-blue-500" />
                </a>
                <a href="">
                  <FaFacebook className="text-2xl text-gray-300 cursor-pointer hover:text-blue-400" />
                </a>
              </div>
            </ul>
            <ul>
              <li className="text-gray-300 text-md pt-4 pb-1 font-semibold hover:text-blue-600 cursor-pointer">
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
            <ul></ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center  p-5 ">
        <h1 className=" text-white font-semibold">
          © 2024 All rights reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
