import React, { useEffect } from 'react'
import Header from './components/Header'

const App = () => {
  useEffect(() => {
    fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
      .then(resp => resp.json())
      .then(data => sanitizeData(data))
      .catch(error => console.log(error))
  }, [])

  const sanitizeData = (steps) => {
    console.log(steps)
  }

  return (
    <Header />
  )
}

export default App;
