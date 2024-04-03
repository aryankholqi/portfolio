import React from "react";
import locationIcon from "@/public/icons/outlined/location.svg";
import githubIcon from "@/public/icons/outlined/github.svg";
import twitterIcon from "@/public/icons/outlined/twitter.svg";
import figmaIcon from "@/public/icons/outlined/figma.svg";
import Image from "next/image";
import myProfile from "@/public/images/myProfile.webp";

export default function HeaderBox() {
  return (
    <div className="container">
      <div className="mt-20 flex flex-col-reverse sm:grid sm:grid-cols-5 md:grid-cols-6 gap-x-12">
        <div className="sm:col-span-3 md:col-span-4">
          <h1 className="text-4xl md:text-5xl font-interSemiBold md:font-interBold">{`Hi, I'm Aryan👋🏻`}</h1>
          <p className="text-gray-600 dark:text-darkGray-600 mb-10 mt-2">
            {`I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.`}
          </p>
          <div className="flex items-center gap-x-2">
            <Image src={locationIcon} alt="" className="" />
            <p className="text-gray-600 dark:text-darkGray-600">
              Iran, Babolsar
            </p>
          </div>
          <div className="flex items-center gap-x-4 mt-2 ms-2">
            <div className="w-2 h-2 rounded-full bg-emerald"></div>
            <p className="text-gray-600 dark:text-darkGray-600">
              Available for new projects
            </p>
          </div>
          <div className="flex items-center gap-x-4 mt-12">
            <Image src={githubIcon} alt="" />
            <Image src={twitterIcon} alt="" />
            <Image src={figmaIcon} alt="" />
          </div>
        </div>
        <div className="sm:col-span-2 md:col-span-2 relative mb-24 w-[70%] mx-auto sm:w-full">
          <Image
            src={myProfile}
            alt=""
            className="relative z-10 w-full h-full border-[10px] border-white dark:border-black"
          />
          <div className="absolute w-[120%] sm:w-full h-[95%] top-12 -right-6 bg-gray-200 dark:bg-darkGray-200"></div>
        </div>
      </div>
    </div>
  );
}
