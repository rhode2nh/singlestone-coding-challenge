import React from 'react'
import GetStarted from "./GetStarted";

const MainContent = () => {
  return (
    <div className='main-content'>
      <h4 className='main-content-1'>New Games & Accesories</h4>
      <h1 className='main-content-2'>Monthly packages.</h1>
      <h1 className='main-content-2'>Excitement delivered daily.</h1>
      <p className='main-content-3'>
        What's the best way to shop for the latest video games
        and peripherals? How about never shopping at all? You'll
        get new stuff on your doorstep - every month.
      </p>
      <GetStarted />
    </div>
  )
}

export default MainContent