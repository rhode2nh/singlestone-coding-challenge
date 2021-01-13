import React from 'react'
import HowItWorks from '../components/HowItWorks'
import Step from '../components/Step'


const Steps = ({ steps }) => {
  return (
    <>
      <HowItWorks />
      {steps.map(step => <Step step={step} />)}
    </>
  )
}

export default Steps