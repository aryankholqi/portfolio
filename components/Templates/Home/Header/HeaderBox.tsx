import React from "react";
import locationIcon from "@/public/icons/outlined/location.svg";
import githubIcon from "@/public/icons/outlined/github.svg";
import twitterIcon from "@/public/icons/outlined/twitter.svg";
import linkedinIcon from "@/public/icons/solid/linkedin.svg"
import stackoverflowIcon from "@/public/icons/solid/stackoverflow.svg";
import Image from "next/image";
import myProfile from "@/public/images/myProfile.webp";

export default function HeaderBox() {
  return (
    <div className="container">
      <div className="mt-20 flex flex-col-reverse sm:grid sm:grid-cols-5 md:grid-cols-6 gap-x-12">
        <div className="sm:col-span-3 md:col-span-4">
          <h1 className="text-4xl md:text-5xl font-interSemiBold md:font-interBold">{`Hi, I'm Aryan👋🏻`}</h1>
          <p className="text-lightGray-600 dark:text-darkGray-600 mb-10 mt-2">
            {`I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.`}
          </p>
          <div className="flex items-center gap-x-2">
            <Image src={locationIcon} alt="" className="" />
            <p className="text-lightGray-600 dark:text-darkGray-600">
              Iran, Babolsar
            </p>
          </div>
          <div className="flex items-center gap-x-4 mt-2 ms-3">
            <div className="w-2 h-2 rounded-full bg-emerald"></div>
            <p className="text-lightGray-600 dark:text-darkGray-600">
              Available for new projects
            </p>
          </div>
          <div className="flex items-center gap-x-4 mt-12">
            <Image
              src={githubIcon}
              alt=""
              width={25}
              className="cursor-pointer"
              onClick={() =>
                (window.location.href = "https://github.com/aryankholqi")
              }
            />
            <Image
              src={twitterIcon}
              alt=""
              width={30}
              className="cursor-pointer"
              onClick={() =>
                (window.location.href = "https://x.com/aryankholqi")
              }
            />
            <Image
              src={stackoverflowIcon}
              alt=""
              width={20}
              className="cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://stackoverflow.com/users/21888423/aryan-kholqi")
              }
            />
            <Image
              src={linkedinIcon}
              alt=""
              width={20}
              className="cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/aryan-kholqi-261480260/")
              }
            />
          </div>
        </div>
        <div className="sm:col-span-2 md:col-span-2 relative mb-24 w-[70%] mx-auto sm:w-full">
          <Image
            src={myProfile}
            alt=""
            className="relative z-10 w-full h-full border-[10px] border-white dark:border-black"
            priority
          />
          <div className="absolute w-[121%] sm:w-full h-[93%] md:h-[91%] xl:h-[95%] 2xl:h-[97%] top-12 -right-6 bg-lightGray-200 dark:bg-darkGray-200"></div>
        </div>
      </div>
    </div>
  );
}
