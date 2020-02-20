import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CardList;
