"use client";
import Link from "next/link";
import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { IoSearch } from "react-icons/io5";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "../components/ui/command";
import { LuGanttChartSquare } from "react-icons/lu";
import { MdCoPresent } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";

const Search = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <p
        className="text-muted-foreground flex flex-row pl-6  pt-0.5 text-sm"
        onClick={handleClick}
      >
        <IoSearch className="hover:bg-accent" size={22} />
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LuGanttChartSquare className="mr-2 h-4 w-4" />
              <span>Solutions</span>
            </CommandItem>
            <CommandItem>
              <MdCoPresent className="mr-2 h-4 w-4" />
              <Link href="/Demo">
                <span>Demo</span>
              </Link>
            </CommandItem>
            <CommandItem>
              <FaMoneyBills className="mr-2 h-4 w-4" />
              <Link href="http://localhost:4002">
                <span>Plans and Billings</span>
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
export default Search;
