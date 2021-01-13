import React from 'react'

const Step = ({ step }) => {
  return (
    <React.Fragment>
      <p>{step.stepNumber}</p>
      <h1>{step.title}</h1>
      <h2>{step.body}</h2>
    </React.Fragment>
  )
}

export default Step