import { Button } from "@nextui-org/react";
import React from "react";
import lightIcon from "@/public/icons/outlined/light.svg";
import moonIcon from "@/public/icons/outlined/moon.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import switchThemeHandler from "@/utils/switchTheme";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      onClick={() => switchThemeHandler(theme, setTheme)}
      className="bg-transparent"
    >
      <Image alt="" src={theme !== "dark" ? lightIcon : moonIcon} />
    </Button>
  );
}
