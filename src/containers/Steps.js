import React from 'react'
import HowItWorks from '../components/HowItWorks'
import Step from '../components/Step'


const Steps = ({ steps }) => {
  return (
    <div className='footer'>
      <HowItWorks />
      <ul>
        {steps.map(step => <Step step={step} />)}
      </ul>
    </div>
  )
}

export default Steps