import Link from 'next/link'
import React from 'react'
import SnippetModal from '../content/SnippetOpen/SnippetModal'

const UserAuth = ({ closeDrawer }:{
    closeDrawer?:any
}) => {
  return (
    <>
     <SnippetModal/>
      <div className="gap-4 flex-col sm:flex-row flex">
        <Link
          href={"/user/sign-in"}
          onClick={closeDrawer}
          className="bg-white/10 text-center hover:bg-white/20 transition-all duration-100 py-2 px-6 rounded-md font-bold text-md"
        >
          Sign in
        </Link>
        <Link
          href={"/user/sign-up"}
          onClick={closeDrawer}
          className="bg-white/10 text-center hover:bg-white/20 transition-all duration-100 py-2 px-6 rounded-md font-bold text-md"
        >
          Sign up
        </Link>
      </div>
    </>
  )
}

export default UserAuth
