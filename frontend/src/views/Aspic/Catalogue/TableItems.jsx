import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

// import { backend } from "../../adapters/apiCalls";

import { useAppContext } from "../../../AppContext";

import { useCatalogueContext } from "./CatalogueContext";
import { FiSmartphone } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineInfo } from "react-icons/md";
import { Link } from "react-router-dom";

export default function TableItems({ params }) {
  const { items } = useCatalogueContext();
  const { user } = useAppContext();
  const [cart, setCart] = useState({});

  const basUrl = "../../assets/images/image-items/";

  return (
    <div
      className="mb-5"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {items.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345, width: "300px" }}>
          <Link to={`/Restaurant/${item.id}`}>
            <CardMedia
              component="img"
              image={process.env.PUBLIC_URL + `/image-items/${item.image}`}
              alt={item.restaurant}
              height="140"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.restaurant}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <div className="mb-2">
                <FiSmartphone size={25} />
                <span>{item.tel}</span>
              </div>
              <div>
                <HiLocationMarker size={25} /> <span>{item.adress}</span>
              </div>
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title={item.alimTypes.join("\n")} placement="top">
              <IconButton>
                <MdOutlineInfo />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
