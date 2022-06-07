import { useEffect, useState } from "react";
import { backend } from "../../../adapters/apiCalls";
import { useAppContext } from "../../../AppContext";
import PanierAlim from "./PanierAlim";

export default function PanierAlims({ panierAlims }) {
  const [panier, setPanier] = useState({});
  const { userData } = useAppContext();
  useEffect(() => {
    if (!panierAlims) return;
    if (!userData?.etudiant) return;
    async function fetchData() {
      let panierData = {};
      const lengthL = userData.etudiant.panier.split("/").length;
      const panierId = userData.etudiant.panier.split("/")[lengthL - 1];
      await backend.get(`paniers/${panierId}`).then(({ data }) => {
        panierData = data;
      });

      setPanier(panierData);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!panier) return;

    if (!panier.id) return;
    async function fetchData() {
      backend
        .patch(
          `paniers/${panier.id}`,
          {
            ...panier,
          },
          { headers: { "content-type": "application/merge-patch+json" } }
        )
        .then((res) => {});
    }
    fetchData();
  }, [panier]);

  async function addToCart(id) {
    console.log("panier", panier);
    if (!panier.panierAlims) return;
    setPanier({
      ...panier,
      panierAlims: [...panier.panierAlims, id],
    });
  }

  async function deleteItem(id) {
    console.log(panier.panierAlims);
    const items2 = panier.panierAlims.filter((item1) => item1 !== id);
    console.log(items2);

    setPanier({
      ...panier,
      panierAlims: items2,
    });
  }

  function inCart(item2) {
    return panier.panierAlims?.filter((item1) => item1 === item2)?.length > 0;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {panierAlims?.map((panierAlim) => (
        <PanierAlim
          key={panierAlim}
          id={panierAlim}
          inCart={inCart}
          deleteItem={deleteItem}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
