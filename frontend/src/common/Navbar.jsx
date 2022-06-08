import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import { useAppContext } from "../AppContext";
import { backend } from "../adapters/apiCalls";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { onConnect, userData } = useAppContext();

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

  useEffect(() => {}, [userData]);
  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <img src={Logo} alt="logo" className="logo-studeat" />

          {userData.isAdmin ? (
            <div className="onglets">
              <li>
                <a className="items" href="/">
                  Accueil
                </a>
              </li>
              <li>
                <a className="items" href="/admin">
                  admin
                </a>
              </li>
              {onConnect === true ? (
                <Link className="items" to="/login" onClick={handleLogout}>
                  Se déconnecter
                </Link>
              ) : (
                <a className="items" href="/login">
                  Se connecter
                </a>
              )}
            </div>
          ) : (
            <div className="onglets">
              <li>
                <a className="items" href="/">
                  Accueil
                </a>
              </li>
              <li>
                <a className="items" href="Support">
                  Nous soutenir
                </a>
              </li>
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
                  <Link className="items" to="/login" onClick={handleLogout}>
                    Se déconnecter
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
                <a className="items" href="panier">
                  <BsCart2 />
                </a>
              </li>
              <li>
                <a className="items" href="profil">
                  <CgProfile size={50} />
                </a>
              </li>
            </div>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
