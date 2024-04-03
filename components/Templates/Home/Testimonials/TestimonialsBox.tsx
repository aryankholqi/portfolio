import { Chip } from "@nextui-org/react";
import React from "react";
import TestimonialsItem from "./TestimonialsItem";
import { testimonial } from "@/interfaces/testimonial.interface";

export default function TestimonialsBox({ data }: { data: testimonial[] }) {
  return (
    <div className="bg-lightGray-50 dark:bg-darkGray-50 py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-y-2 mb-12">
          <Chip
            variant="flat"
            className="bg-lightGray-200 dark:bg-darkGray-200 text-lightGray-600 dark:text-darkGray-600"
          >
            Testimonials
          </Chip>
          <p className="text-lightGray-600 dark:text-darkGray-600 text-center">
            Nice things people have said about me:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((testimonial, index) => (
            <TestimonialsItem key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
