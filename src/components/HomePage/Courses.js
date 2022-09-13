import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import Card from "./Card";
import "../../styles/Courses.css";
import Description from "./Description";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
const Courses = () => {
  const [data, setData] = useState(null);
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.npoint.io/97bb9e30f0333a87eb67")
      .then((response) => response.json())
      .then((json) => setData(json));
    fetch("https://api.npoint.io/89f024141392bdbe562f")
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0]);
        setArr(json);
      });
  }, []);
  return (
    <div className="courses">
      <Description />
      {data && (
        <Carousel responsiveLayout={arr}>
          {data.map((item) => (
            <Carousel.Item key={item.image}>
              <Link to={`/CoursePage/${item.id}`}>
                <Card
                  key={item.image}
                  imgsrc={item.image}
                  title={item.title}
                  author={item.instructors["name"]}
                  price={item.price}
                ></Card>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      {!data && <Skeleton fitContent height={300} />}
    </div>
  );
};
export default Courses;
