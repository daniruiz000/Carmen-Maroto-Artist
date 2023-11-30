import React, { Dispatch, SetStateAction } from "react";
import { picturesArray } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface ProgressBarProps {
  actualImg: number;
  actualId: number;
  setActualId: Dispatch<SetStateAction<number>>;
  setActualImg: Dispatch<SetStateAction<number>>;
  getPreviousPicture: () => void;
  getNextPicture: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ actualId, setActualImg, getPreviousPicture, getNextPicture, setActualId }) => {
  const handlePreviousClick = () => {
    getPreviousPicture();
  };

  const handleNextClick = () => {
    getNextPicture();
  };

  const handleCircleClick = (index: number) => {
    setActualId(index);
    setActualImg(0);
  };

  return (
    <div className="progress-bar">
      <FontAwesomeIcon icon={faChevronLeft} className="progress-bar__icon" onClick={handlePreviousClick} />
      <div className="progress-bar__container">
        {picturesArray.map((picture, index) => (
          <div
            key={picture.id}
            className={`progress-bar__circle ${index === actualId ? "active-circle" : ""}`}
            onClick={() => {
              handleCircleClick(index);
            }}
          ></div>
        ))}
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="progress-bar__icon" onClick={handleNextClick} />
    </div>
  );
};

export default ProgressBar;
