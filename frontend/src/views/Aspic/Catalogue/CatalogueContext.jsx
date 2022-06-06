import { createContext, useContext, useEffect, useState } from "react";
import { useAppContext } from "../../../AppContext";
import { useItems, useRestaurants } from "../../../common/collections";

const CatalogueContext = createContext();

export function useCatalogueContext() {
  return useContext(CatalogueContext);
}

export function CatalogueContextProvider({ children }) {
  const { user } = useAppContext();
  const {
    items,
    fetchItems,
    createItem,
    updateItem,
    deleteItem,
    loadingItems,
    pageTotal,
    total,
  } = useRestaurants();

  const [loading, setLoading] = useState({});

  const [paramsFilter, setParamsFilter] = useState({});
  const [page, setPage] = useState(0);
  const [pageSige, setPageSize] = useState(20);

  useEffect(() => {
    if (!paramsFilter) return;

    fetchItems({
      ...paramsFilter,
      page: page || 1,
      itemsPerPage: pageSige || 20,
    });
  }, [paramsFilter, page, pageSige]);

  return (
    <CatalogueContext.Provider
      value={{
        user,

        items,
        fetchCatalogueItems: (params, header) =>
          fetchItems({ ...params, itemsPerPage: 20 }, { ...header }),
        pageTotal,
        createItem,
        updateItem,
        deleteItem,

        paramsFilter,
        setParamsFilter,
        setPage,
        page,

        total,

        detailedLoading: loading,
        loading: Object.values(loading).every((x) => x),
      }}
    >
      {children}
    </CatalogueContext.Provider>
  );
}
