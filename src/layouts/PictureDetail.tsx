import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { picturesArray } from "../data/data";
import ProgressBar from "../components/ProgressBar";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PictureDetail = (): React.JSX.Element => {
  const { id } = useParams();
  const parsedId = parseInt(id as string);

  const [actualId, setActualId] = useState(parsedId);
  const [actualImg, setActualImg] = useState(0);
  const [onView, setOnView] = useState(false);

  const picture = picturesArray.find((picture) => picture.id === actualId);

  const toggleImageView = () => {
    setOnView(!onView);
  };

  const getPreviousPicture = () => {
    const newId = actualId - 1 < 0 ? picturesArray.length - 1 : actualId - 1;
    setActualImg(0);
    setActualId(newId);
  };

  const getNextPicture = () => {
    const newId = actualId + 1 >= picturesArray.length ? 0 : actualId + 1;
    setActualImg(0);
    setActualId(newId);
  };
  const getPreviousImg = () => {
    const newImg = actualImg - 1 < 0 ? picturesArray[actualId].img.length - 1 : actualImg - 1;
    setActualImg(newImg);
  };

  const getNextImg = () => {
    const newImg = actualImg + 1 >= picturesArray[actualId].img.length ? 0 : actualImg + 1;
    setActualImg(newImg);
  };

  useEffect(() => {}, [actualId]);

  return onView ? (
    <div className="pictureDetail">
      <img className="pictureDetail__imgBig" onClick={toggleImageView} src={picture?.img[actualImg]} alt={picture?.alt} />
    </div>
  ) : (
    <div className="pictureDetail">
      <div className="pictureDetail__container">
        {picturesArray[actualId].img.length > 1 ? <FontAwesomeIcon icon={faChevronLeft} className="progress-bar__icon" onClick={getPreviousImg} /> : ""}

        <img className="pictureDetail__img" onClick={toggleImageView} src={picture?.img[actualImg]} alt={picture?.alt} />
        {picturesArray[actualId].img.length > 1 ? <FontAwesomeIcon icon={faChevronRight} className="progress-bar__icon" onClick={getNextImg} /> : ""}
      </div>

      <div className="pictureDetail__container">
        <div className="pictureDetail__container-text">
          <p className="pictureDetail__title">{<strong>{picture?.title}</strong>}</p>
          <p className="pictureDetail__text">{picture?.explain}</p>
        </div>
      </div>
      <ProgressBar setActualImg={setActualImg} actualImg={actualImg} getPreviousPicture={getPreviousPicture} getNextPicture={getNextPicture} setActualId={setActualId} actualId={actualId} />
    </div>
  );
};

export default PictureDetail;
