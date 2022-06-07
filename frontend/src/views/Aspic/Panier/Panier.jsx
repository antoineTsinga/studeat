import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BsCartDash } from "react-icons/bs";
import Aliments from "../Aliments";

import PanierAlims from "../Restaurant/PanierAlims";

const Panier = () => {
  const [panier, setPanier] = useState({});

  async function deleteItem(id) {
    const items2 = panier.panierAlims.filter((item1) => item1 !== id);

    setPanier({
      ...panier,
      panierAlims: items2,
    });
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ref:{Panier.id}
        </Typography>
        <Typography variant="h5" component="div">
          Paniers Alimentaires
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Paniers :
        </Typography>
        <Typography variant="body2" component="div">
          <table>
            <tbody>
              {Panier?.PanierAlims?.map((PanierAlim) => (
                <Aliments
                  key={PanierAlim}
                  id={
                    PanierAlims?.split("/")[PanierAlims?.split("/").length - 1]
                  }
                />
              ))}
            </tbody>
          </table>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size="small"
          onClick={(id) => {
            deleteItem(id);
          }}
        >
          <BsCartDash />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Panier;
