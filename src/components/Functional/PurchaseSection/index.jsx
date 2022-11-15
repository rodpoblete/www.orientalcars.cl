import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

const salesWallpaper = require("img/backgrounds/salesWallpaper.webp");

export default function PurchaseSection() {
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
        variant="h3"
        align="center"
        mb={1}
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          fontWeight: "bold",
          fontSize: {
            xs: 26,
            sm: 40,
          },
        }}
      >
        ¿Quieres Comprar un Vehículo?
      </Typography>
      <Typography
        align="center"
        variant="h5"
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          fontSize: {
            xs: 20,
            sm: 24,
          },
        }}
      >
        ¿Necesitas Financiamiento? Conoce las opciones que tenemos para ti
      </Typography>
      <Typography
        variant="h7"
        align="center"
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          display: "inline",
          fontSize: {
            xs: 13,
            sm: 16,
          },
        }}
      >
        Podemos ofrecerte distintas alternativas, solicita la evaluación de tu
        financiamiento
      </Typography>
      <Typography
        variant="h7"
        align="center"
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          display: "inline",
          fontSize: {
            xs: 13,
            sm: 16,
          },
        }}
      >
        y conoce nuestras condiciones, tanto para trabajadores dependientes como
        independientes.
      </Typography>
      <Button
        component={RouterLink}
        variant="contained"
        color="secondary"
        to="/ventas"
      >
        Más Información
      </Button>
    </Box>
  );
}
