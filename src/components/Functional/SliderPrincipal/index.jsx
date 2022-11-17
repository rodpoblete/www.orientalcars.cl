import React from "react";
import { Box } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// import car offer images
const offer1 = require("img/backgrounds/offer1.webp");
const offer2 = require("img/backgrounds/offer2.webp");
const offer3 = require("img/backgrounds/offer3.webp");
const offer4 = require("img/backgrounds/offer4.webp");

const carOfferImages = [offer1, offer2, offer3, offer4];

export default function SliderPrincipal() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation
      modules={[Pagination, Navigation, Autoplay]}
    >
      {carOfferImages.map((photo) => (
        <SwiperSlide key={photo}>
          <Box
            component="img"
            src={photo}
            sx={{
              width: "100%",
              height: "100%",
              maxHeight: "300px",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
