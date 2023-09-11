import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"; // Importa el icono "phone"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__img">
        <img></img>
      </div>
      <div className="contact__container">
        <h1 className="contact__title">Contact</h1>
        <p className="contact__text">Puedes ponerte en contacto a través de los siguientes medios:</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            Teléfono:
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            Correo electrónico
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
