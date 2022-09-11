import React from 'react'
import Review from './Review'
function Reviews(props) {
  return (
    <div>
       {props.data.map((review) => {
            return <Review data={review} />;
       })}
    </div>
  )
}

export default Reviews