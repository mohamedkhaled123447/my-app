import React from 'react'
import Header from '../Header'
import Leading from './Leading'
import Courses from './Courses'
import Board from './Board'
import Topics from './Topics'
import '../../styles/Home.css'
function Home() {
  return (
    <>
     <Header />
    <Leading/>
    <div className='Home'>
    <Board/>
    <Topics/>
    <Courses/>
    </div>
    </>
  )
}

export default Home