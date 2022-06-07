import { useEffect } from "react";
import { useCatalogueContext } from "./CatalogueContext";
export default function Test() {
  const { items, fetchCatalogueItems } = useCatalogueContext();

  useEffect(() => {
    async function fetchData() {
      await fetchCatalogueItems();
      console.log(items);
    }
    fetchData();
  }, []);
  return <h1>Mon Test</h1>;
}
