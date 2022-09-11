import React from "react";
import style from "../../styles/Review.module.css";
import ReactStars from "react-rating-stars-component";
function Review(props) {
  return (
    <div className={style.Review}>
      <div className={style.name_card}>
        <h1 className={style._h1}>{props.data.name[0]}</h1>
      </div>
      <div className={style.Review_body}>
        <h3 >{props.data.name}</h3>
        <ReactStars
          classNames="block"
          count={5}
          size={24}
          activeColor="#ffd700"
          value={props.data.rate}
        />
        <p>{props.data.content}</p>
      </div>
    </div>
  );
}

export default Review;
