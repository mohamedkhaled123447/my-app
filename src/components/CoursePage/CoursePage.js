import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseOverview from "./CourseOverview";
import Header from "../Header";
import ShortcutNavigation from "./ShortcutNavigation";
import WhatYouLearn from "./WhatYouLearn";
import "../../styles/CoursePage.css";
import CourseContent from "./CourseContent";
import Reviews from "./Reviews";
import CourseProfile from "./CourseProfile";
import Skeleton from '@mui/material/Skeleton';
import Instructor from "./Instructor";
function CoursePage() {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
      fetch("https://api.npoint.io/efe20d19e15f0491fb25")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return (
    <>
      <Header />
      {data && (
        <div>
          <CourseOverview data={data[id - 1]} />
          <ShortcutNavigation />
          <div className="Course-body">
            <WhatYouLearn data={data[id - 1].WhatYouLearn} />
            <h1>Course content</h1>
            <CourseContent data={data[id - 1].content} />
            <h1>Requirements</h1>
            {data[id - 1].requirements.map((requirement) => {
              return <p>&bull; {requirement}</p>;
            })}
            <h1>Description</h1>
            <p>{data[id - 1].description}</p>
            <h1>Instructors</h1>
            {data[id - 1].instructor.map((instructor) => {
              return <Instructor data={instructor} />;
            })}
            <Reviews data={data[id - 1].reviews} />
            <CourseProfile data={data[id - 1]} />
          </div>
        </div>
      )}
      {!data && <Skeleton animation="pulse" fitContent height={500}/>}
    </>
  );
}

export default CoursePage;
