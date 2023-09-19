import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { picturesArray } from "../data/data";

const PictureDetail = (): React.JSX.Element => {
  const { id } = useParams();

  const parsedId = parseInt(id as string);
  const [actualId, setActualId] = useState(parsedId);
  const picture = picturesArray.find((picture) => picture.id === actualId);

  const [onView, setOnView] = useState(false);

  const toggleImageView = () => {
    setOnView(!onView);
  };

  const getPreviousPicture = () => {
    let newId = actualId - 1;
    if (newId < 0) {
      // Si estamos en la primera imagen, ir a la última
      newId = picturesArray.length - 1;
    }
    setActualId(newId);
  };

  const getNextPicture = () => {
    let newId = actualId + 1;
    if (newId >= picturesArray.length) {
      // Si estamos en la última imagen, ir a la primera
      newId = 0;
    }
    setActualId(newId);
  };

  useEffect(() => {}, [actualId]);

  return onView ? (
    <div className="pictureDetail">
      <img className="pictureDetail__imgBig" onClick={toggleImageView} src={picture?.img} alt={picture?.alt} />
    </div>
  ) : (
    <div className="pictureDetail">
      <img className="pictureDetail__img" onClick={toggleImageView} src={picture?.img} alt={picture?.alt} />
      <div className="pictureDetail__container">
        <FontAwesomeIcon icon={faChevronLeft} className="pictureDetail__icon" onClick={getPreviousPicture} />
        <div className="pictureDetail__container-text">
          <p className="pictureDetail__title">{picture?.title}</p>
          <p className="pictureDetail__text">{picture?.explain}</p>
        </div>
        <FontAwesomeIcon icon={faChevronRight} className="pictureDetail__icon" onClick={getNextPicture} />
      </div>
    </div>
  );
};

export default PictureDetail;
