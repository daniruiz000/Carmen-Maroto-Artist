import React from "react";
import "../styles/components/Header.scss";
import { NavLink } from "react-router-dom";

const Header = (): React.JSX.Element => {
  return (
    <div className="header">
      <NavLink className="header__links-link" to="/">
        <p className="header__title">Carmen Maroto Sanz</p>
      </NavLink>
      <div className="header__sections">
        <NavLink className="header__links-link" to="/collection">
          <p className="header__section">Colección</p>
        </NavLink>
        <NavLink className="header__links-link" to="/aboutme">
          <p className="header__section">Sobre mí</p>
        </NavLink>
        <NavLink className="header__links-link" to="/contact">
          <p className="header__section">Contacto</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
