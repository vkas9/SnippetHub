import { SignUp } from '@clerk/nextjs';
import React from 'react'

const Signup = () => {
  return (
    <div className='mx-auto mt-6'>
      <SignUp signInForceRedirectUrl={"snippets/all-snippets"} />
    </div>
  )
}

export default Signup;
