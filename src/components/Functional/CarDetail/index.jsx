import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, List, ListItemIcon, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

import { moneyFormat } from "helpers/numbers";

import { dataCars } from "../../../../dataCars";

export default function carDetail() {
  return (
    <Container maxWidth="sm">
      <Grid container backgroundColor="blue">
        <Grid item backgroundColor="gray">
          <Box
            component="img"
            sx={{
              height: "50",
              width: "50",
            }}
            src={dataCars[0].photo}
            alt={dataCars[0].name}
          />
        </Grid>
        <Grid container item backgroundColor="purple">
          <Typography>Precio: {moneyFormat(dataCars[0].price)}</Typography>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 22,
              fontWeight: "medium",
            }}
          >
            {dataCars[0].name}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Item>Caracteristica 1</Item>
            <Item>Caracteristica 2</Item>
            <Item>Caracteristica 3</Item>
          </Stack>
        </Grid>
        <Grid item backgroundColor="yellow">
          <Typography>
            ¿Buscas algún {dataCars[0].type} nuevo? Ya disponible el{" "}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
