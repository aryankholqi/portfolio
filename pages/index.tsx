import AboutMeBox from "@/components/Templates/Home/AboutMe/AboutMeBox";
import ExperienceBox from "@/components/Templates/Home/Experience/ExperienceBox";
import HeaderBox from "@/components/Templates/Home/Header/HeaderBox";
import SkillsBox from "@/components/Templates/Home/Skills/SkillsBox";

export default function Home() {
  return (
    <>
      <HeaderBox />
      <AboutMeBox />
      <SkillsBox />
      <ExperienceBox />
    </>
  );
}
