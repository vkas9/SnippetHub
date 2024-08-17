import { Schema,models,model, } from "mongoose";
import tagModal from "./tag.model";
import languageModal from "./language.model";


const snippetSchema=new Schema({

    clerkUserId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    code:{
        type:String,
       
    },
    language:{
        type:Schema.Types.ObjectId,
        ref:languageModal,
        required:true
        
    },
    tags:[{
        type:Schema.Types.ObjectId,
        ref:tagModal,
        required:true,
        default:[]
    }],
    isTrashed:{
        type:Boolean,
        required:true,
        default:false
    },
    isFavorite:{
        type:Boolean,
        required:true,
        default:false
    },

},{
    timestamps:true
})



const SnippetModal=models?.Snippet || model("Snippet",snippetSchema);
export default SnippetModal;