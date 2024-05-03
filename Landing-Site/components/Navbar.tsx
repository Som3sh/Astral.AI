import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar1 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full border border-black h-20  px-10">
        <div className="flex flex-row gap-x-24 justify-center pt-6  ">
          <div className="flex flex-row gap-x-2 items-center ">
            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger>Use Cases</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/UseCases">View</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Use Case 1</DropdownMenuItem>
                  <DropdownMenuItem>Use Case 2</DropdownMenuItem>
                  <DropdownMenuItem>Use Case 3</DropdownMenuItem>
                  <DropdownMenuItem>Use Case 4</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden lg:block">
              <RiArrowDropDownLine size={22} />
            </div>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger>Solutions</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/Solutions">View</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Solution 1</DropdownMenuItem>
                  <DropdownMenuItem>Solution 2</DropdownMenuItem>
                  <DropdownMenuItem>Solution 3</DropdownMenuItem>
                  <DropdownMenuItem>Solution 4</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden lg:block">
              <RiArrowDropDownLine size={22} />
            </div>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger>Resources</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/Resources">View</Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Resource 1</DropdownMenuItem>
                  <DropdownMenuItem>Resource 2</DropdownMenuItem>
                  <DropdownMenuItem>Resource 3</DropdownMenuItem>
                  <DropdownMenuItem>Resource 4</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden lg:block">
              <RiArrowDropDownLine size={22} />
            </div>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger>Company</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/Company">View</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>About</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden lg:block">
              <RiArrowDropDownLine size={22} />
            </div>
          </div>
          <div className="pt-1 :hidden">
            <button>
              <IoSearch size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
