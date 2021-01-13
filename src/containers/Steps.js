import React from 'react'
import HowItWorks from '../components/HowItWorks'
import Step from '../components/Step'


const Steps = () => {
  let test = [1, 2, 3, 4]
  return (
    <>
      <HowItWorks />
      {test.map(number => <Step num={number} />)}
    </>
  )
}

export default Steps