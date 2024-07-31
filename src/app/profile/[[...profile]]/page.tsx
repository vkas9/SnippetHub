"use client"
import { UserProfile, useUser } from "@clerk/nextjs"


export default function Profile(){

  
 const user=useUser()
 console.log("user-s",user)
   
    
      return <div className=" flex items-center justify-center font-bold text-3xl h-screen"><UserProfile/></div>;

}