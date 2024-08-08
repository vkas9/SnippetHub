import Sidebar from "@/components/Sidebar/Sidebar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {


    const {userId}=auth();
  console.log("user detail",auth())
  const isAuth=!!userId;
  if(!isAuth){
    redirect("/user/sign-in")
  }
    return (

        <div className=' w-full flex  h-screen ' >
      

        <Sidebar/>
        
       
   
       {children}
        
   
       </div>
  
      
  
    );
  }