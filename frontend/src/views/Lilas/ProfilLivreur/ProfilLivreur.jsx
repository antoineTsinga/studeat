import React, { useState } from "react";
import Deconnexion from "./Deconnexion";
import Historique from "./Historique";
import Informations from "./Informations";
import SideMenu from "./SideMenu";
import SupprimerCompte from "./SupprimerCompte";
import CommandesAffaires from "./CommandesAffaires";
import Encours from "./Encours";

const ProfilLivreur = () => {
  const [section, setSection] = useState("Informations Personnelles");
  const menu = [
    "Informations Personnelles",
    "Commandes d'affaires",
     "Commande en cours ",
    "Historique des commandes",
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
      ): section === "Commandes d'affaires" ?(
          <CommandesAffaires/>
      ):section ==="Commande en cours" ?(
          <Encours/>
      ) : section === "Historique des commandes" ? (
        <Historique />
      ) : section === "Deconnexion" ? (
        <Deconnexion />
      ) : section === "Supprimer le compte" ? (
        <SupprimerCompte />
      ) : null}
    </div>
  );
};

export default ProfilLivreur;
