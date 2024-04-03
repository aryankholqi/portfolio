import { testimonial } from "@/interfaces/testimonial.interface";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function TestimonialsItem({
  description,
  author,
  position,
}: testimonial) {
  return (
    <Card className="py-6">
      <CardBody className="items-center">
        <Avatar size="lg" />
        <div>
          <p className="text-lightGray-600 dark:text-darkGray-600 px-8 mt-6 line-clamp-4 text-sm">
            {description}
          </p>
          <div className="text-center mt-6">
            <p className="font-interSemiBold text-lg">{author}</p>
            <p className="text-lightGray-600 dark:text-darkGray-600 text-xs">
              {position}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
