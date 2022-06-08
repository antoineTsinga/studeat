import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import { useAppContext } from "../AppContext";
import { backend } from "../adapters/apiCalls";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { onConnect } = useAppContext();

  const [largeur, setLargeur] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  function handleLogout() {
    backend.post("logout");
  }

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <img src={Logo} alt="logo" className="logo-studeat" />
          <div className="onglets">
            <li>
              <a className="items" href="/">
                Accueil
              </a>
            </li>
            {/* <li>
              <a className="items" href="Support">
                Nous soutenir
              </a>
            </li> */}
            <li>
              <a className="items" href="About">
                A propos
              </a>
            </li>
            <li>
              <a className="items" href="Contact">
                Contact
              </a>
            </li>

            <li>
              <a className="items" href="Catalogue">
                Restaurants
              </a>
            </li>
            <li>
              {onConnect === true ? (
                <Link className="items" to="/ProfilLivreur">
                  Profil livreur
                </Link>
              ) : (
                <a className="items" href="login">
                  Se connecter
                </a>
              )}
            </li>
            <li>
              <a className="items" href="Registration">
                S'inscrire
              </a>
            </li>
            <li>
              {onConnect === true ? (
                  <Link className="items" to="/LoginDeliverer" onClick={handleLogout}>
                    Se déconnecter
                  </Link>
              ) : (
                  <a className="items" href="LoginDeliverer">
                    Se connecter livreur
                  </a>
              )}
            </li>
            <li>
              <a className="items" href="RegistrationDeliverer">
                S'inscrire livreur
              </a>
            </li>
          </div>
        </ul>
      )}
      {/* <button onClick={toggleNavSmallScreen} className="btn">
        BTN
      </button> */}
    </nav>
  );
}

export default Navbar;
