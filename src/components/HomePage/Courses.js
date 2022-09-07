import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import Card from "./Card";
import "../../styles/Courses.css";
import Description from "./Description";
const Courses = () => {
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);
  const getData = () => {
    fetch("https://api.npoint.io/97bb9e30f0333a87eb67")
      .then((response) => response.json())
      .then((json) => setData(json));
    fetch("https://api.npoint.io/89f024141392bdbe562f")
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0]);
        setArr(json);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="courses">
      <Description/>
      <Carousel responsiveLayout={arr}>
        {data.map((item) => (
          <Carousel.Item key={item.image}>
            <Card
              key={item.image}
              imgsrc={item.image}
              title={item.title}
              author={item.instructors["name"]}
              price={item.price}
            ></Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default Courses;
