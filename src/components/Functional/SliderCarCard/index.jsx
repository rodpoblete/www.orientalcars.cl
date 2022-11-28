import React from "react";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import CarCard from "../CarCard/index";
import { dataCars } from "../../../../dataCars";

export default function SliderCarCard() {
  return (
    <>
      <Typography
        variant="h5"
        align="center"
        color="primary"
        sx={{ fontWeight: "bold" }}
      >
        Nuestros Autos
      </Typography>
      <Typography align="center" sx={{ paddingBottom: "15px" }}>
        Encuentra el auto que estás buscando entre los distintos modelos que
        tenemos disponibles para ti.
      </Typography>
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
      <Grid mt={2} mb={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          component={RouterLink}
          to="/catalogo"
          variant="contained"
          color="secondary"
        >
          Modelos Disponibles
        </Button>
      </Grid>
    </>
  );
}
