import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, Paper } from "@mui/material";

export default function PurchaseForm() {
  const [fullName, setFullName] = useState("");
  const [rut, setRut] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [labor, setLabor] = useState("");
  const [salary, setSalary] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid maxWidth="md">
      <Grid item xs={12} mt={3} mb={2}>
        <Typography variant="h4" align="center">
          ¿Quieres comprar un auto?
        </Typography>
        <Typography align="center">
          Completa los datos y evaluaremos la mejor opción disponible para ti.
        </Typography>
      </Grid>
      <form id="formData" action="#">
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5">Antecedentes Personales</Typography>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={4} item>
              <TextField
                required
                label="Nombre Completo"
                value={fullName}
                variant="standard"
                InputProps={{ inputMode: "text", pattern: "[A-Za-zs]+" }}
                fullWidth
                onChange={(event) => setFullName(event.target.value)}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
              <TextField
                required
                helperText="Ej: 12345678-9"
                label="Rut"
                value={rut}
                variant="standard"
                fullWidth
                InputProps={{
                  pattern: "^[0-9]+-[0-9kK]{1}$",
                }}
                onChange={(event) => setRut(event.target.value)}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
              <TextField
                required
                type="date"
                label="Fecha de nacimiento"
                value={birth}
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
                onChange={(event) => setBirth(event.target.value)}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
              <TextField
                required
                type="numeric"
                helperText="Ej: 8 dígitos"
                label="Teléfono"
                value={phone}
                variant="standard"
                fullWidth
                InputProps={{
                  pattern: "[0-9]{8}",
                  startAdornment: (
                    <InputAdornment position="start">+569</InputAdornment>
                  ),
                }}
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
                required
                type="number"
                helperText="Cantidad de meses. EJ: 12"
                label="Antigüedad Laboral"
                value={labor}
                variant="standard"
                fullWidth
                onChange={(event) => setLabor(event.target.value)}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
              <TextField
                required
                helperText="Ej: 900000 (sin puntos)"
                label="Sueldo Líquido"
                value={salary}
                variant="standard"
                fullWidth
                InputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                onChange={(event) => setSalary(event.target.value)}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
              <TextField
                required
                helperText="Ej: 2000000 (sin puntos)"
                label="Monto del pie a abonar"
                value={amount}
                variant="standard"
                fullWidth
                InputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                onChange={(event) => setAmount(event.target.value)}
              />
            </Grid>
            <Grid xs={12} align="center" mt={2} item>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                onClick={handleSubmit}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Grid>
  );
}
