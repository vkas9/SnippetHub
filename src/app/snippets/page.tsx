
import SnippetArea from '@/components/content/snippetArea';
import Sidebar from '@/components/Sidebar/Sidebar'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
  const {userId}=auth();
  console.log("user detail",auth())
  const isAuth=!!userId;
  if(!isAuth){
    redirect("/user/sign-in")
  }
  return (
    <div className=' w-full flex  h-screen ' >
     <Sidebar/>
     <SnippetArea/>

    </div>
  )
}

export default page
