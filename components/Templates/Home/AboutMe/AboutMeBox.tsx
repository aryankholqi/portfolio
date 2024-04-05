import { Chip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import myProfile from "@/public/images/myProfile2.jpeg";

export default function AboutMeBox() {
  return (
    <div className="bg-lightGray-50 dark:bg-darkGray-50 py-24 mt-16">
      <div className="container">
        <div className="flex justify-center">
          <Chip
            variant="flat"
            className="bg-lightGray-200 dark:bg-darkGray-200 text-lightGray-600 dark:text-darkGray-600"
          >
            About me
          </Chip>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-7 gap-x-6 mt-12">
          <div className="md:col-span-3 relative">
            <Image
              alt=""
              src={myProfile}
              className="z-10 w-[80%] sm:w-[60%] md:w-full mx-auto relative border-[10px] border-lightGray-50 dark:border-darkGray-50"
            />
            <div className="absolute -translate-y-[95%] sm:-translate-y-[93%] md:-translate-y-[96%] lg:-translate-y-[97%]  translate-x-[3%] sm:translate-x-[21%] md:-translate-x-[5%] w-[95%] sm:w-[71%] md:w-[92%] h-[90%] sm:h-[92%] md:h-[32%] lg:h-[57%] xl:h-[95%] bg-lightGray-200 dark:bg-darkGray-200"></div>
          </div>
          <div className="md:col-span-1"></div>
          <div className="mt-16 md:mt-0 md:col-span-3 text-pretty">
            <h2 className="text-2xl">Curious about me? Here you have it:</h2>
            <p className="text-lightGray-600 dark:text-darkGray-600">
              {`I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.`}
            </p>
            <p className="text-lightGray-600 dark:text-darkGray-600 mt-4">
              {`I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.`}
            </p>
            <p className="text-lightGray-600 dark:text-darkGray-600 mt-4">
              {`I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.`}
            </p>
            <p className="text-lightGray-600 dark:text-darkGray-600 mt-4">
              {`When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.`}
            </p>
            <p className="text-lightGray-600 dark:text-darkGray-600 mt-4">
              Finally, some quick bits about me.
            </p>
            <ul className="list-disc grid grid-cols-2 gap-y-1 gap-x-12 text-lightGray-600 dark:text-darkGray-600 mt-4 ps-4">
              <li>B.E in Computer Science</li>
              <li>Avid learner</li>
              <li>Full time freelancer</li>
              <li>Aspiring indie developer</li>
            </ul>
            <p className="text-lightGray-600 dark:text-darkGray-600 mt-4">
              {`One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
