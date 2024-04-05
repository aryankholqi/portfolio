import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { experiences } from "@/interfaces/experiences.interface";

export default function ExperienceCard({
  position,
  startAt,
  endAt,
  description,
  companyImage,
}: experiences) {
  const startDate = new Date(startAt * 1000).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const endDate = new Date(endAt * 1000).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="md:w-[70%] mx-auto shadow-md dark:bg-darkGray-100 rounded-md pb-4">
      <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-y-1 md:gap-y-0 justify-between px-6">
        <Image src={companyImage} alt="" width={80} height={80} />
        <p className="font-interSemiBold text-small md:text-medium order-3 md:order-2 capitalize">
          {position}
        </p>
        <p className="font-interMedium text-xs order-2 md:order-3">
          {`${startDate} - ${endAt === 0 ? "Present" : endDate}`}
        </p>
      </CardHeader>
      <CardBody>
        <ul className="list-disc text-lightGray-600 dark:text-darkGray-600 font-interMedium flex flex-col gap-y-2 text-sm w-[90%] md:w-1/2 mx-auto pl-2.5 sm:pl-0 md:pl-6 lg:pl-16 xl:pl-28 2xl:pl-40">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
