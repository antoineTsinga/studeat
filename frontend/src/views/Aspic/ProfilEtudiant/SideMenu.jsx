import {
  Divider,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ menu, setSection, sectionSelected }) => {
  console.log(menu);

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
