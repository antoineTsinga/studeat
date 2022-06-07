import { useEffect, useState } from "react";
import { backend } from "../../../adapters/apiCalls";

export default function Aliment({ id }) {
  const [aliment, setAliment] = useState({});

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      let alimentData = {};
      await backend.get(`aliments/${id}`).then(({ data }) => {
        alimentData = data;
      });

      setAliment(alimentData);
    }

    fetchData();
  }, []);
  return (
    <tr>
      <td>{aliment.foodtype}</td>
      <td className="ps-3">{aliment.quantity}</td>
      <td className="ps-1">{aliment.unity}</td>
      <td className="ps-3">{aliment.dlc?.split("T")[0]}</td>
    </tr>
  );
}
