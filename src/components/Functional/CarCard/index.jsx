import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { moneyFormat } from "helpers/numbers";

export default function CarCard({ carData }) {
  const { id, photos, name, price, description, status } = carData;
  return (
    <Grid item xs={12} sx={{ paddingBottom: "1px" }}>
      <Card sx={{ position: "relative", overflow: "hidden" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={photos[0]}
            alt={name}
            sx={{ objectFit: "cover" }}
          />
          {status === "sold" && (
            <Box
              fullWidth
              sx={{
                fontSize: 40,
                fontWeight: "bold",
                position: "absolute",
                color: "#FFF",
                transform: `rotate(-20deg)`,
                backgroundColor: "#484848",
                width: "120%",
                top: 60,
                left: -18,
                display: "flex",
                justifyContent: "center",
              }}
            >
              VENDIDO
            </Box>
          )}
          <CardContent sx={{ height: 180 }}>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: 14,
                fontWeight: "medium",
                MaxHeight: 23,
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: 18,
              }}
            >
              Precio: {moneyFormat(price)}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ height: "100px", overflow: "hidden" }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            component={RouterLink}
            to={`/detalle/${id}`}
            fullWidth
            variant="contained"
          >
            Más Detalles
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
