import { NavLink } from "react-router-dom";
import { picturesArray } from "../data/data";

const Collection = (): React.JSX.Element => {
  return (
    <div className="collection">
      {picturesArray.map((picture) => (
        <NavLink key={picture.id} className="footer" to={`/picture-detail/${picture?.id.toString()}`}>
          <img className="collection__img" src={picture.img} alt={picture.alt} />
        </NavLink>
      ))}
    </div>
  );
};

export default Collection;
