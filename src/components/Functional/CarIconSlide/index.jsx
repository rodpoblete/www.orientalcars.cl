import * as React from "react";
import Box from "@mui/material/Box";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Grid from "@mui/material/Grid";

export default function CarIconSlide() {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary",
          paddingTop: 10,
        }}
      >
        <DirectionsCarIcon sx={{ fontSize: "80px" }} />
      </Box>
    </Grid>
  );
}
