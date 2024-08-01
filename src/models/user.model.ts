

import { Schema,models,model } from "mongoose";

const userSchema=new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String, 
        required:true
    },
    firstName:{
        type:String

    },
    lastName:{
        type:String
    },
    avatar:{
        type:String
    }
},{timestamps:true})

const User=models?.User || model("User",userSchema);
export default User;