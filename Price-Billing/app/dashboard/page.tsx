import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Edit, File, Trash } from "lucide-react";
import { Card } from "@/components/ui/card";

import { TrashDelete } from "../components/Submitbuttons";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

import { Marcellus_SC } from "next/font/google";
const marcellus = Marcellus_SC({ subsets: ["latin"], weight: "400" });
async function getData(userId: string) {
  noStore();
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      Notes: {
        select: {
          title: true,
          id: true,
          description: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },

      Subscription: {
        select: {
          status: true,
        },
      },
    },
  });

  return data;
}

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);

  async function deleteNote(formData: FormData) {
    "use server";

    const noteId = formData.get("noteId") as string;

    await prisma.note.delete({
      where: {
        id: noteId,
      },
    });

    revalidatePath("/dasboard");
  }
  return (
    <div className="  h-[40rem]  pt-[8rem] text-center font-[MarcellusSc]">
      <div
        className="taos:translate-y-[200px] taos:opacity-0 flex flex-col gap-y-5 text-4xl font-light  uppercase  tracking-wider delay-[300ms] duration-[600ms] "
        data-taos-offset="300"
      >
        <p className={marcellus.className}>Choose Your </p>
        <p className={marcellus.className}> Path to Success </p>
      </div>
      <div className="flex flex-col pt-10 text-xl">
        <p>
          &quot;Select the plan that best fits your business needs and embark on
          your journey to success with us. Each option is designed to provide
        </p>

        <p>
          {" "}
          you with the tools and support necessary to grow and thrive in the
          digital marketplace. Compare the features and benefits below to find
        </p>

        <p>
          {" "}
          your perfect match. If you have any questions or need further
          assistance, our team is here to guide you every step of the way. Your
          success is our priority.&quot;
        </p>
      </div>
      <div className="pt-14">
        {/* <Link
        href="/"
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          Start Your Journey
        </span>
      </Link> */}
        <Link
          href="/dashboard/billing"
          className="group relative inline-block text-lg"
        >
          <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
            <span className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3"></span>
            <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
            <span className="relative">View Plan Details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </div>
  );
}
