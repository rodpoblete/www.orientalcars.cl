import React from "react";

import Grid from "@mui/material/Grid";

import CarCard from "../CarCard/index";

import { dataCars } from "../../../../dataCars";

export default function Home() {
  return (
    <Grid container spacing={2} justifyContent="center" maxWidth="md">
      {dataCars.map((car) => (
        <CarCard key={car.id} carData={car} />
      ))}
    </Grid>
  );
}
