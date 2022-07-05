import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function carDetail() {
  return (
    <Grid sx={{ display: "flex" }}>
      <Card>
        <CardActionArea>
          <Typography>hola mundo</Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
