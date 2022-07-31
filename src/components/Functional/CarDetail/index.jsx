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

import Grid from "@mui/material/Grid";

import { moneyFormat } from "helpers/numbers";

import { dataCars } from "../../../../dataCars";

export default function carDetail() {
  return (
    <Container maxWidth="sm">
      <Grid container backgroundColor="blue">
        <Grid item backgroundColor="gray" sx={12} sm={12} md={12}>
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
          <Grid item backgroundColor="orange" sx={12} sm={12} md={12}>
            <Typography>Precio: {moneyFormat(dataCars[0].price)}</Typography>
          </Grid>
          <Grid item backgroundColor="green" sx={12} sm={12} md={12}>
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
          <Grid container item backgroundColor="brown" justifyContent="center">
            <Grid item sx={3}>
              <DirectionsCarIcon />
              Tipo
            </Grid>
            <Grid item sx={3}>
              <AddRoadIcon />
              Kilometraje
            </Grid>
            <Grid item sx={3}>
              <OilBarrelIcon />
              Aceite
            </Grid>
            <Grid item sx={3}>
              <LocalGasStationIcon />
              Gasolina
            </Grid>
          </Grid>
        </Grid>
        <Grid container item backgroundColor="yellow" justifyContent="center">
          <Grid item sx={2} sm={2} md={2}>
            <Typography>Marca: {dataCars[0].brand}</Typography>
          </Grid>
          <Grid item sx={2} sm={2} md={2}>
            <Typography>Año: {dataCars[0].year}</Typography>
          </Grid>
          <Grid item sx={2} sm={2} md={2}>
            <Typography>Modelo: {dataCars[0].model}</Typography>
          </Grid>
          <Grid item sx={2} sm={2} md={2}>
            <Typography>Dueños: {dataCars[0].owners}</Typography>
          </Grid>
          <Grid item sx={2} sm={2} md={2}>
            <Typography>Versión: {dataCars[0].version}</Typography>
          </Grid>
          <Grid item sx={2} sm={2} md={2}>
            <Typography>Llaves: {dataCars[0].keys}</Typography>
          </Grid>
        </Grid>
        <Grid container item backgroundColor="magenta">
          <Grid item sx={2} sm={2} md={2}>
            <CircleNotificationsIcon />
            Alarma
          </Grid>
          <Grid item sx={2} sm={2} md={2}>
            <LightModeIcon />
            Sensor de luz
          </Grid>
          <Grid item sx={2} sm={2} md={2}>
            <BluetoothIcon />
            Bluetooth
          </Grid>
          <Grid item sx={2} sm={2} md={2}>
            <AcUnitIcon />
            Climatizador
          </Grid>
          <Grid item sx={2} sm={2} md={2}>
            <CameraswitchIcon />
            Cámara de retroceso
          </Grid>
          <Grid item sx={2} sm={2} md={2}>
            <WarningAmberIcon />
            Sensor de proximidad
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
