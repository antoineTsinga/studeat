import { Box, Button, FormLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { backend } from "../../../adapters/apiCalls";
import { useAppContext } from "../../../AppContext";
import { NotificationManager } from "react-notifications";

const Informations = () => {
  const { userData } = useAppContext();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function setInfoAdmin() {
    if (user.password !== "") {
      backend
        .patch(
          `users/${userData.id}`,
          { ...user },
          { headers: { "content-type": "application/merge-patch+json" } }
        )
        .then((res) => {
          if (res.status === 200)
            NotificationManager.success("Profil mis à jour");
        });
      return;
    }
    const { name, surname, email } = user;
    backend
      .patch(
        `users/${userData.id}`,
        { name, surname, email },
        { headers: { "content-type": "application/merge-patch+json" } }
      )
      .then((res) => {
        if (res.status === 200)
          NotificationManager.success("Profil mis à jour");
      });
  }

  useEffect(() => {
    if (!userData.name) return;

    const { name, surname, email } = userData;

    setUser({
      name,
      surname,
      email,
      password: "",
    });
  }, [userData]);

  const style = { width: "50%" };
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1485px",
        textAlign: "center",
        margin: "50px",
        padding: "0px",
        fontFamily: "$font",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#fff",
      }}
    >
      <Box>
        <Box sx={{ flexGrow: 10 }}>
          <div
            className="card-header mb-3"
            style={{
              backgroundColor: "var(--color-primary)",
              width: "100%",
              height: "60px",
            }}
          >
            <h1 style={{ color: "#fff" }}>Informations personnelles</h1>
          </div>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormLabel htmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
            Nom :
          </FormLabel>
          <TextField
            id="outlined-basic"
            label="."
            variant="outlined"
            name="name"
            style={style}
            value={user.name}
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormLabel htmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
            Prenom :{" "}
          </FormLabel>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            name="surname"
            style={style}
            value={user.surname}
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormLabel htmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
            Email :{" "}
          </FormLabel>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            name="email"
            style={style}
            value={user.email}
            onChange={handleChange}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormLabel htmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
            Nouveau mot de passe :{" "}
          </FormLabel>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            style={style}
          />
        </Box>
        <Button
          variant="outlined"
          style={{
            marginLeft: "480px",
            marginTop: "10px",
            marginBottom: "10px",
            color: "var(--color-primary)",
          }}
          onClick={setInfoAdmin}
        >
          Mettre à jour
        </Button>
      </Box>
    </div>
  );
};

export default Informations;
