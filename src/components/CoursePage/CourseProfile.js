import React from 'react'
import '../../styles/courseProfile.css'
function CourseProfile({data}) {
  return (
    <div className='courseProfile'>
        <img className='courseProfileImage' src={data.image} alt='Image'/>
        <div className='courseProfileInfo'>
        <h1>&#69;&#163;{data.price}</h1>
        <button className='courseProfileBtn1'>Add to cart</button>
        <button className='courseProfileBtn2'>Buy now</button>
        </div>
    </div>
  )
}

export default CourseProfile