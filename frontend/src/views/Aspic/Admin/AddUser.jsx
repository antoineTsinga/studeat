import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Grid, TextField, Typography } from "@mui/material";

import { NotificationManager } from "react-notifications";
import { backend } from "../../../adapters/apiCalls";

export default function AddUser({ setChange }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    await saveItem();
    setNewItem({
      name: "",
      surname: "",
      email: "",
      password: "",
    });
    setChange(newItem.email);

    setOpen(false);
  };

  function handleChange(e) {
    e.preventDefault();

    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  }

  async function saveItem() {
    setLoading(true);
    await backend
      .post("/register", { ...newItem })
      .then(({ status }) => {
        setLoading(false);
        if (status !== 200) return;
        NotificationManager.success("Utilisateur ajouté");
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <div className="ms-5">
      <Button variant="outlined" onClick={handleClickOpen}>
        Ajouter un Utilisateur
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography
            variant="h4"
            gutterBottom={true}
            style={{ fontFamily: "Work Sans" }}
          >
            Ajouter un utilisateur
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box className="mt-2">
            <Grid
              sx={{
                display: "grid",
                gridTemplateRows: "repeat(4, 1fr)",
              }}
            >
              <TextField
                required
                helperText=" "
                id="surname"
                label="Nom"
                value={newItem.surname}
                onChange={handleChange}
                name="surname"
              />
              <TextField
                required
                helperText=" "
                id="name"
                label="Prenom"
                value={newItem.name}
                onChange={handleChange}
                name="name"
              />
              <TextField
                required
                helperText=" "
                id="email"
                label="E-mail"
                value={newItem.email}
                onChange={handleChange}
                name="email"
              />
              <TextField
                required
                helperText=" "
                id="password"
                label="Mot de passe"
                type="password"
                autoComplete={false}
                value={newItem.password}
                onChange={handleChange}
                name="password"
              />
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          {!loading ? (
            <Button
              onClick={(e) => {
                handleClose(e);
              }}
              style={{ fontFamily: "Work Sans" }}
            >
              Enregistrer
            </Button>
          ) : (
            <Button disable>Chargement...</Button>
          )}
          <Button onClick={handleClose} autoFocus>
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
