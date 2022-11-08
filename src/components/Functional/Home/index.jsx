import React from "react";

import Grid from "@mui/material/Grid";

import SliderPrincipal from "../SliderPrincipal/index";
import SliderCarCard from "../SliderCarCard/index";
import SalesSection from "../SalesSection/index";

export default function Home() {
  return (
    <>
      <Grid container maxWidth="md" sx={{ paddingLeft: 1, paddingRight: 1 }}>
        <Grid item xs={12}>
          <SliderPrincipal />
        </Grid>
        <Grid item xs={12}>
          <SliderCarCard />
        </Grid>
      </Grid>
      <SalesSection />
    </>
  );
}
