import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const salesWallpaper = require("img/backgrounds/salesWallpaper.webp");

export default function SalesSection() {
  return (
    <Box
      sx={{
        height: "300px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
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
      <Typography
        align="center"
        mb={1}
        sx={{
          fontSize: "2.5rem",
          position: "relative",
          zIndex: 1,
          color: "white",
          fontWeight: "bold",
        }}
      >
        ¿Quieres vender tu vehículo?
      </Typography>
      <Typography
        align="center"
        variant="h5"
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
        }}
      >
        Te ayudamos con la venta de tu auto
      </Typography>
      <Typography
        variant="h7"
        align="center"
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          display: "inline",
        }}
      >
        Podemos ofrecerte distintas alternativas, como la venta directa
        (nosotros te lo compramos)
      </Typography>
      <Typography
        variant="h7"
        align="center"
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          display: "inline",
        }}
      >
        o la consignación (te ayudamos a venderlo al mejor precio)
      </Typography>
      <Button variant="contained" color="secondary">
        Más Información
      </Button>
    </Box>
  );
}
