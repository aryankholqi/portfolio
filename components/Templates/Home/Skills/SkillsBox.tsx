import PaginationSlider from "@/components/Modules/Slider/PaginationSlider";
import { Chip } from "@nextui-org/react";
import React from "react";
import SkillLogo from "./SkillLogo";
import { skills } from "@/interfaces/skills.interface";

export default function SkillsBox({ data }: { data: skills[] }) {
  return (
    <div className="container py-24">
      <div className="flex flex-col items-center gap-y-2 mb-12">
        <Chip
          variant="flat"
          className="bg-lightGray-200 dark:bg-darkGray-200 text-lightGray-600 dark:text-darkGray-600"
        >
          Skills
        </Chip>
        <p className="text-lightGray-600 dark:text-darkGray-600 text-center">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <PaginationSlider data={data} Content={SkillLogo} />
    </div>
  );
}
