import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useCatalogueContext } from "./CatalogueContext";

export default function SearchRestaurant() {
  const { setParamsFilter, paramsFilter } = useCatalogueContext();
  const [restaurant, setRestaurant] = useState("");

  function handleChange(e) {
    setRestaurant(e.target.value);
  }

  function handleSubmit() {
    setParamsFilter({ ...paramsFilter, restaurant });
  }
  return (
    <div className="col d-flex justify-content-end">
      <TextField
        id="outlined-search"
        label="Recherche"
        placeholder="Recherchez des restaurants"
        size="small"
        type="search"
        value={restaurant}
        onChange={handleChange}
        style={{ width: "300px" }}
      />
      <Button variant="contained" size="medium" onClick={handleSubmit}>
        Rechercher
      </Button>
    </div>
  );
}
