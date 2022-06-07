import React, { useState } from "react";
import Informations from "../Admin/Informations";
import Autres from "./Autres";

import FaireDon from "./FaireDon";
import Favoris from "./Favoris";
import Historique from "./Historique";

import Messagerie from "./Messagerie";

import SideMenu from "./SideMenu";
import SupprimerCompte from "./SupprimerCompte";

const ProfilEtudiant = () => {
  const [section, setSection] = useState("Informations Personnelles");
  const menu = [
    "Informations Personnelles",
    "Historique des commandes",
    "Favoris",
    "Messagerie",
    "Faire un don",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "30px",
      }}
      className="conatiner"
    >
      <SideMenu menu={menu} setSection={setSection} sectionSelected={section} />
      {section === "Informations Personnelles" ? (
        <Informations />
      ) : section === "Historique des commandes" ? (
        <Historique />
      ) : section === "Favoris" ? (
        <Favoris />
      ) : section === "Messagerie" ? (
        <Messagerie />
      ) : section === "Faire un don" ? (
        <FaireDon />
      ) : null}
    </div>
  );
};

export default ProfilEtudiant;
