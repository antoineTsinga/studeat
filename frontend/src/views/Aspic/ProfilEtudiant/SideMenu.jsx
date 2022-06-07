import { MenuItem, MenuList, Paper } from "@mui/material";
import React from "react";
import { useAppContext } from "../../../AppContext";
import { useProfilEtudiants } from "../../../common/collections";
import DialogSecure from "../../../common/DialogSecure";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ menu, setSection, sectionSelected }) => {
  const { deleteItem } = useProfilEtudiants();
  const navigate = useNavigate();

  const { userData } = useAppContext();
  return (
    <Paper
      className="mb-5 me-5"
      style={{
        width: "248px",

        marginLeft: "50px",
        marginTop: "40px",
      }}
    >
      <MenuList
        spacing={6}
        style={{
          height: "50%",
          justifyContent: "space-between",
          //   alignItems: "space-around",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {menu.map((section) => (
          <MenuItem
            style={
              section === sectionSelected
                ? { backgroundColor: "var(--color-primary)", color: "#fff" }
                : null
            }
            key={section}
            onClick={() => {
              setSection(section);
            }}
          >
            {section}
          </MenuItem>
        ))}
        <MenuItem>
          <DialogSecure
            onValidat={async () => {
              await deleteItem({ id: userData.etudiant.id });
              navigate("/login");
            }}
            message={{
              title: "Supprimer cette utilisateur ?",
              body: "Cette opération est irreversible, une fois supprimées les données seront perdus",
            }}
          >
            Supprimer le compte
          </DialogSecure>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default SideMenu;
