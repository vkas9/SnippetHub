"use  client"
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import axios from "axios";

const addNewTagFunction=async(tagName:string,dispatch:any,isAddTagOpen:boolean,ClerkUserId:string)=>{
 

    try {

        const response=await axios.post(`/api/tags`,{name:tagName,clerkUserId:ClerkUserId});
        console.log("response",response.data)
        const addedTag={
            _id:response.data.data._id,
            tagName:response.data.data.name,
            clerkUserId:response.data.data.clerkUserId
        }
        dispatch(quickLinkAction.setAllTag(addedTag));
        dispatch(quickLinkAction.setAddTagOpen(!isAddTagOpen));
       
        
    } catch (error) {
        console.log("error",error)
        
    }




}
export default addNewTagFunction


