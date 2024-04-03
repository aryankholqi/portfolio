import {
  Button,
  Divider,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextNavbar,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Image from "next/image";
import moonIcon from "@/public/icons/outlined/moon.svg";
import lightIcon from "@/public/icons/outlined/light.svg";
import { navbarMenuItems } from "@/constants/navbarMenuItems";
import { useTheme } from "next-themes";
import switchThemeHandler from "@/utils/switchTheme";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <NextNavbar>
      <div className="container flex items-center">
        <NavbarContent className="flex-row-reverse sm:flex-row">
          <NavbarMenuToggle className="sm:hidden" />
          <NavbarBrand>
            <p className="font-interBold text-lightGray-900 dark:text-darkGray-900 text-[30px]">{`<MA/>`}</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          className="hidden sm:flex sm:gap-0 md:gap-2 text-lightGray-600 dark:text-darkGray-600"
          justify="center"
        >
          <div className="flex items-center gap-x-4">
            <NavbarItem>
              <Link href="#">About</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" aria-current="page">
                Work
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">Testimonails</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">Contact</Link>
            </NavbarItem>
          </div>
          <NavbarItem>
            <Divider className="w-[20px] block rotate-90 bg-lightGray-100 dark:bg-darkGray-50" />
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem>
            <Button
              className="bg-lightGray-900 dark:bg-darkGray-900 text-lightGray-50 dark:text-darkGray-50 rounded-2xl"
              onClick={() =>
                (window.location.href =
                  "https://www.mediafire.com/file/erc611sqjx7n5tl/aryankholqi-resume.pdf/file")
              }
            >
              Download CV
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="px-10 pt-4 text-lightGray-600 dark:text-darkGray-600">
          {navbarMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href="#">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
          <Divider className="my-1" />
          <NavbarMenuItem
            className="flex items-center justify-between"
            onClick={() => switchThemeHandler(theme, setTheme)}
          >
            <p>Switch Theme</p>
            <Image src={theme !== "dark" ? lightIcon : moonIcon} alt="" />
          </NavbarMenuItem>
          <Button
            className="bg-lightGray-900 dark:bg-darkGray-900 text-lightGray-50 dark:text-darkGray-50 rounded-2xl mt-4"
            onClick={() =>
              (window.location.href =
                "https://www.mediafire.com/file/erc611sqjx7n5tl/aryankholqi-resume.pdf/file")
            }
          >
            Download CV
          </Button>
        </NavbarMenu>
      </div>
    </NextNavbar>
  );
}
