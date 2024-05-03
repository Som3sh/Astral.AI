// Form.tsx
"use client";
import next from "next";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { Marcellus_SC } from "next/font/google";
const marcellus = Marcellus_SC({ subsets: ["latin"], weight: "400" });
interface IFormInput {
  username: string;
  email: string;
  designation: string;
  phoneNumber: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const router = useRouter();

  const onSubmit = async (data: IFormInput) => {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const user = await response.json();

      router.push("/");
    } else {
      const error = await response.json();
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center h-full w-full">
      <div className="flex flex-col items-center justify-center flex-grow mx-24">
        <div className=" flex justify-center border-[3px] border-black transition-all duration-300 ease-linear gap-4 py-8 px-10 w-4/5  rounded-2xl  bg-[#fdd7fd]  hover:shadow-black shadow-lg">
          <h1 className="text-3xl font-medium  px-2 rounded-lg ">
            Book a Demo
          </h1>
        </div>
        <form
          className=" flex flex-col border-[3px] border-black transition-all duration-300 ease-linear gap-4 py-8 px-10 w-4/5  rounded-2xl bg-[#FFE8A7] hover:shadow-black shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-4/5 self-center  ">
            <input
              {...register("username", { required: true })}
              placeholder="Username"
              className="px-2 py-2 border-2 border-black  hover:shadow-inner rounded-xl text-gray-800 font-[MarcellusSc]"
              id="username"
            />
            {errors.username && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="flex flex-col self-center  w-4/5">
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="px-3 py-2 border-2 border-black  hover:shadow-inner rounded-xl text-gray-800 font-[MarcellusSc]"
              id="email"
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="flex flex-col self-center  w-4/5">
            <input
              {...register("designation", { required: true })}
              placeholder="Designation"
              className="px-3 py-2 border-black hover:shadow-inner border-2 rounded-xl text-gray-800 font-[MarcellusSc]"
              id="designation"
            />
            {errors.designation && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="flex flex-col self-center  w-4/5">
            <input
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
              className="px-3 py-2 hover:shadow-inner border-2 border-black rounded-xl text-gray-800 font-[MarcellusSc]"
              id="phoneNumber"
            />
            {errors.phoneNumber && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="pl-[10%] ">
            <button
              type="submit"
              className="relative inline-block text-lg group mt-6"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg  bg-[#fdd7fd]"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Submit</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
