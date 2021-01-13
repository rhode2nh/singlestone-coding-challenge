import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './containers/Main'
import Steps from './containers/Steps'

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
    <React.Fragment>
      <Header />
      <Main />
      <Steps steps={steps}/>
    </React.Fragment>
  )
}

export default App;
