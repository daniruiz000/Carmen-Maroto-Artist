import React from "react";
import { picturesArray } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface ProgressBarProps {
  activeIndex: number;
  getPreviousPicture: () => void;
  getNextPicture: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ activeIndex, getPreviousPicture, getNextPicture }) => {
  const handlePreviousClick = () => {
    getPreviousPicture();
  };

  const handleNextClick = () => {
    getNextPicture();
  };

  return (
    <div className="progress-bar">
      <FontAwesomeIcon icon={faChevronLeft} className="progress-bar__icon" onClick={handlePreviousClick} />
      <div className="progress-bar__container">
        {picturesArray.map((picture, index) => (
          <div key={picture.id} className={`progress-bar__circle ${index === activeIndex ? "active-circle" : ""}`}></div>
        ))}
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="progress-bar__icon" onClick={handleNextClick} />
    </div>
  );
};

export default ProgressBar;
