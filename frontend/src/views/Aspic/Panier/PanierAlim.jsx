import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { backend } from "../../../adapters/apiCalls";

export default function PanierAlim({ id, deleteItem }) {
  const [panierAlim, setPanierAlim] = useState({});
  useEffect(() => {
    if (!id) return;
    async function fetchData() {
      let panierAlimData = {};
      const idValue = id.split("/")[id.split("/").length - 1];
      await backend.get(`panier_alims/${idValue}`).then(({ data }) => {
        panierAlimData = data;
      });

      setPanierAlim(panierAlimData);
    }

    fetchData();
  }, []);

  return (
    <div
      key={panierAlim.id}
      className="cart1"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      <p>ref : {panierAlim.id}</p>
      <p>
        <Link
          to={`/Restaurant/${
            panierAlim.restaurant?.split("/")[
              panierAlim.restaurant?.split("/").length - 1
            ]
          }`}
        >
          {" "}
          plus de détails
        </Link>
      </p>
      <p>
        <IconButton onClick={() => deleteItem(id)}>
          <MdDelete style={{ color: "red" }} />
        </IconButton>
      </p>
    </div>
  );
}
