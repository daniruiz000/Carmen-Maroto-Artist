import { useParams } from "react-router-dom";
import { picturesArray } from "../data/data";

const PictureDetail = (): React.JSX.Element => {
  const { id } = useParams();
  const picture = picturesArray.find((pic) => pic.id.toString() === id);

  if (!picture) {
    return <div>Imagen no encontrada</div>;
  }

  return (
    <div className="pictureDetail">
      <img className="pictureDetail__img" src={picture.img} alt={picture.alt} />
      <p className="pictureDetail__title">{picture.title}</p>
      <p className="pictureDetail__text">{picture.explain}</p>
    </div>
  );
};
export default PictureDetail;
