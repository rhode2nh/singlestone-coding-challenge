import React from 'react'
import HowItWorks from '../components/HowItWorks'
import Step from '../components/Step'


const Footer = ({ steps }) => {
  return (
    <div className='footer'>
      <HowItWorks />
      <ul>
        {steps.map(step => <Step key={step.id} step={step} />)}
      </ul>
    </div>
  )
}

export default Footer