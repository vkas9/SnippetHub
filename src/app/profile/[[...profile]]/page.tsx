
import { UserProfile, useUser } from "@clerk/nextjs"
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile(){

  
    const {userId}=auth()
    const user=await currentUser()
    const isAuth=!!userId;
   
    // if (!user?.isLoaded || !user?.isSignedIn) {
    //     return <h1>Hello nothing</h1>;
    //   }
    
      return <div className=" flex items-center justify-center font-bold text-3xl h-screen"><UserProfile/></div>;

}