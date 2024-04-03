import React, { ElementType } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { skills } from "@/interfaces/skills.interface";

export default function PaginationSlider({
  data,
  Content,
}: {
  data: skills[];
  Content: ElementType;
}) {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        400: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
        3100: {
          slidesPerView: 5,
        },
      }}
      autoplay={{
        delay: 3000,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {data.map((skill, index) => (
        <SwiperSlide key={index}>
          <Content {...skill} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
