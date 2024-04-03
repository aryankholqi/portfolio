import PaginationSlider from "@/components/Modules/Slider/PaginationSlider";
import { getSkills } from "@/mock/getSkills";
import { Chip } from "@nextui-org/react";
import React from "react";
import SkillLogo from "./SkillLogo";

export default function SkillsBox() {
  return (
    <div className="container py-16">
      <div className="flex flex-col items-center gap-y-2 mb-12">
        <Chip
          variant="flat"
          className="bg-gray-200 dark:bg-darkGray-200 text-gray-600 dark:text-darkGray-600"
        >
          Skills
        </Chip>
        <p className="text-gray-600 dark:text-darkGray-600">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <PaginationSlider data={getSkills()} Content={SkillLogo} />
    </div>
  );
}
