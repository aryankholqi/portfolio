import AboutMeBox from "@/components/Templates/Home/AboutMe/AboutMeBox";
import ExperienceBox from "@/components/Templates/Home/Experience/ExperienceBox";
import HeaderBox from "@/components/Templates/Home/Header/HeaderBox";
import SkillsBox from "@/components/Templates/Home/Skills/SkillsBox";
import WorkBox from "@/components/Templates/Home/Work/WorkBox";
import { getWorks } from "@/mock/getWorks";

export default function Home() {
  return (
    <>
      <HeaderBox />
      <AboutMeBox />
      <SkillsBox />
      <ExperienceBox />
      <WorkBox data={getWorks()} />
    </>
  );
}
