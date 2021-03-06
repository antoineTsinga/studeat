import React, { useState } from "react";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function RegistrationView({ handleRegister }) {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validatedData, setvalidatedData] = useState({
    validate: true,
    password: { value: false, message: " " },
  });

  function handleChange(e) {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validatedData.value) handleRegister(data);
  }

  function handleValidation() {
    const confirmPasswordError = data.password === data.confirmPassword;
    setvalidatedData({
      ...validatedData,
      password: {
        value: !confirmPasswordError,
        message: !confirmPasswordError ? "le mot de passe est différent" : "",
      },
      value: confirmPasswordError,
    });
  }

  return (
    <div
      className="form-login"
      style={{
        width: "90%",
        maxWidth: "500px",
        textAlign: "center",
        margin: "50px",
        fontFamily: "Work Sans",
      }}
    >
      <form>
        <Box>
          <Box
            component="img"
            sx={{
              height: 200,
              width: 200,
              borderRadius: 100,
              marginBottom: 5,
            }}
            alt="Logo Studeat"
            src={logo}
          />
          <Typography
            variant="h4"
            gutterBottom={true}
            style={{ fontFamily: "Work Sans" }}
          >
            Inscrivez-vous
          </Typography>
          <Grid
            sx={{
              display: "grid",
              gridTemplateRows: "repeat(6, 1fr)",
            }}
          >
            <TextField
              required
              helperText=" "
              id="surname"
              label="Nom"
              value={data.surname}
              onChange={handleChange}
              name="surname"
            />
            <TextField
              required
              helperText=" "
              id="name"
              label="Prenom"
              value={data.name}
              onChange={handleChange}
              name="name"
            />
            <TextField
              required
              helperText=" "
              id="email"
              label="E-mail"
              value={data.email}
              onChange={handleChange}
              name="email"
            />
            <TextField
              required
              helperText=" "
              id="password"
              label="Mot de passe"
              type="password"
              autoComplete="current-password"
              value={data.password}
              onChange={handleChange}
              name="password"
            />

            <TextField
              required
              id="confirmPassword"
              label="Confirmer votre de passe"
              type="password"
              autoComplete="current-password"
              value={data.confirmPassword}
              onChange={handleChange}
              onBlur={handleValidation}
              name="confirmPassword"
              error={validatedData.password.value}
              helperText={validatedData.password.message}
            />

            <Button
              className="btn-primary"
              variant="contained"
              onClick={handleSubmit}
              sx={{
                marginBottom: 2,
                bgcolor: "var(--color-primary) !important",
              }}
              style={{ fontFamily: "Work Sans" }}
            >
              Inscription
            </Button>
          </Grid>
        </Box>
      </form>

      <p>
        Vous avez déjà un compte ? <Link to="/login">connectez-vous</Link>
      </p>
    </div>
  );
}
