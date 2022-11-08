import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const salesWallpaper = require("img/backgrounds/salesWallpaper.webp");

export default function SalesSection() {
  return (
    <Box
      sx={{
        height: "300px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={salesWallpaper}
        sx={{
          width: "100vw",
          height: "300px",
          objectFit: "cover",
          objectPosition: "center center",
          filter: "brightness(0.5)",
          position: "absolute",
        }}
      />
      <Typography sx={{ position: "relative", zIndex: 1, color: "white" }}>
        TEXTO DE PRUEBA
      </Typography>
    </Box>
  );
}
