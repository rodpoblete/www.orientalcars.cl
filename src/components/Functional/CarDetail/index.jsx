import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";

import Grid from "@mui/material/Grid";

import { moneyFormat } from "helpers/numbers";

import { dataCars } from "../../../../dataCars";

export default function carDetail() {
  return (
    <Container maxWidth="sm">
      <Grid container rowSpacing={2}>
        <Grid item backgroundColor="gray" xs={12}>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={dataCars[0].photo}
            alt={dataCars[0].name}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              color: "text.primary",
              fontSize: 20,
              fontWeight: "medium",
            }}
          >
            Precio: {moneyFormat(dataCars[0].price)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 22,
              fontWeight: "medium",
            }}
          >
            {dataCars[0].name}
          </Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <DirectionsCarIcon />
          <Typography
            sx={{
              fontSize: 12,
            }}
          >
            {dataCars[0].type}
          </Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <AddRoadIcon />
          <Typography
            sx={{
              fontSize: 12,
            }}
          >
            {dataCars[0].mileage}
          </Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <LocalGasStationIcon />
          <Typography
            sx={{
              fontSize: 12,
            }}
          >
            {dataCars[0].fuel}
          </Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <AirlineSeatReclineExtraIcon />
          <Typography
            sx={{
              fontSize: 12,
            }}
          >
            {dataCars[0].seats}
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Marca: </Typography>
          <Typography display="inline">{dataCars[0].brand}</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Año:</Typography>
          <Typography display="inline">{dataCars[0].year}</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Modelo: </Typography>
          <Typography display="inline">{dataCars[0].model}</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Dueños: </Typography>
          <Typography display="inline">{dataCars[0].owners}</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Versión: </Typography>
          <Typography display="inline">{dataCars[0].version}</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Llaves: </Typography>
          <Typography display="inline">{dataCars[0].keys}</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <CircleNotificationsIcon />
          <Typography>Alarma</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <LightModeIcon />
          <Typography>Sensor de luz</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <BluetoothIcon />
          <Typography>Bluetooth</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <AcUnitIcon />
          <Typography>Climatizador</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <CameraswitchIcon />
          <Typography>Cámara de retroceso</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <WarningAmberIcon />
          <Typography>Sensor de proximidad</Typography>
        </Grid>
        <Grid item backgroundColor="red">
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
            tempora deserunt. Alias nihil libero officiis exercitationem itaque
            laboriosam necessitatibus, eaque quas, ducimus quaerat nulla a
            voluptatum, atque consequuntur fugiat dignissimos.
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Button variant="outlined">
            <WhatsAppIcon />
            WhatsApp
          </Button>
        </Grid>
        <Grid item xs={6} align="center">
          <Button variant="outlined">
            <CallIcon />
            Llamar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
