import { useEffect, useState } from "react";
import { backend } from "../../../adapters/apiCalls";
import { useAppContext } from "../../../AppContext";
import LoadingFade from "../../../common/LoadingFade";
import PanierAlim from "./PanierAlim";

export default function PanierAlims({ panierAlims }) {
  const [panier, setPanier] = useState({});
  const [loading, setLoaging] = useState({});
  const { userData } = useAppContext();
  useEffect(() => {
    if (!panierAlims) return;
    if (!userData.etudiant) return;

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
  }, [userData]);

  async function addToCart(id) {
    setLoaging({ [id]: true });

    setPanier({
      ...panier,
      panierAlims: [...panier.panierAlims, id],
    });

    await backend
      .patch(
        `paniers/${panier.id}`,
        {
          ...panier,
          panierAlims: [...panier.panierAlims, id],
        },
        { headers: { "content-type": "application/merge-patch+json" } }
      )
      .then((res) => {
        setPanier({
          ...panier,

          panierAlims: [...panier.panierAlims, id],
        });
      });
    setLoaging({ [id]: false });
  }

  async function deleteItem(id) {
    setLoaging({ [id]: true });
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
        setLoaging({ [id]: false });
        setPanier({
          ...panier,
          panierAlims: items2,
        });
      })
      .catch(() => {
        setLoaging({ [id]: false });
      });
  }

  function inCart(item2) {
    return panier.panierAlims?.filter((item1) => item1 === item2)?.length > 0;
  }

  return (
    <div
      className="mb-5"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {panier?.panierAlims
        ? panierAlims?.map((panierAlim) => (
            <div key={panierAlim}>
              <PanierAlim
                key={panierAlim}
                id={panierAlim}
                inCart={inCart}
                deleteItem={deleteItem}
                addToCart={addToCart}
              >
                <LoadingFade
                  key={panierAlim + panierAlim}
                  loading={loading[panierAlim]}
                  height={40}
                />
              </PanierAlim>
            </div>
          ))
        : null}
    </div>
  );
}
