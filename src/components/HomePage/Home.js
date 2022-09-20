import React from 'react'
import Header from '../Header'
import Leading from './Leading'
import Courses from './Courses'
import Board from './Board'
import Topics from './Topics'
import '../../styles/Home.css'
function Home() {
  const [input, setInput] = React.useState('')
  const setSearch=(e)=>{
    setInput(e.target.value);
  }
  return (
    <>
     <Header setSearch={setSearch}/>
    <Leading/>
    <div className='Home'>
    <Board/>
    <Topics/>
    <Courses input={input}/>
    </div>
    </>
  )
}

export default Home