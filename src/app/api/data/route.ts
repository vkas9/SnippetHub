import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(){

    const {userId}=auth();
    const user=await currentUser();
    if(!userId){
        return  NextResponse.json({
            message:"Not Authneticated",

        },{status:401})
    }
    return NextResponse.json({
        message:"Authenticated",
        data:{userId:userId,userName:user?.fullName}
    },{status:200})
}