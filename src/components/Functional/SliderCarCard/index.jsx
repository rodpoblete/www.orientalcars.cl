import React from "react";

import { Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import CarCard from "../CarCard/index";
import { dataCars } from "../../../../dataCars";

export default function SliderCarCard() {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 },
        480: { slidesPerView: 3, spaceBetween: 15 },
        768: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 25 },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      navigation
      modules={[Autoplay, Navigation]}
    >
      {dataCars.map((car) => (
        <SwiperSlide key={car.id}>
          <CarCard key={car.id} carData={car} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
