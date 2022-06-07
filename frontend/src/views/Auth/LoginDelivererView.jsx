import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function LoginDelivererView({ handleDeliveryLogin }) {
    const [data, setData] = useState({ username: "", password: "" });

    function handleChange(e) {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
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
                        Connectez-vous
                    </Typography>
                    <Grid
                        sx={{
                            display: "grid",
                            gridTemplateRows: "repeat(3, 1fr)",
                        }}
                    >
                        <TextField
                            required
                            helperText=" "
                            id="outlined-required"
                            label="E-mail"
                            value={data.username}
                            onChange={handleChange}
                            name="username"
                        />
                        <TextField
                            required
                            helperText=" "
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={data.password}
                            onChange={handleChange}
                            name="password"
                        />
                        <Button
                            helperText=" "
                            className="btn-primary"
                            variant="contained"
                            sx={{
                                marginBottom: 2,
                                bgcolor: "var(--color-primary) !important",
                            }}
                            style={{ fontFamily: "Work Sans" }}
                            onClick={() => handleDeliveryLogin(data)}
                        >
                            Connexion
                        </Button>
                    </Grid>
                </Box>
            </form>
            <div>
                <Link to="/forgot-password">
                    <Typography style={{ fontFamily: "Work Sans" }}>
                        Mot de passe oublié ?
                    </Typography>
                </Link>

                <p>
                    Vous n'avez pas encore de compte ?{" "}
                    <Link to="/registrationDeliverer">Inscrivez-vous</Link>
                </p>
            </div>
        </div>
    );
}