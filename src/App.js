import './App.css';
import React, { useEffect } from 'react'

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
    <h2>test</h2>
  )
}

export default App;
