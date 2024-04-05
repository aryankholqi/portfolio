import AboutMeBox from "@/components/Templates/Home/AboutMe/AboutMeBox";
import ExperienceBox from "@/components/Templates/Home/Experience/ExperienceBox";
import HeaderBox from "@/components/Templates/Home/Header/HeaderBox";
import SkillsBox from "@/components/Templates/Home/Skills/SkillsBox";
import TestimonialsBox from "@/components/Templates/Home/Testimonials/TestimonialsBox";
import WorkBox from "@/components/Templates/Home/Work/WorkBox";
import connectToDB from "@/configs/db";
import { experiences } from "@/interfaces/experiences.interface";
import { skills } from "@/interfaces/skills.interface";
import { getTestimonials } from "@/mock/getTestimonials";
import { getWorks } from "@/mock/getWorks";

export default function Home({
  skills,
  experiences,
}: {
  skills: skills[];
  experiences: experiences[];
}) {
  return (
    <>
      <HeaderBox />
      <AboutMeBox />
      <SkillsBox data={skills} />
      <ExperienceBox data={experiences} />
      <WorkBox data={getWorks()} />
      <TestimonialsBox data={getTestimonials()} />
    </>
  );
}

export async function getStaticProps() {
  await connectToDB();
  const getSkills = await fetch(
    "https://660fd6760640280f219b9363.mockapi.io/api/skills"
  );

  const getExperiences = await fetch(
    "https://660fd6760640280f219b9363.mockapi.io/api/experiences"
  );

  const skills = await getSkills.json();

  const experiences = await getExperiences.json();

  return {
    props: {
      skills,
      experiences,
    },
  };
}
