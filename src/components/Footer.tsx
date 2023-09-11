import { NavLink } from "react-router-dom";
import tresmanchas from "../assets/img/tresmanchas.png";

const Footer = (): React.JSX.Element => {
  return (
    <NavLink className="footer" to="/">
      <img className="footer__img" src={tresmanchas} alt="tresmanchas.png" />
    </NavLink>
  );
};

export default Footer;
