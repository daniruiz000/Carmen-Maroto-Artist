import fotoSobreMi from "../assets/img/cuadros/fotoSobreMi.jpg";
import fotopie from "../assets/img/cuadros/DSC00081.jpg";
const AboutMe = (): React.JSX.Element => {
  return (
    <div className="aboutMe">
      <p className="aboutMe__title">¡Entusiastas del arte abstracto!</p>

      <div className="aboutMe__div">
        <p className="aboutMe__text">Mi viaje artístico comenzó con la asistencia a talleres locales, donde asimilé los conocimientos fundamentales. A lo largo de estos años he ido explorando de manera autodidacta, sumergiéndome en la lectura de libros y la observación de videos creados por expertos en la materia para perfeccionar mis técnicas de pintura.</p>
        <img src={fotoSobreMi} className="aboutMe__img" />
      </div>
      <div className="aboutMe__div">
        <p className="aboutMe__text">En este espacio virtual, comparto con vosotros una selección de mis obras. Espero sinceramente que disfruteis de estas creaciones tanto como yo he disfrutado al darles vida. ¡Bienvenidos a mi mundo creativo!</p>
        <img src={fotopie} className="aboutMe__img" />
      </div>
    </div>
  );
};

export default AboutMe;
