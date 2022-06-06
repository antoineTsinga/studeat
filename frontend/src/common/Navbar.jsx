import React, { useEffect, useState } from "react";
import './Navbar.css';
import Logo from "../assets/images/logo.png";

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  const [largeur, setLargeur] = useState(window.innerWidth);
  
  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {

    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if(window.innerWidth > 500){
        setToggleMenu(false);
      }
    }

    window.addEventListener('resize', changeWidth);
    
    return () => {
      window.removeEventListener('resize', changeWidth);
    }

  }, [])

  return (
  <nav>
    {(toggleMenu || largeur>500) && (

      <ul className="liste">
        <img src={Logo} alt="logo" className="logo-studeat" /> 
        <div className="onglets">
          <li><a className="items" href="./pages/Home">Accueil</a>
          </li>
          <li><a className="items" href="./pages/Support/Support.jsx">Nous soutenir</a>
          </li>
          <li><a className="items" href="./pages/About">A propos</a>
          </li>
          <li><a className="items" href="./pages/Contact">Contact</a>
          </li>
          <li><a className="items" href="./pages/Connexion">Se connecter</a>
          </li>
          <li><a className="items" href="./pages/Inscription">S'inscrire</a>
          </li>
        </div>
      </ul>

    )}
    <button onClick={toggleNavSmallScreen} className="btn">BTN</button>
  </nav>
  );
}

export default Navbar;