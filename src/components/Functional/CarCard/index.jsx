import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";

import { dataCars } from "../../../../dataCars";

export default function MultiActionAreaCard() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {dataCars.map((car) => (
        <Grid item sx={4} sm={4} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={car.photo}
                alt={car.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {car.name}
                </Typography>
                <Typography>PRECIO: ${car.price}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ¿Buscas algún {car.type} nuevo? Ya disponible el {car.brand}{" "}
                  {car.model} año {car.year}, equipamiento completo. Al contado
                  o crédito.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button type="submit" fullWidth variant="contained">
                Más Detalles
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
