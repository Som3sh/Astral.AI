"use client";

import * as React from "react";
import Link from "next/link";
import Search from "@/components/Search";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar2 = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="h-20 flex items-center justify-center w-full bg-violet-100  border-2 border-[#645ba7] border-opacity-[60%]  px-10 ">
        <div className="flex  flex-row  gap-x-24   ">
          <NavigationMenu>
            <NavigationMenuList>
              <div className="flex flex-row gap-x-6 ">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-[MarcellusSc] bg-violet-100 text-lg font-medium">
                    Use Cases
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="grid gap-3 bg-violet-50 bg-opacity-[50%] p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <ListItem
                        href="/UseCases#useCase1"
                        title="Store Creation"
                      >
                        Businesses need to create a .....
                      </ListItem>
                      <ListItem
                        href="/UseCases#useCase2"
                        title="Business Operations"
                      >
                        Small Business owners need tools to .....
                      </ListItem>
                      <ListItem
                        href="/UseCases#useCase3"
                        title="Customer Engagement"
                      >
                        Businesses need to engage with .....
                      </ListItem>
                      <ListItem
                        href="/UseCases#useCase4"
                        title="Scalability & Growth"
                      >
                        Growing Business need to scale .....
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-[MarcellusSc] bg-violet-100 text-lg font-medium">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 bg-violet-50 bg-opacity-[50%] p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <ListItem
                        href="/Solutions#solution1"
                        title="Rapid Deployment"
                      >
                        Our e-commerce website builder .....
                      </ListItem>
                      <ListItem
                        href="/Solutions#solution2"
                        title="Unified Management"
                      >
                        The platform integrates essential .....
                      </ListItem>
                      <ListItem
                        href="/Solutions#solution3"
                        title="Engagement Automation"
                      >
                        Our website builder includes options .....
                      </ListItem>
                      <ListItem
                        href="/Solutions#solution4"
                        title="Growth Adaptibility"
                      >
                        The platform is designed to grow with .....
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-[MarcellusSc] bg-violet-100 text-lg font-medium">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 bg-violet-50 bg-opacity-[50%] p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Icons.logo className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Resources
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight"></p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/Demo" title="Demo">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem
                        href="http://localhost:3003"
                        title="Price & Billings"
                      >
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/Company" legacyBehavior passHref>
                    <div className="bg-violet-100">
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} bg-violet-100 `}
                      >
                        <div className="font-[MarcellusSc]  text-lg font-medium">
                          Company
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </Link>
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>

            <Search />
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar2;
