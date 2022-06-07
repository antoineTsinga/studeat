import { useEffect, useState } from "react";
import { useProfilEtudiants } from "../../../common/collections";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomNoRowsOverlay from "../../../common/CustomNoRowsOverlay";
import { NotificationManager } from "react-notifications";
import { backend } from "../../../adapters/apiCalls";
import DialogSecure from "../../../common/DialogSecure";
import LoadingFade from "../../../common/LoadingFade";

export default function ManageUsers({ change, setChange }) {
  const apiRef = useGridApiRef();
  const [loading, setLoaging] = useState({});

  const {
    unsortedItems: data,
    fetchItems,
    deleteItem,
    loading: isLoading,
    total,
  } = useProfilEtudiants();

  const columns = [
    {
      field: "userId",
      headerName: "id",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      editable: true,
      flex: 1,
    },
    {
      field: "surname",
      headerName: "Surname",
      editable: true,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      editable: true,
      flex: 1,
    },

    {
      field: "action",
      flex: 2,
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const id = params.row.id;
        return (
          <>
            <DialogSecure
              onValidat={async () => {
                setLoaging({ [id]: true });
                await deleteItem({ id });
                setLoaging({ [id]: false });
                setChange(id);
              }}
              message={{
                title: "Supprimer cette utilisateur ?",
                body: "Cette opération est irreversible, une fois supprimées les données seront perdus",
              }}
            >
              <DeleteIcon style={{ color: "var(--color-danger)" }} />
            </DialogSecure>
            <LoadingFade
              key={params.row.id}
              loading={loading[params.row.id]}
              height={40}
            />
          </>
        );
      },
    },
  ];

  // Some API clients return undefined while loading
  // Following lines are here to prevent `rowCountState` from being undefined during the loading
  const [queryParams, setQueryParams] = useState({
    page: 0,
    itemsPerPage: 5,
  });

  async function setInfoAdmin(id, user) {
    await backend
      .patch(
        `users/${id}`,
        { ...user },
        { headers: { "content-type": "application/merge-patch+json" } }
      )
      .then((res) => {
        if (res.status === 200)
          NotificationManager.success("Utilisateur mis à jour");
      });

    setChange(id);
  }

  useEffect(() => {
    async function fetchData() {
      await fetchItems({ ...queryParams, page: queryParams.page + 1 });
    }
    fetchData();
  }, [queryParams, change]);

  return (
    <div style={{ height: 400, width: "100%" }} className="mb-5">
      itemsPerPage
      <DataGrid
        rows={data}
        rowCount={total}
        loading={isLoading}
        rowsPerPageOptions={[5, 10]}
        pagination
        page={queryParams.page}
        pageSize={queryParams.itemsPerPage}
        paginationMode="server"
        onPageSizeChange={(size) =>
          setQueryParams({ ...queryParams, itemsPerPage: size })
        }
        onCellEditCommit={(field, e) => {
          setInfoAdmin(field.id, { [field.field]: field.value });
        }}
        onPageChange={(page) => {
          setQueryParams({
            ...queryParams,
            page: page,
          });
        }}
        getRowId={(row) => {
          return row.userId;
        }}
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        columns={columns}
        apiRef={apiRef}
      />
    </div>
  );
}
