import { Box, Button, FormLabel, TextField } from "@mui/material";
import React, { useDeferredValue, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useAppContext } from "../../../AppContext";
import { backend } from "../../../adapters/apiCalls";

const Informations = () => {
  const style = { width: "50%" };
  const { userData } = useAppContext();

  const [data, setData] = useState({
    name: userData.name,
    surname: userData.surname,
    email: userData.email,
    telephonenumber: userData.livreur.tel,
    password: "",
    passwordnew: "",
});

function handleChange(e) {
    e.preventDefault()
    setData({ ...data, [e.target.name]: e.target.value });
}

const handleUpdate = (data) => {

  backend
      .post("/livreurEditProfile", data)
      .then((json) => {
          NotificationManager.success("Modification réussie");
          userData.name = json.data.name;
          userData.surname = json.data.surname;
          userData.email = json.data.email;
          userData.telephonenumber = json.data.telephonenumber;

      })
      .catch((err) => {
          if (err.response.status === 422) {
              NotificationManager.error("Tout les champs sont obligatoires");
          }
          if (err.response.status === 409) {
              NotificationManager.error("Erreur lors de la modification");
          } else {
              NotificationManager.error("Application indisponible");
          }
          console.error(err.response);
      });
};

function handleSubmit(e) {
    e.preventDefault();
    handleUpdate(data);
}


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
              className="card-header"
              style={{
                backgroundColor: "var(--color-primary)",
                width: "100%",
                height: "60px",
              }}
            >
              <h1 style={{ color: "#fff" }}>Informations personnelles </h1>
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
            <FormLabel htmlFor="name" style={{ fontWeight: "bold" }}>
              Nom :{" "}
            </FormLabel>
            <TextField
              id="name"
              label=""
              variant="outlined"
              name="name"
              style={style}
              value={userData.name}
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
            <FormLabel htmlFor="surname" style={{ fontWeight: "bold" }}>
              Prenom :{" "}
            </FormLabel>
            <TextField
              id="surname"
              label=""
              variant="outlined"
              name="surname"
              style={style}
              value={data.surname}
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
            <FormLabel htmlFor="email" style={{ fontWeight: "bold" }}>
              Email :{" "}
            </FormLabel>
            <TextField
              id="email"
              label=""
              variant="outlined"
              name="email"
              style={style}
              value={data.email}
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
            <FormLabel htmlFor="telephonenumber" style={{ fontWeight: "bold" }}>
              Numéro-de-téléphone :{" "}
            </FormLabel>
            <TextField
              id="telephonenumber"
              label=""
              variant="outlined"
              name="telephonenumber"
              style={style}
              value = {data.telephonenumber}
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
            <FormLabel htmlFor="password" style={{ fontWeight: "bold" }}>
              Ancien mot de passe :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              type="password"
              name="password"
              value={data.password}
              style={style}
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
            <FormLabel htmlFor="passwordnew" style={{ fontWeight: "bold" }}>
              Nouveau mot de passe :{" "}
            </FormLabel>
            <TextField
              id="passwordnew"
              label=""
              variant="outlined"
              type="password"
              name="passwordnew"
              style={style}
              value={data.passwordnew}
              onChange={handleChange}
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
            onClick={handleSubmit}
          >
            Mettre à jour
          </Button>
        </Box>
    </div>
  );
};

export default Informations;
