import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const salesWallpaper = require("img/backgrounds/salesWallpaper.webp");

export default function SalesSection() {
  return (
    <Box>
      <Box
        component="img"
        src={salesWallpaper}
        sx={{
          width: "100vw",
          height: 300,
          objectFit: "cover",
          objectPosition: "center center",
          filter: "brightness(0.5)",
        }}
      />
      <Typography sx={{ position: "relative" }}> TEXTO DE PRUEBA</Typography>
    </Box>
  );
}
