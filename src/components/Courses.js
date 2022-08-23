import React from "react";
import Card from "./Card";
import "../styles/Courses.css";
const Courses = () => {
  return (
    <div className="courses">
      <Card
        imgsrc="https://img-c.udemycdn.com/course/750x422/1047846_83ef_29.jpg"
        title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
        author="BackSpace Academy"
        price="29.99"
      ></Card>
      <Card
        imgsrc="https://img-c.udemycdn.com/course/750x422/1135330_0e31_10.jpg"
        title="Part 1: AWS Certified Solutions Architect SAA C03 [Updated]"
        author="Chandra Lingam"
        price="14.99"
      ></Card>
      <Card
        imgsrc="https://img-c.udemycdn.com/course/750x422/1162310_5ee3_4.jpg"
        title="Practice Test AWS Solutions Architect Associate SAA C03"
        author="Chandra Lingam"
        price="14.99"
      ></Card>
      <Card
        imgsrc="https://img-c.udemycdn.com/course/750x422/1236626_b910_4.jpg"
        title="AWS Certified Solution Architect - Associate"
        author="Alan Rodrigues"
        price="16.99"
      ></Card>
    </div>
  );
};
export default Courses;
