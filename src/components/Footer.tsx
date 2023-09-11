import React from "react";
import tresmanchas from "../assets/img/tresmanchas.png";
import { NavLink } from "react-router-dom";

const Footer = (): React.JSX.Element => {
  return (
    <NavLink className="footer" to="/">
      <img className="footer__img" src={tresmanchas} alt="tresmanchas.png" />
    </NavLink>
  );
};

export default Footer;
