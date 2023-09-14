import { NavLink } from "react-router-dom";
import tresmanchas from "../assets/img/tresmanchas.png";

const Footer = (): React.JSX.Element => {
  return (
    <footer>
      <NavLink className="footer" to="/">
        <img className="footer__img" src={tresmanchas} alt="tresmanchas.png" />
      </NavLink>
    </footer>
  );
};

export default Footer;
