import React from "react";
import { Box, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// import car offer images
const offer1 = require("img/cars/cheryTigo2/chery_tigo2_cover.webp");
const offer2 = require("img/cars/kiaSportage/kia_sportage_cover.webp");
const offer3 = require("img/cars/nissanVersa/nissan_versa_cover.webp");
const offer4 = require("img/cars/renaultKoleos/renault_koleos_cover.webp");
const offer5 = require("img/cars/subaruImpreza/subaru_impreza_cover.webp");

const carOfferImages = [offer1, offer2, offer3, offer4, offer5];

export default function carPrincipalSlide() {
  return (
    <>
      <Typography
        variant="h6"
        color="primary"
        align="center"
        sx={{ fontWeight: "bold" }}
      >
        NUESTRA SELECCIÓN DEL MES
      </Typography>
      <Typography
        variant="subtitle1"
        color="primary"
        align="center"
        gutterBottom
      >
        Ven a descubrir nuestra selección del mes. Vehículos especialmente
        escogidos para ti
      </Typography>
      <Swiper
        spaceBetween={30}
        centeredSlides
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {carOfferImages.map((photo) => (
          <SwiperSlide key={photo}>
            <Box
              component="img"
              src={photo}
              sx={{
                width: "100%",
                height: "100%",
                maxHeight: "500px",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
