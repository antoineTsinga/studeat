import { useEffect } from "react";
import { useRestaurants } from "../../../common/collections";
import { CatalogueContextProvider } from "./CatalogueContext";
import FilterMenu from "./FilterMenu";
import Test from "./Test";

export default function Catalogue() {
  const { items, fetchItems } = useRestaurants();

  useEffect(() => {
    async function fetchData() {
      await fetchItems({ page: 1, itemsPerPage: 20 });
    }

    fetchData();
    console.log(items);
  }, []);

  return (
    <CatalogueContextProvider>
      <div class="container">
        <div class="row">
          <div class="col">
            <FilterMenu />
          </div>
          <div class="w-100"></div>
          <div class="col">Column</div>
        </div>
      </div>
      <Test />
    </CatalogueContextProvider>
  );
}
