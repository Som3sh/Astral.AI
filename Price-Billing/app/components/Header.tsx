import React from "react";
import { Marcellus_SC } from "next/font/google";
import Link from "next/link";
const marcellus = Marcellus_SC({ subsets: ["latin"], weight: "400" });

import { ThemeToggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";

export async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex justify-between border-2 border-black h-[8rem] items-center">
      <div className="text-8xl tracking-widest font-black font-[marcellus] text-center pl-[22%] flex-grow">
        <Link href="https://astralai.vercel.app/">Astral.ai</Link>
      </div>
      <div className="flex self-left gap-x-5 pr-[11%]">
        {(await isAuthenticated()) ? (
          <UserNav
            email={user?.email as string}
            image={user?.picture as string}
            name={user?.given_name as string}
          />
        ) : (
          <div className="flex items-center gap-x-5">
            <LoginLink>
              <Button>Sign In</Button>
            </LoginLink>

            <RegisterLink>
              <Button variant="secondary">Sign Up</Button>
            </RegisterLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
