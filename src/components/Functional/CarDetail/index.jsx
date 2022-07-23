import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { moneyFormat } from "helpers/numbers";

import { dataCars } from "../../../../dataCars";

export default function carDetail() {
  return (
    <Container
      sx={{
        maxWidth: "md",
        display: "grid",
        gap: 1,
        gridTemplateColumns: "1fr 3fr",
        border: "1px solid #e0e0e0",
      }}
    >
      <Grid>
        <Box
          component="img"
          sx={{
            height: 160,
            maxWidth: 200,
            overflow: "hidden",
          }}
          src={dataCars[0].photo}
          alt={dataCars[0].name}
        />
      </Grid>
      <Grid sx={{ display: "grid", gap: 1, alignItems: "start" }}>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: 22,
            fontWeight: "medium",
          }}
        >
          {dataCars[0].name}
        </Typography>
        <Typography>Precio: {moneyFormat(dataCars[0].price)}</Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          similique error, perspiciatis est iusto, eum maxime voluptatem
          exercitationem quibusdam incidunt officia iure voluptatum natus quos
          recusandae tenetur sunt quo dicta.
        </Typography>
      </Grid>
    </Container>
  );
}
