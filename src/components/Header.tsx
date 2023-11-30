import { NavLink } from "react-router-dom";
// import firma from "../assets/img/carmen-maroto-firma-negro.png";
import Separator from "./Separator";

const Header = (): React.JSX.Element => {
  return (
    <header className="header">
      {/* <NavLink className="header__logo" to="/">
        <img className="header__img" src={firma} alt="firma-carmen-maroto-art-img" />
      </NavLink> */}
      <p className="header__title">
        <strong>CARMEN MAROTO</strong>
      </p>
      <div className="header__sections">
        <NavLink to="/">
          <strong className="header__section">Colección</strong>
        </NavLink>
        <NavLink to="/aboutme">
          <strong className="header__section">Sobre mí</strong>
        </NavLink>
        <NavLink to="/contact">
          <strong className="header__section">Contacto</strong>
        </NavLink>
      </div>
      <Separator />
    </header>
  );
};

export default Header;
