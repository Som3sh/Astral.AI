import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div>
      <SignedIn>
        <Button className="flex items-center rounded-full bg-transparent px-4 py-2">
          <div className="bg-transparent">
            <UserButton afterSignOutUrl="/" />
          </div>
        </Button>
      </SignedIn>
      <SignedOut>
        <Button className="flex items-center rounded-full bg-white px-4 py-2">
          <SignInButton>
            <UserCircle size={20} color="purple" />
          </SignInButton>
        </Button>
      </SignedOut>
    </div>
  );
};

export default LoginPage;
