import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button, Paper } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export default function PurchaseForm() {
  const [fullName, setFullName] = useState("");
  const [rut, setRut] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [labor, setLabor] = useState("");
  const [amount, setAmount] = useState("");
  const [fee, setFee] = useState("");

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
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5">Antecedentes Personales</Typography>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              label="Nombre Completo"
              value={fullName}
              variant="standard"
              fullWidth
              onChange={(event) => setFullName(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              label="Rut"
              value={rut}
              variant="standard"
              fullWidth
              onChange={(event) => setRut(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              required
              type="date"
              label="Fecha de nacimiento"
              value={birthdate}
              variant="standard"
              InputLabelProps={{ shrink: true }}
              fullWidth
              onChange={(event) => setBirthdate(event.target.value)}
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
          Antecedentes Laborales
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              type="number"
              required
              label="Antigüedad Laboral"
              value={labor}
              variant="standard"
              fullWidth
              onChange={(event) => setLabor(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <FormControl variant="standard" fullWidth required>
              <OutlinedInput
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <TextField
              label="Monto del pie disponible para abonar"
              value={fee}
              variant="standard"
              fullWidth
              onChange={(event) => setFee(event.target.value)}
            />
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
