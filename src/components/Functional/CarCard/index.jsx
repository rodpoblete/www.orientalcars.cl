import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import car1 from "../../../assets/img/car1.jpeg";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={car1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hyundai Grand i10
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ¿Buscas algún Hatchback nuevo? Ya disponible el Grand i10 año 2022,
            0 kilómetro, equipamiento completo. Al contado o crédito.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button type="submit" fullWidth variant="contained">
          Más Detalles
        </Button>
      </CardActions>
    </Card>
  );
}
