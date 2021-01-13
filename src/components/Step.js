import React from 'react'
const Step = ({ step }) => {
  return (
    <li>
      <div className='number'>
        <h1>0{step.stepNumber}</h1>
        <div className='rectangle'></div>
      </div>
      <h2>{step.title}</h2>
      <h3 className='body'>{step.body}</h3>
    </li>
  )
}

export default Step