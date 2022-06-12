import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function MultiActionAreaCard({
  photo,
  name,
  year,
  brand,
  model,
  price,
  type,
}) {
  return (
    <Grid item sx={4} sm={4} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="180" image={photo} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              {name}
            </Typography>
            <Typography>PRECIO: ${price}</Typography>
            <Typography variant="body2" color="text.secondary">
              ¿Buscas algún {type} nuevo? Ya disponible el {brand} {model} año{" "}
              {year}, equipamiento completo. Al contado o crédito.
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
  );
}
