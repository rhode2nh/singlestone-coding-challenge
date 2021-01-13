import React from 'react'
import GetStarted from '../components/GetStarted'
import background from '../images/photo-couch.jpg'

const Main = () => {
  return (
    <div className='container'>
      <img className='img1' src={background} />
      <GetStarted />
    </div>
  )
}

export default Main