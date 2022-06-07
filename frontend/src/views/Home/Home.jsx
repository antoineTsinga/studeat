import React from "react";
import "./Home.css";
import SpacingGrid from "./SpacingGrig";
import RecipeReviewCard from "./../../common/RecipeReviewCard";
import delivery from "../../assets/images/delivery.png";
import job from "../../assets/images/job.png";
import restaurent from "../../assets/images/restaurent.png";
import student from "../../assets/images/student.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="mt-5"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>TOUS ENSEMBLE POUR LUTTER CONTRE LA PRÉCARITÉ ÉTUDIANTE</h2>
      <div className="" style={{ paddingLeft: "80px" }}>
        <SpacingGrid
          position="relative"
          style={{
            width: "300",
            height: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
          }}
          spacing={10}
          nbrchild={[
            <RecipeReviewCard
              nav={() => {
                navigate("/");
              }}
              title={"Livraison"}
              subheader={
                "Aidez les etudiants en situation de handicape en faisant faites des livraisons"
              }
              alt="chemise femme pagne"
              image={delivery}
            />,
            <RecipeReviewCard
              title={"Restaurateur"}
              nav={() => {
                navigate("/");
              }}
              subheader={
                "Venez en aide aux étudiants défavorisés en tant que restaurateur"
              }
              alt="Restaurateur"
              image={restaurent}
            />,
            <RecipeReviewCard
              title={"Etudiant"}
              nav={() => {
                navigate("/Catalogue");
              }}
              subheader={
                "récupérer des paniers alimentaire au près des restaurateurs"
              }
              alt="Etudiant"
              image={student}
            />,
            <RecipeReviewCard
              title={"Offre d'emplois"}
              nav={() => {
                navigate("/");
              }}
              subheader={
                "Trouver un poste dans un des restaurants de la platforme web"
              }
              alt="Offre d'emplois"
              image={job}
            />,
          ]}
        />
      </div>
    </div>
  );
}
