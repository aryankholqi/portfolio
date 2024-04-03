import { Chip } from "@nextui-org/react";
import React from "react";
import WorkCard from "./WorkCard";
import { works } from "@/interfaces/works.interface";

export default function WorkBox({ data }: { data: works[] }) {
  return (
    <div className="container py-16">
      <div className="flex flex-col items-center gap-y-2 mb-12">
        <Chip
          variant="flat"
          className="bg-gray-200 dark:bg-darkGray-200 text-gray-600 dark:text-darkGray-600"
        >
          Work
        </Chip>
        <p className="text-gray-600 dark:text-darkGray-600 text-center">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      {data.map((work, index) => (
        <WorkCard key={index} {...work} />
      ))}
    </div>
  );
}
