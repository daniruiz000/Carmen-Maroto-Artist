import React from "react";
import { NavLink } from "react-router-dom";
import firma from "../assets/img/carmen-maroto-firma-negro.png";
import Separator from "./Separator";

const Header = (): React.JSX.Element => {
  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" src={firma} alt="firma-carmen-maroto-art-img" />
      </NavLink>
      <div className="header__sections">
        <NavLink to="/">
          <p className="header__section">Colección</p>
        </NavLink>
        <NavLink to="/aboutme">
          <p className="header__section">Sobre mí</p>
        </NavLink>
        <NavLink to="/contact">
          <p className="header__section">Contacto</p>
        </NavLink>
      </div>
      <Separator />
    </div>
  );
};

export default Header;
