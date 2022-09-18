import React from "react";
import Review from "./Review";
import '../../styles/Reviews.css';
import PageviewIcon from '@mui/icons-material/Pageview';
function Reviews(props) {
  return (
    <div>
      <h1>Reviews</h1>
      <div className="search-reviews">
        <input className="search" type="text" placeholder="Search reviews" />
       <img src="https://img.icons8.com/android/344/google-web-search.png" alt="search"/>
        <select className="rating">
          <option value="All ratings">All ratings</option>
          <option value="Five stars">Five stars</option>
          <option value="Four stars">Four stars</option>
          <option value="Three stars">Three stars</option>
          <option value="Two stars">Two stars</option>
          <option value="One stars">One stars</option>
        </select>
      </div>
      {props.data.map((review) => {
        return <Review data={review} />;
      })}
    </div>
  );
}

export default Reviews;
