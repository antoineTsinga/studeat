import { MenuItem, MenuList, Paper } from "@mui/material";
import React from "react";

const SideMenu = ({ menu, setSection, sectionSelected }) => {
  return (
    <Paper
      className=""
      style={{
        width: "248px",
        height: "330px",
        marginLeft: "100px",
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
      </MenuList>
    </Paper>
  );
};

export default SideMenu;
