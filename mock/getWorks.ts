import sepehrAcademy from "@/public/images/works/sepehrAcademy.png";

export const getWorks = () => {
  return [
    {
      id: 1,
      title: "Sepeher Academy",
      image: sepehrAcademy,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      skills: [
        "HTML",
        "CSS",
        "Tailwind",
        "Typescript",
        "React",
        "Nextjs",
        "Swiper",
        "Next UI",
      ],
      url: "https://sepehr-academy-eight.vercel.app/",
    },
  ];
};
