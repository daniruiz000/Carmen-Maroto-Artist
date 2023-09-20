import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { picturesArray } from "../data/data";
import ProgressBar from "../components/ProgressBar";

const PictureDetail = (): React.JSX.Element => {
  const { id } = useParams();
  const parsedId = parseInt(id as string);

  const [actualId, setActualId] = useState(parsedId);
  const [onView, setOnView] = useState(false);

  const picture = picturesArray.find((picture) => picture.id === actualId);

  const toggleImageView = () => {
    setOnView(!onView);
  };

  const getPreviousPicture = () => {
    let newId = actualId - 1;
    if (newId < 0) {
      newId = picturesArray.length - 1;
    }
    setActualId(newId);
  };

  const getNextPicture = () => {
    let newId = actualId + 1;
    if (newId >= picturesArray.length) {
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
        <div className="pictureDetail__container-text">
          <p className="pictureDetail__title">{picture?.title}</p>
          <p className="pictureDetail__text">{picture?.explain}</p>
        </div>
      </div>
      <ProgressBar getPreviousPicture={getPreviousPicture} getNextPicture={getNextPicture} activeIndex={actualId} />
    </div>
  );
};

export default PictureDetail;
