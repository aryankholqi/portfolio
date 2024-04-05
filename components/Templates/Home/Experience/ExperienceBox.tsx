import { Chip } from "@nextui-org/react";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/interfaces/experiences.interface";

export default function ExperienceBox({ data }: { data: experiences[] }) {
  return (
    <div className="bg-lightGray-50 dark:bg-darkGray-50 py-24" id="experience">
      <div className="container">
        <div className="flex flex-col items-center gap-y-2 mb-12">
          <Chip
            variant="flat"
            className="bg-lightGray-200 dark:bg-darkGray-200 text-lightGray-600 dark:text-darkGray-600"
          >
            Experience
          </Chip>
          <p className="text-lightGray-600 dark:text-darkGray-600 text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          {data.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
