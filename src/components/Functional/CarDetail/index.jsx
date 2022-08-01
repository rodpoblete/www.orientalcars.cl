import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
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
      <Grid container backgroundColor="blue">
        <Grid item backgroundColor="gray" xs={12}>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
            }}
            src={dataCars[0].photo}
            alt={dataCars[0].name}
          />
        </Grid>
        <Grid container item backgroundColor="purple">
          <Grid item backgroundColor="orange" xs={12}>
            <Typography>Precio: {moneyFormat(dataCars[0].price)}</Typography>
          </Grid>
          <Grid item backgroundColor="green" xs={12}>
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
            <Typography>{dataCars[0].type}</Typography>
          </Grid>
          <Grid item xs={3} align="center">
            <AddRoadIcon />
            <Typography>{dataCars[0].mileage}</Typography>
          </Grid>
          <Grid item xs={3} align="center">
            <OilBarrelIcon />
            <Typography>{dataCars[0].mileage}</Typography>
          </Grid>
          <Grid item xs={3} align="center">
            <LocalGasStationIcon />
            <Typography>{dataCars[0].fuel}</Typography>
          </Grid>
          <Grid item xs={3} align="center">
            <AirlineSeatReclineExtraIcon />
            <Typography>{dataCars[0].seats}</Typography>
          </Grid>
        </Grid>
        <Grid container item backgroundColor="yellow" justifyContent="center">
          <Grid item xs={2} align="center">
            <Typography>Marca: {dataCars[0].brand}</Typography>
          </Grid>
          <Grid item xs={2} align="center">
            <Typography>Año: {dataCars[0].year}</Typography>
          </Grid>
          <Grid item xs={2} align="center">
            <Typography>Modelo: {dataCars[0].model}</Typography>
          </Grid>
          <Grid item xs={2} align="center">
            <Typography>Dueños: {dataCars[0].owners}</Typography>
          </Grid>
          <Grid item xs={2} align="center">
            <Typography>Versión: {dataCars[0].version}</Typography>
          </Grid>
          <Grid item xs={2} align="center">
            <Typography>Llaves: {dataCars[0].keys}</Typography>
          </Grid>
        </Grid>
        <Grid container item backgroundColor="magenta">
          <Grid item xs={2} align="center">
            <CircleNotificationsIcon />
            <Typography></Typography>Alarma
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
        </Grid>
        <Grid item backgroundColor="blue">
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
            tempora deserunt. Alias nihil libero officiis exercitationem itaque
            laboriosam necessitatibus, eaque quas, ducimus quaerat nulla a
            voluptatum, atque consequuntur fugiat dignissimos.
          </Typography>
        </Grid>
        <Grid
          container
          item
          backgroundColor="tomato"
          justifyContent="center"
          spacing={1}
        >
          <Grid item>
            <Button variant="outlined">
              <WhatsAppIcon />
              WhatsApp
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">
              <CallIcon />
              Llamar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
