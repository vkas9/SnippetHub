import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Signin = () => {
  return (
    <div className='mx-auto mt-6'>
      <SignIn/>
    </div>
  )
}

export default Signin
