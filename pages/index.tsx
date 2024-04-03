import AboutMeBox from "@/components/Templates/Home/AboutMe/AboutMeBox";
import ExperienceBox from "@/components/Templates/Home/Experience/ExperienceBox";
import HeaderBox from "@/components/Templates/Home/Header/HeaderBox";
import SkillsBox from "@/components/Templates/Home/Skills/SkillsBox";
import TestimonialsBox from "@/components/Templates/Home/Testimonials/TestimonialsBox";
import WorkBox from "@/components/Templates/Home/Work/WorkBox";
import { getSkills } from "@/mock/getSkills";
import { getTestimonials } from "@/mock/getTestimonials";
import { getWorks } from "@/mock/getWorks";

export default function Home() {
  return (
    <>
      <HeaderBox />
      <AboutMeBox />
      <SkillsBox data={getSkills()} />
      <ExperienceBox />
      <WorkBox data={getWorks()} />
      <TestimonialsBox data={getTestimonials()}/>
    </>
  );
}
