import React from 'react'
import GetStarted from '../components/GetStarted'
import background from '../images/photo-couch.jpg'

const Main = () => {
  return (
    <React.Fragment>
      <img src={background} />
      <GetStarted />
    </React.Fragment>
  )
}

export default Main