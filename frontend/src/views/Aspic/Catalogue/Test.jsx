import { useEffect } from "react";
import { useCatalogueContext } from "./CatalogueContext";
export default function Test() {
  const { fetchCatalogueItems } = useCatalogueContext();

  useEffect(() => {
    async function fetchData() {
      await fetchCatalogueItems();
    }
    fetchData();
  }, []);
  return <h1>Mon Test</h1>;
}
