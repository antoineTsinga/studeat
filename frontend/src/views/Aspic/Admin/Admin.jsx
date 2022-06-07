import React, { useEffect, useState } from "react";
import Informations from "./Informations";
import SideBar from "./../../../common/SideBar";
import UserGestion from "./UserGestion";
import Faq from "./Faq";
import adminlogo from "../../../assets/images/adminlogo.png";
import { useAppContext } from "../../../AppContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [section, setSection] = useState("Informations personnelles");
  const menu = [
    "Informations personnelles",
    "Gestion des utilisateur",
    "Gérer la FAQ",
  ];
  const { userData } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.name) return;

    if (!userData.isAdmin) navigate("/login");
  }, []);
  const titre = "Interface administrateur";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "var(--color-white)",
      }}
    >
      <SideBar
        menu={menu}
        setSection={setSection}
        style={{
          color: "var(--color-white)",
          backgroundColor: "var(--color-primary)",
        }}
        titre={titre}
        logo={adminlogo}
      />
      {section === "Informations personnelles" ? (
        <Informations />
      ) : section === "Gestion des utilisateur" ? (
        <UserGestion />
      ) : section === "Gérer la FAQ" ? (
        <Faq />
      ) : null}
    </div>
  );
};

export default Admin;
