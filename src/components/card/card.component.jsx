import React from "react";
import "./card.styles.css";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <img src={data.imgUrl} alt={data.name} />
      <h2>{data.name}</h2>
      <p>{data.email}</p>
    </div>
  );
};

export default Card;
