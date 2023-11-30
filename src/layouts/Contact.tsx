import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"; // Importa el icono "phone"
import fotoFuckyou from "../assets/img/cuadros/DSC00067.jpg";

const Contact = (): React.JSX.Element => {
  return (
    <div className="contact">
      <img className="contact__img" src={fotoFuckyou} />
      <div className="contact__container">
        <p className="contact__text">Puedes ponerte en contacto a través de los siguientes medios:</p>
        <ul>
          <li className="contact__data">
            <FontAwesomeIcon icon={faPhone} /> 616667144
          </li>
          <li className="contact__data">
            <FontAwesomeIcon icon={faEnvelope} /> carmen0maroto@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
