import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseOverview from "./CourseOverview";
import Header from "../Header";
import ShortcutNavigation from "./ShortcutNavigation";
import WhatYouLearn from "./WhatYouLearn";
import "../../styles/CoursePage.css";
import CourseContent from "./CourseContent";
import Reviews from "./Reviews";
import CourseProfile from "./CourseProfile";
function CoursePage(props) {
  const { id } = useParams();
  return (
    <>
      <Header />
      <CourseOverview data={props.data[id-1]} />
      <ShortcutNavigation />
      <div className="Course-body">
        <WhatYouLearn data={props.data[id-1].WhatYouLearn} />
        <h1>Course content</h1>
        <CourseContent data={props.data[id-1].content} />
        <h1>Requirements</h1>
        {props.data[id-1].requirements.map((requirement) => {
          return <p>&bull; {requirement}</p>;
        })}
        <h1>Description</h1>
        <p>{props.data[id-1].description}</p>
        <Reviews data={props.data[id-1].reviews} />
        <CourseProfile data={props.data[id-1]}/>
      </div>
    </>
  );
}

export default CoursePage;
