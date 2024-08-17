import { Schema,models,model } from "mongoose";


const tagSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    clerkUserId:{
        type:String,
        required:true
    }
},{timestamps:true})

const tagModal=models?.SnippetTag || model("SnippetTag",tagSchema);
export default tagModal;