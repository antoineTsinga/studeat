import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { backend } from "../../../adapters/apiCalls";
import { BsCartPlus } from "react-icons/bs";
import Aliment from "./Aliments";

export default function PanierAlim({ id }) {
  const [panierAlim, setPanierAlim] = useState({});
  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      let panierAlimData = {};
      await backend.get(`panier_alims/${id}`).then(({ data }) => {
        panierAlimData = data;
      });

      setPanierAlim(panierAlimData);
    }

    fetchData();
  }, []);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ref:{panierAlim.id}
        </Typography>
        <Typography variant="h5" component="div">
          Panier Alimentaire
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Aliments :
        </Typography>
        <Typography variant="body2" component="div">
          <table>
            <tbody>
              {panierAlim?.aliment?.map((aliment) => (
                <Aliment
                  key={aliment}
                  id={aliment?.split("/")[aliment?.split("/").length - 1]}
                />
              ))}
            </tbody>
          </table>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small">
          <BsCartPlus />
        </IconButton>
      </CardActions>
    </Card>
  );
}
