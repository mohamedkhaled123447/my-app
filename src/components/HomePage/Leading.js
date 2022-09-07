import React from 'react'
import img from '../../assets/img1.png'
import '../../styles/Leading.css'
function Leading() {
  return (
    <>
    <div className="leading-section-par">
        <div className="leading-section-child">
          <h1>New to Udemy? Lucky you</h1>
          <p>
            Courses start at E$169.99. Get your new student offer before it
            expires
          </p>
        </div>
        <div>
          <img className="leading-section-image" src={img} alt="img1" />
        </div>
      </div>
    </>
  )
}

export default Leading