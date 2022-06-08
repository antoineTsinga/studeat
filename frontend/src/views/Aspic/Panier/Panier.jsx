import { Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

import { BsCart2 } from "react-icons/bs";
import { backend } from "../../../adapters/apiCalls";
import { useAppContext } from "../../../AppContext";
import PanierAlim from "./PanierAlim";

import { NotificationManager } from "react-notifications";

const Panier = () => {
  const [panier, setPanier] = useState({});
  const { userData } = useAppContext();

  useEffect(() => {
    if (!userData.name) return;
    async function fetchData() {
      let panierData = {};
      const lengthL = userData.etudiant.panier.split("/").length;
      const panierId = userData.etudiant.panier.split("/")[lengthL - 1];
      await backend.get(`paniers/${panierId}`).then(({ data }) => {
        panierData = data;
      });
      console.log(panierData);
      setPanier(panierData);
    }

    fetchData();
  }, [userData]);

  useEffect(() => {}, [panier]);

  async function deleteItem(id) {
    const items2 = panier.panierAlims.filter((item1) => item1 !== id);

    backend
      .patch(
        `paniers/${panier.id}`,
        {
          panierAlims: items2,
        },
        { headers: { "content-type": "application/merge-patch+json" } }
      )
      .then((res) => {
        if (res.status === 204) {
          NotificationManager.success("panier supprimé");
        }
        setPanier({
          ...panier,
          panierAlims: items2,
        });
      })
      .catch(() => {});
  }

  function videcommande() {
    backend
      .patch(
        `paniers/${panier.id}`,
        {
          panierAlims: [],
        },
        { headers: { "content-type": "application/merge-patch+json" } }
      )
      .then((res) => {
        setPanier({
          ...panier,
          panierAlims: [],
        });
      })
      .catch(() => {});
  }

  async function order() {
    const commande = {
      panierAlims: panier.panierAlims,
      valide: true,
      modeDeLivraison: true,
      profilEtudiant: panier.owner,
    };
    backend.post("commandes", { ...commande }).then((res) => {
      if (res.status === 201) {
        NotificationManager.success("réservation enregistrée");
        videcommande();
      }
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="card"
          style={{
            width: "50%",
            marginBottom: "70px",
            marginLeft: "330px",
            marginTop: "70px",
          }}
        >
          <div className="card-body">
            <div
              className="header-title"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "9px",
                justifyContent: "start",
              }}
            >
              <h1>Panier</h1>
              <BsCart2 size={40} />
            </div>

            {panier?.panierAlims?.map((pan) => (
              <PanierAlim key={pan} id={pan} deleteItem={deleteItem} />
            ))}

            <div
              className="total"
              style={{
                textAlign: "center",
                textDecoration: "underline",
                marginTop: "20px",
              }}
            >
              Total : 0€
            </div>
            <div
              className="button"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <p>
                <Button
                  onClick={order}
                  variant="contained"
                  style={{ backgroundColor: "blue" }}
                >
                  Réserver mon panier
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
