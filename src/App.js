import React, { useEffect } from 'react'
import Header from './components/Header'
import Main from './containers/Main'
import Steps from './containers/Steps'

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
    <React.Fragment>
      <Header />
      <Main />
      <Steps />
    </React.Fragment>
  )
}

export default App;
