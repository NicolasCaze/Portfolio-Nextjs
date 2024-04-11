"use client"
import { buttonVariants } from "@/_components/ui/button";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ToggleMode from "./ToggleMode";
import AnimatedDiv from "./Animations/Animation";
import { useState } from "react";

export const Header = () => {
  const navBorder = "border-b border-primary/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn("top-0 ", navBorder)}>
      <Section className={cn("flex items-center justify-between")}>
        <AnimatedDiv className="ml-6">
          <h1 className="text-4xl data-[text-white]:font-bold dark:font-bold">
            <span id="Home" className="text-gray-500">&#123;</span>
            N
            <span className="text-gray-500">&#125;</span>
          </h1>
        </AnimatedDiv>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <AnimatedDiv
          className={cn(
            "md:flex md:items-center md:gap-6 md:p-1 md:m-1",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 p-2 m-1">
            <li>
              <Link
                href="#Home"
                className={cn(buttonVariants({ size: "sm" }), "m-0 text-lg")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#Project"
                className={cn(buttonVariants({ size: "sm" }), "m-0 text-lg")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#Contact"
                className={cn(buttonVariants({ size: "sm" }), "m-0 text-lg")}
              >
                Contact
              </Link>
            </li>
            <li className={cn(({ size: "sm" }), "m-0 text-lg")}>
              <ToggleMode />
            </li>
          </ul>
        </AnimatedDiv>
      </Section>
    </header>
  );
};
