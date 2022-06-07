import React, { useState } from "react";
import Autres from "./Autres";
import Deconnexion from "./Deconnexion";
import FaireDon from "./FaireDon";
import Favoris from "./Favoris";
import Historique from "./Historique";
import Informations from "./Informations";
import Messagerie from "./Messagerie";
import Regarder from "./Regarder";
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
    "Regarder une vidéo publicitaire",
    "Autres produits studeat",
    "Deconnexion",
    "Supprimer le compte",
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
      ) : section === "Regarder une vidéo publicitaire" ? (
        <Regarder />
      ) : section === "Autres produits studeat" ? (
        <Autres />
      ) : section === "Deconnexion" ? (
        <Deconnexion />
      ) : section === "Supprimer le compte" ? (
        <SupprimerCompte />
      ) : null}
    </div>
  );
};

export default ProfilEtudiant;
