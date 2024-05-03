import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Herosection from "@/components/Herosection";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import ImageSlider from "@/components/endlessScroll";
import Reviews from "@/components/Reviews";
export default function Home() {
  return (
    <div className=" flex flex-col gap-y-1 border border-white">
      <Herosection />
      <Section1 />
      <Section2 />
      <ImageSlider />
      <Reviews />
    </div>
  );
}
