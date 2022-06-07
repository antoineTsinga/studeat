import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useCatalogueContext } from "./CatalogueContext";

export default function PaginationControlled() {
  const { pageTotal, setPage } = useCatalogueContext();
  const [paginationPage, setPaginationPage] = useState(1);

  const handleChange = (event, value) => {
    setPaginationPage(value);
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageTotal}
        page={paginationPage}
        onChange={handleChange}
        boundaryCount={2}
      />
    </Stack>
  );
}
