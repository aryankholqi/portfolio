import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import saminray from "@/public/images/companies/saminray.png";
import Image from "next/image";

export default function ExperienceCard() {
  return (
    <Card className="md:w-[70%] mx-auto drop-shadow-md dark:bg-darkGray-100">
      <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-y-1 md:gap-y-0 justify-between px-6">
        <Image src={saminray} alt="" className="w-[50%] md:w-[20%]" />
        <p className="font-interSemiBold text-small md:text-medium order-3 md:order-2">
          Frontend Web Developer
        </p>
        <p className="font-interMedium text-xs order-2 md:order-3">
          Mar 2023 - Present
        </p>
      </CardHeader>
      <CardBody className="">
        <ul className="list-disc text-gray-600 dark:text-darkGray-600 font-interMedium text-sm w-[90%] md:w-1/2 mx-auto md:pl-6 lg:pl-16 xl:pl-28 2xl:pl-40">
          <li>Worked as Frontend developer in reactjs,nextjs</li>
          <li>
            Worked in many panel-dashboard projects, PWA application, etc.
          </li>
          <li>made me fully passionate</li>
          <li>a place to thrive</li>
        </ul>
      </CardBody>
    </Card>
  );
}
