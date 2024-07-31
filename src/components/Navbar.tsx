import { ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className=" bg-blue-950 mx-auto rounded-b-xl w-full h-[60px]  font-extrabold">
    <ul className="flex justify-between items-center py-4 px-6  ">
      <div>
        <Link href={"/"}>Home</Link>
      </div>

      <div>
        <Link href={"/profile"}>Profile</Link>
      </div>
      <SignedIn>
        <ClerkLoading>
          Loading...
        </ClerkLoading>
        <UserButton/>
      </SignedIn>
      <SignedOut>

      <div className="flex items-center gap-4">
        <div>
          <Link href={"/sign-in"}>Sign In</Link>
        </div>
        <div>
          <Link href={"/sign-up"}>Sign Up</Link>
        </div>
      </div>
      </SignedOut>
    </ul>
  </div>
  )
}

export default Navbar
