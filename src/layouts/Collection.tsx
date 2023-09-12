import { useNavigate } from "react-router-dom";
import { picturesArray } from "../data/data";

const Collection = (): React.JSX.Element => {
  const navigate = useNavigate();

  const handleFunction = (id: number) => {
    if (id !== undefined) {
      navigate(`/picture-detail/${id.toString()}`);
    }
  };

  return (
    <div className="collection">
      {picturesArray.map((picture) => (
        <img
          onClick={() => {
            handleFunction(picture?.id);
          }}
          key={picture.id}
          className="collection__img"
          src={picture.img}
          alt={picture.alt}
        />
      ))}
    </div>
  );
};

export default Collection;
