import Link from "next/link";

import MainNav from "@/components/main-nav";
import MobileMainNav from "./mobile-main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b border-black bg-white">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold font-adam text-sm sm:text-xl text-black">
              LOGO
            </p>
          </Link>
          <div className=" items-center hidden lg:block">
            <MainNav data={categories} />
          </div>
          <div className="lg:hidden">
            <MobileMainNav data={categories} />
          </div>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
