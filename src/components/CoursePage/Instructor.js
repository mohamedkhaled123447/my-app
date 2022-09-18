import React from "react";
import { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../styles/instructor.css";
function Instructor(props) {
  const { data } = props;
  return (
    <div className="instructor">
      <h2>{data.name}</h2>
      <p>{data.Intro}</p>
      <div className="instructor-container">
        <img src={data.Image} alt="instructor" />
        <div className="instructor-info">
          <div className="line">
            <StarIcon className="icon" />
            {data.Rating} Instructor Rating
          </div>
          <div className="line">
            <VisibilityIcon className="icon" />
            {data.reviewsNumber}Reviews
          </div>
          <div className="line">
            <GroupIcon className="icon" />
            {data.studentsNumber}Students
          </div>
          <div className="line">
            <PlayCircleFilledIcon className="icon" />
            {data.coursesNumber}Courses
          </div>
        </div>
      </div>
      {data.description.map((item, index) => {
        return (
          <p key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default Instructor;
