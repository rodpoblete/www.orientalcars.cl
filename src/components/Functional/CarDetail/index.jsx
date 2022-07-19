import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { dataCars } from "../../../../dataCars";

import { moneyFormat } from "helpers/numbers";

export default function carDetail() {
  return (
    <Grid>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={dataCars[0].photo}
            alt={dataCars[0].name}
          />
          <CardContent>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: 24,
                fontWeight: "medium",
              }}
            >
              {dataCars[0].name}
            </Typography>
            <Typography>Precio: {moneyFormat(dataCars[0].price)}</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              similique error, perspiciatis est iusto, eum maxime voluptatem
              exercitationem quibusdam incidunt officia iure voluptatum natus
              quos recusandae tenetur sunt quo dicta.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
