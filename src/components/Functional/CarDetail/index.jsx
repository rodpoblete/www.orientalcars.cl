import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
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

import { moneyFormat, numberFormat } from "helpers/numbers";

import { dataCars } from "../../../../dataCars";

export default function carDetail() {
  return (
    <Container maxWidth="md">
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
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
          <Typography display="inline">Precio: </Typography>
          <Typography variant="h6" display="inline">
            {moneyFormat(dataCars[0].price)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">{dataCars[0].name}</Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <DirectionsCarIcon />
          <Typography variant="body2">{dataCars[0].type}</Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <AddRoadIcon />
          <Typography variant="body2">
            {numberFormat(dataCars[0].mileage)}
          </Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <LocalGasStationIcon />
          <Typography variant="body2">{dataCars[0].fuel}</Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <AirlineSeatReclineExtraIcon />
          <Typography variant="body2">{dataCars[0].seats}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Marca: </Typography>
          <Chip label={dataCars[0].brand} color="primary" />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Año: </Typography>
          <Chip label={dataCars[0].year} color="primary" />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Modelo: </Typography>
          <Chip label={dataCars[0].model} color="primary" />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Dueños: </Typography>
          <Chip label={dataCars[0].owners} color="primary" />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Versión: </Typography>
          <Chip label={dataCars[0].version} color="primary" />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Llaves: </Typography>
          <Chip label={dataCars[0].keys} color="primary" />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h6">Características Adicionales</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <CircleNotificationsIcon />
          <Typography variant="body2">Alarma</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <LightModeIcon />
          <Typography variant="body2">Sensor de luz</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <BluetoothIcon />
          <Typography variant="body2">Bluetooth</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <AcUnitIcon />
          <Typography variant="body2">Climatizador</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <CameraswitchIcon />
          <Typography variant="body2">Cámara de retroceso</Typography>
        </Grid>
        <Grid item xs={2} align="center">
          <WarningAmberIcon />
          <Typography variant="body2">Sensor de proximidad</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item>
          <Typography variant="body1">
            ¿Que tal si te lo llevas? No dejes pasar este {dataCars[0].name} con{" "}
            {numberFormat(dataCars[0].mileage)} Kilómetros, esta nuevecito, es
            la versión mas full, cuenta con todo su equipamiento, doble airbag,
            controles al volante, computador a bordo, aire acondicionado, alza
            vidrios eléctricos, cierre centralizado, cámara y sensores de
            retroceso, llantas de aleación con frenos abs. Puede ser tuyo al
            contado o con crédito.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} align="center">
          <Typography display="inline">
            ¿Necesitas opciones de financiamiento?
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Button variant="contained">
            <WhatsAppIcon />
            WhatsApp
          </Button>
        </Grid>
        <Grid item xs={6} align="center">
          <Button variant="contained">
            <CallIcon />
            Llamar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
