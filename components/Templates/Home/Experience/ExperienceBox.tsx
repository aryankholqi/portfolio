import { Chip } from "@nextui-org/react";
import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceBox() {
  return (
    <div className="bg-gray-50 dark:bg-darkGray-50 py-24" id="experience">
      <div className="container">
        <div className="flex flex-col items-center gap-y-2 mb-12">
          <Chip
            variant="flat"
            className="bg-gray-200 dark:bg-darkGray-200 text-gray-600 dark:text-darkGray-600"
          >
            Experience
          </Chip>
          <p className="text-gray-600 dark:text-darkGray-600 text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <ExperienceCard />
      </div>
    </div>
  );
}
