import { Schema,models,model, } from "mongoose";

const languageSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    },
    isSelected:{
        type:Boolean,
        required:true
    }

},{
    timestamps:true
})

const languageModal=models?.Language|| model("Language",languageSchema)
export default languageModal;