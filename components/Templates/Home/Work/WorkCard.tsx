import { Card, CardBody, Chip } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { works } from "@/interfaces/works.interface";
import externalLinkIcon from "@/public/icons/outlined/externalLink.svg";

export default function WorkCard({
  title,
  image,
  description,
  skills,
  url,
}: works) {
  return (
    <Card className="shadow-md">
      <CardBody className="grid lg:grid-cols-2 p-0 gap-x-8">
        <div className="border-[30px] border-gray-50 dark:border-darkGray-50">
          <Image src={image} alt="" className="rounded-lg h-full" />
        </div>
        <div className="py-8 pr-8 pl-8 lg:pl-0">
          <p className="font-interSemiBold text-xl">{title}</p>
          <p className="text-gray-600 dark:text-darkGray-600 line-clamp-3 my-8">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, index) => (
              <Chip
                key={index}
                variant="flat"
                className="bg-gray-200 dark:bg-darkGray-200 text-gray-600 dark:text-darkGray-600"
              >
                {skill}
              </Chip>
            ))}
          </div>
          <Image
            src={externalLinkIcon}
            alt=""
            width={30}
            className="cursor-pointer"
            onClick={() => (window.location.href = url)}
          />
        </div>
      </CardBody>
    </Card>
  );
}
