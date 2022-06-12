import React from "react";

import Grid from "@mui/material/Grid";

import CardCard from "../CarCard/index";

import { dataCars } from "../../../../dataCars";

export default function Home() {
  return (
    // <Grid container alignItems="center">
    //   <Grid item xs={12} align="center">
    //     <CardCard />
    //   </Grid>
    // </Grid>
    <Grid container spacing={2} justifyContent="center" maxWidth="md">
      {dataCars.map((car) => (
        <CardCard
          key={car.id}
          photo={car.photo}
          name={car.name}
          year={car.year}
          brand={car.brand}
          model={car.model}
          price={car.price}
          type={car.type}
        />
      ))}
    </Grid>
  );
}
