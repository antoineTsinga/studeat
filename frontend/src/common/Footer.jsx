import React from "react";
import Logo from "../assets/images/logo.png" ;
import './Footer.css';
export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="separe-vertical">
          <img src={Logo} alt="logo" className="logo-stud" /> 
          <div className="contact">
            <h5>CONTACT</h5>
            <p>28 rue Notre Dame des Camps, 75006, Paris, France <br></br>
            07 50 88 66 15 <br></br>
            stud.eat@genie.logiciel.fr
            </p>
          </div>
          <div className="informations">
            <h5>QUI SOMMES-NOUS ?</h5>
            <p>En savoir plus sur Stud'Eat <br></br>
              Affiliez-vous <br></br>
              Faites un don <br></br>
              Responsabilité sociale de Stud'Eat
            </p>
          </div>
          </div>
        </div>
      </footer>
  );
}
