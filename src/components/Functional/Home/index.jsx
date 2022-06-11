import React from "react";

import Grid from "@mui/material/Grid";

import CardCard from "../CarCard/index";

export default function Home() {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={12} align="center"></Grid>
      </Grid>
      <Grid container alignItems="center">
        <Grid item xs={12} align="center">
          <CardCard />
        </Grid>
      </Grid>
    </>
  );
}
