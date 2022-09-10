import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseOverview from "./CourseOverview";
import Header from "../Header";
import ShortcutNavigation from "./ShortcutNavigation";
import WhatYouLearn from "./WhatYouLearn";
import '../../styles/CoursePage.css';
import CourseContent from "./CourseContent";
function CoursePage(props) {
  const { id } = useParams();
  return (
    <>
      <Header />
      <CourseOverview data={props.data[id]} />
        <ShortcutNavigation />
      <div className="Course-body">
        <WhatYouLearn data={props.data[id].WhatYouLearn} />
        <h1>Course content</h1>
        <CourseContent data ={props.data[id].content}/>
      </div>
    </>
  );
}

export default CoursePage;
