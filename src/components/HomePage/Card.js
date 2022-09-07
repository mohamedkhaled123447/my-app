import React from "react";
import "../../styles/Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgsrc} alt="" />
      <h5 className="card-title">{props.title}</h5>
      <span className="card-author">{props.author}</span>
      <span className="card-price">&#69;&#163;{props.price}</span>
    </div>
  );
};
export default Card;
