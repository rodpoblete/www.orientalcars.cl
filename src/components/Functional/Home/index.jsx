import React from "react";

import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={12} align="center">
          Componente 1
        </Grid>
      </Grid>
      <Grid container alignItems="center">
        <Grid item xs={12} align="center">
          Componente 2
        </Grid>
      </Grid>
    </>
  );
}
