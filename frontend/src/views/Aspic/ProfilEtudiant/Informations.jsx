import { Box, Button, FormLabel, TextField } from "@mui/material";
import React from "react";

const Informations = () => {
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
      <form>
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
            <FormLabel HtmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
              Nom :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              name="firstName"
              style={style}
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
            <FormLabel HtmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
              Prenom :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              name="lastName"
              style={style}
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
            <FormLabel HtmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
              Email :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              name="email"
              style={style}
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
            <FormLabel HtmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
              Adresse :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              name="email"
              style={style}
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
            <FormLabel HtmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
              Ancien mot de passe :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              type="password"
              name="password"
              style={style}
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
            <FormLabel HtmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
              Nouveau mot de passe :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              type="password"
              name="password"
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
          >
            Mettre à jour
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Informations;
