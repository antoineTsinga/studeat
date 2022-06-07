import { useEffect } from "react";
import { useRestaurants } from "../../../common/collections";
import { CatalogueContextProvider } from "./CatalogueContext";
import FilterMenu from "./FilterMenu";
import TableItems from "./TableItems";
import Test from "./Test";

export default function Catalogue() {
  const { items, fetchItems } = useRestaurants();

  useEffect(() => {
    async function fetchData() {
      await fetchItems({ page: 1, itemsPerPage: 20 });
    }

    fetchData();
  }, []);

  return (
    <CatalogueContextProvider>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <FilterMenu />
          </div>
          <div className="w-100"></div>
          <div className="col">
            <TableItems />
          </div>
        </div>
      </div>
    </CatalogueContextProvider>
  );
}
