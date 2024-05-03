"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { Category } from "@/types";
import MainNav from "./main-nav";

interface MobileMainNavsProps {
  data: Category[];
}

const MobileMainNav: React.FC<MobileMainNavsProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex ml-3 mr-4 text-xs items-center gap-x-1 text-black lg:hidden px-1 py-1 bg-transparent"
      >
        Categories
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative  z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position */}
        <div className="fixed text-left inset-0 z-40 flex">
          <Dialog.Panel className="relative float-left ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4  flex flex-col  space-y-4">
              <MainNav data={data} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
export default MobileMainNav;
