import React from "react";

import Grid from "@mui/material/Grid";

import { Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import CarCard from "../CarCard/index";
import SliderPrincipal from "../SliderPrincipal/index";
import { dataCars } from "../../../../dataCars";

export default function Home() {
  return (
    <Grid container maxWidth="md" sx={{ paddingLeft: 1, paddingRight: 1 }}>
      <Grid item xs={12}>
        <SliderPrincipal />
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
}
