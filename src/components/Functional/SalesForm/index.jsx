import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Paper, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SalesForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [version, setVersion] = useState("");
  const [year, setYear] = useState("");
  const [cylinder, setCylinder] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [owners, setOwners] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid maxWidth="md" component="form" onSubmit={handleSubmit}>
      <Grid item xs={12} mt={3} mb={2}>
        <Typography variant="h4" align="center">
          ¿Quieres vender tu auto?
        </Typography>
        <Typography align="center">
          Completa los datos y evaluaremos la mejor opción disponible para ti.
        </Typography>
      </Grid>
      <Paper elevation={3}>
        <Typography variant="h5"> Datos del Cliente</Typography>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              label="Nombre"
              value={firstName}
              variant="standard"
              fullWidth
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              label="Apellido"
              value={lastName}
              variant="standard"
              fullWidth
              onChange={(event) => setLastName(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              label="Teléfono"
              value={phone}
              variant="standard"
              fullWidth
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              type="email"
              label="Correo"
              value={email}
              variant="standard"
              fullWidth
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
        </Grid>
        <Typography variant="h5" mt={4}>
          Datos del Vehículo
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              type="text"
              label="Marca"
              value={brand}
              variant="standard"
              fullWidth
              onChange={(event) => setBrand(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              label="Modelo"
              value={model}
              variant="standard"
              fullWidth
              onChange={(event) => setModel(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              label="Versión"
              value={version}
              variant="standard"
              fullWidth
              onChange={(event) => setVersion(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              label="Año"
              value={year}
              variant="standard"
              fullWidth
              onChange={(event) => setYear(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              label="Cilindrada"
              value={cylinder}
              variant="standard"
              fullWidth
              onChange={(event) => setCylinder(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              type="number"
              label="Kilometraje"
              value={mileage}
              variant="standard"
              fullWidth
              onChange={(event) => setMileage(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <FormControl variant="standard" required fullWidth>
              <InputLabel>Transmisión</InputLabel>
              <Select
                label="Transmisión"
                value={transmission}
                onChange={(event) => setTransmission(event.target.value)}
              >
                {["Manual", "Automático"].map((valor) => (
                  <MenuItem key={valor} value={valor}>
                    {valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <FormControl variant="standard" required fullWidth>
              <InputLabel>N° Dueños</InputLabel>
              <Select
                label="N° Dueños"
                value={owners}
                onChange={(event) => setOwners(event.target.value)}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((valor) => (
                  <MenuItem key={valor} value={valor}>
                    {valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} align="center" mt={2} item>
            <Button variant="contained" color="secondary" type="submit">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
