import javascript from "@/public/images/skills/javascript.webp";
import git from "@/public/images/skills/git.webp";
import mongodb from "@/public/images/skills/mongodb.webp";
import nextjs from "@/public/images/skills/nextjs.svg";
import react from "@/public/images/skills/react.webp";
import typescript from "@/public/images/skills/typescript.webp";
import tailwind from "@/public/images/skills/tailwind.webp";

export const getSkills = () => {
  return [
    {
      id: 1,
      title: "Javascript",
      icon: javascript,
    },
    {
      id: 2,
      title: "Typescript",
      icon: typescript,
    },
    {
      id: 3,
      title: "Nextjs",
      icon: nextjs,
    },
    {
      id: 4,
      title: "React",
      icon: react,
    },
    {
      id: 5,
      title: "Git",
      icon: git,
    },
    {
      id: 6,
      title: "Tailwind",
      icon: tailwind,
    },
    {
      id: 7,
      title: "Mongodb",
      icon: mongodb,
    },
  ];
};
