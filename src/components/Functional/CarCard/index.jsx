import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";

import { moneyFormat } from "helpers/numbers";

export default function CarCard({ carData }) {
  const { id, photos, name, year, brand, model, type, price } = carData;
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={photos[0]}
            alt={name}
          />
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
            <Typography variant="body2" color="text.secondary">
              ¿Buscas algún {type} nuevo? Ya disponible el {brand} {model} año{" "}
              {year}, equipamiento completo. Al contado o crédito.
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
