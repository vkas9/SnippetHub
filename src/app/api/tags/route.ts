import { connectDB } from "@/lib/mongodb/mongodb";
import tagModal from "@/models/tag.model";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req:NextRequest){
    try {
        const {name,clerkUserId}=await req.json();
        await connectDB();
        const newTag=new tagModal({
            name,clerkUserId
        })

        const savedTag=await newTag.save();
        return NextResponse.json({
            success:true,
            data:savedTag

        },{status:201})
    } catch (error) {
        console.log("error",error);
        return NextResponse.json({
            success:false,
            message:"Something wrong while creating Tag",
            error:error
        })
        
    }
}


export async function GET(req:NextRequest){
    try {
        const userId=req.nextUrl.searchParams.get("userId");
        await connectDB();

        const tags=await tagModal.find({clerkUserId:userId});

        return  NextResponse.json({
            success:true,
            data:tags
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"Something wrong while getting tags",
            error:error
        })
        
    }
}