import React from "react";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import CarCard from "../CarCard/index";
import { dataCars } from "../../../../dataCars";

export default function AllCarsSection() {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      maxWidth="md"
      mt={2}
      mb={3}
      sx={{
        paddingLeft: 1,
        paddingRight: 1,
      }}
    >
      <Grid item>
        <Typography
          variant="h4"
          align="center"
          color="secondary"
          sx={{
            fontSize: {
              xs: 26,
              sm: 33,
            },
            fontWeight: "bold",
          }}
        >
          Conoce Nuestro Catálogo
        </Typography>
        <Typography
          align="center"
          color="primary.light"
          sx={{
            fontSize: {
              xs: 13,
              sm: 17,
            },
          }}
        >
          Te invitamos a consultar por las diferentes opciones de financiamiento
          que tenemos disponibles para ti, para que te lleves el auto de tu
          sueños.
        </Typography>
      </Grid>

      {dataCars.map((car) => (
        <Grid item xs={6} sm={4}>
          <CarCard key={car.id} carData={car} />
        </Grid>
      ))}
    </Grid>
  );
}
