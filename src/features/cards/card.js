import React from "react";
import "./card.css";

const Card = ({ heading, figures, icon, color }) => {
  return (
    <div>
      <div className="card__container">
        <div className="card__content">
          <div className="card__text">
            <p className="card__text1">{heading}</p>
            <p className="card__text2">{figures}</p>
          </div>
          <div className="card__icon" style={{ backgroundColor: color }}>
            {icon}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
