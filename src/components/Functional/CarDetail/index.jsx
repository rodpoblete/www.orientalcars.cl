import React from "react";
import { useParams } from "react-router-dom";
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
import Link from "@mui/material/Link";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import Grid from "@mui/material/Grid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { moneyFormat, numberFormat } from "helpers/numbers";

import { dataCars } from "../../../../dataCars";

export default function carDetail() {
  const { carId: selectedCarId } = useParams();

  const selectedCar = dataCars.find(
    (car) => car.id.toString() === selectedCarId.toString()
  );

  return (
    <Container maxWidth="md">
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }}>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation
              modules={[Navigation, Pagination]}
            >
              {selectedCar.photos.map((photo) => (
                <SwiperSlide key={photo}>
                  <Box
                    component="img"
                    src={photo}
                    sx={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "500px",
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography display="inline">Precio: </Typography>
          <Chip
            sx={{ fontSize: "1.2rem" }}
            label={moneyFormat(selectedCar.price)}
            color="primary"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">{selectedCar.name}</Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <DirectionsCarIcon />
          <Typography variant="body2">{selectedCar.type}</Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <AddRoadIcon />
          <Typography variant="body2">
            {numberFormat(selectedCar.mileage)}
          </Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <LocalGasStationIcon />
          <Typography variant="body2">{selectedCar.fuel}</Typography>
        </Grid>
        <Grid item xs={3} align="center">
          <AirlineSeatReclineExtraIcon />
          <Typography variant="body2">{selectedCar.seats}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Marca: </Typography>
          <Chip label={selectedCar.brand} color="primary" />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Año: </Typography>
          <Chip label={selectedCar.year} color="primary" />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Modelo: </Typography>
          <Chip label={selectedCar.model} color="primary" />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Dueños: </Typography>
          <Chip label={selectedCar.owners} color="primary" />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Versión: </Typography>
          <Chip label={selectedCar.version} color="primary" />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography display="inline">Llaves: </Typography>
          <Chip label={selectedCar.keys} color="primary" />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h6">Características Adicionales</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <CircleNotificationsIcon />
          <Typography variant="body2">Alarma</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <LightModeIcon />
          <Typography variant="body2">Sensor de luz</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <BluetoothIcon />
          <Typography variant="body2">Bluetooth</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <AcUnitIcon />
          <Typography variant="body2">Climatizador</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <CameraswitchIcon />
          <Typography variant="body2">Cámara de retroceso</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <WarningAmberIcon />
          <Typography variant="body2">Sensor de proximidad</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item>
          <Typography variant="body1">{selectedCar.description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} align="center">
          <Typography display="inline">
            ¿Necesitas opciones de financiamiento?
          </Typography>
        </Grid>
        <Grid item xs={6} align="center" mt={8}>
          <Link href="https://wa.me/56992154860">
            <Button variant="contained">
              <WhatsAppIcon />
              Escríbenos
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} align="center" mt={8}>
          <Link href="tel:56992154860">
            <Button variant="contained">
              <CallIcon />
              Llámanos
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
