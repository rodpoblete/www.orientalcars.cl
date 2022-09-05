import React from "react";

import Grid from "@mui/material/Grid";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CarCard from "../CarCard/index";

import { dataCars } from "../../../../dataCars";

export default function Home() {
  return (
    <Grid container spacing={2} justifyContent="center" maxWidth="md">
      <Swiper
        slidesPerView={3}
        spaceBetween={3}
        slidesPerGroup={3}
        loop
        loopFillGroupWithBlank
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {dataCars.map((car) => (
          <SwiperSlide key={car.id}>
            <CarCard key={car.id} carData={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
}
