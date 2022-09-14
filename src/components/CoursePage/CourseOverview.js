import React from "react";
import { useEffect } from "react";
import "../../styles/CourseOverview.css";
import ReactStars from "react-rating-stars-component";
function CourseOverview(props) {
  return (
    <div className="CourseOverviewContainer">
    <div className="CourseOverview">
      <img src={props.data.image} alt="course" />
      <h1>{props.data.title}</h1>
      <h3>{props.data.Introduction}</h3>
      <div className="CourseOverview__rating">
      <span>{props.data.rate}</span>
      <ReactStars classNames="block"
        count={5}
        size={24}
        activeColor="#ffd700"
        value={props.data.rate}
      />
      <span>({props.data.ratingCount})</span>
      <span>{props.data.enrollCount} students</span>
      </div>
      <div>
        <span>Created by </span>
        {props.data.instructor.map((instructor) => (
            <span>{instructor.name},</span>
        ))}
      </div>
      <div>
        <span>last Updated {props.data.lastUpdate} {props.data.globe} {props.data.Captioning}</span>
      </div>
    </div>
    </div>
  );
}

export default CourseOverview;
