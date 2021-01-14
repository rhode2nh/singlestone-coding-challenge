import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import MainBackground from './containers/MainBackground'
import Steps from './containers/Steps'
import './App.css'
import MainContent from "./components/MainContent";

const App = () => {
  const [steps, setSteps] = useState([])

  useEffect(() => {
    fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
      .then(resp => resp.json())
      .then(data => sanitizeData(data))
      .catch(error => console.log(error))
  }, [])

  const sanitizeData = (steps) => {
    let sanitizedSteps = steps.map(step => {
      const stepContent = step.versionContent.reduce((prev, cur) => (prev.effectiveDate > cur.effectiveDate) ? prev : cur)
      return {
        body: stepContent.body,
        title: stepContent.title,
        stepNumber: step.stepNumber
      }
    })

    const orderedSteps = sanitizedSteps.sort(function(a, b) {
      if (a.stepNumber < b.stepNumber)
        return -1
      if (a.stepNumber > b.stepNumber)
        return 1
      else
        return 0
    })

    setSteps(orderedSteps)
  }

  return (
    <div className='layout background-color'>
      <Header />
      <MainBackground />
      <MainContent />
      <Steps steps={steps}/>
    </div>
  )
}

export default App;
