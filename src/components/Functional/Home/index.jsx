import React from "react";

import Grid from "@mui/material/Grid";

import SliderPrincipal from "../SliderPrincipal/index";
import SliderCarCard from "../SliderCarCard/index";
import PurchaseSection from "../PurchaseSection/index";

export default function Home() {
  return (
    <>
      <Grid container maxWidth="md" sx={{ paddingLeft: 1, paddingRight: 1 }}>
        <Grid item xs={12} mt={3}>
          <SliderPrincipal />
        </Grid>
        <Grid item xs={12} mb={2}>
          <SliderCarCard />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <PurchaseSection />
      </Grid>
    </>
  );
}
