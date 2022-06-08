import React from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { backend } from "../../adapters/apiCalls";

import { useAppContext } from "../../AppContext";
import RegistrationDelivererView from "./RegistrationDelivererView";

export default function RegistrationDeliverer() {
    const { setOnConnect } = useAppContext();
    const navigate = useNavigate();

    const handleDelivererRegister = (data) => {
        /*
          Envoie login/mdp au backend et check la réponse
          Si 200 => génère un token dans le localStorage (pas bien !!)
          Sinon, renvoie une erreur console
        */

        backend
            .post("/registerDeliverer", data)
            .then(() => {
                setOnConnect(false);
                NotificationManager.success("inscription réussie");
                navigate("/loginDeliverer");
            })
            .catch((err) => {
                if (err.response.status === 422) {
                    NotificationManager.error("Tout les champs sont obligatoires");
                }
                if (err.response.status === 409) {
                    NotificationManager.error("Cet utilisateur existe déjà");
                } else {
                    NotificationManager.error("Application indisponible");
                }
                console.error(err.response);
            });
    };

    return (
        <div
            className="auth-page"
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}
        >
            <RegistrationDelivererView handleRegister={handleDelivererRegister} />
        </div>
    );
}