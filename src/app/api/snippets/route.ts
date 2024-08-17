import { connectDB } from "@/lib/mongodb/mongodb";
import SnippetModal from "@/models/snippet.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const datawe=await req.json();
    const { title, isFavorite, clerkUserId, tags, code, language, isTrashed } =datawe;
    await connectDB();
   
    const newSnippet = new SnippetModal({
      title,
      isFavorite,
      clerkUserId,
      tags,
      code,
      language,
      isTrashed,
    });

    const savedSnippet=await newSnippet.save();


    return NextResponse.json({
        success:true,
        message:"New Snippet Successfully Created",
        data:savedSnippet
    },{ status:201 })

  } catch (error) {

    console.log(error);
    return NextResponse.json({
        success:false,
        message:"Something wrong whilte creating Snippet",
        error:error
    })
  }
}



export async function PUT(req:NextRequest){
 try {
   const snippetId=req.nextUrl.searchParams.get("snippetId");
   await connectDB();
   if (!snippetId) {
    return NextResponse.json({
      success: false,
      error: 'Snippet ID is required'
    }, { status: 400 });
  }
   const { title, isFavorite, tags, code, language, isTrashed } =await req.json();

 const update={
   $set:{
     title:title,
     code:code,
     tags:tags,
     language:language,
     isTrashed:isTrashed,
     isFavorite:isFavorite,
   }
 }
 
 const updatedSnippet=await SnippetModal.findByIdAndUpdate({_id:snippetId},update,{new :true});

 if (!updatedSnippet) {
  return NextResponse.json({
    success: false,
    error: 'Snippet not found'
  }, { status: 404 });
}
 console.log("updatedSnippet->",updatedSnippet)
 return NextResponse.json({
   success:true,
   data:updatedSnippet
 },{status:201})
 } catch (error) {
  console.log("error->",error);
  return NextResponse.json({
    success: false,
    error: 'Internal Server Error'
  }, { status: 500 });
  
 }

  

}


export async function GET(req:NextRequest){
    try {

        const clerkId=req.nextUrl.searchParams.get("clerkId");
        await connectDB();
        const allSnippets=await SnippetModal.find({clerkUserId:clerkId}).populate("tags").populate("language")
        return NextResponse.json({
            success:true,
            allsnippets:allSnippets
        })
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            error:error,
            message:"Something went wrong while getting all snippets"
        },{status:400})
        
    }
}