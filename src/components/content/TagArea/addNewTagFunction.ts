"use  client"
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"

const addNewTagFunction=(tagName:string,dispatch:any,isAddTagOpen:boolean,ClerkUserId:string)=>{
 

 dispatch(quickLinkAction.setAllTag({
    ClerkUserId:ClerkUserId,
     tagName:tagName.trim().toLowerCase()

 }));
 dispatch(quickLinkAction.setAddTagOpen(!isAddTagOpen));




}
export default addNewTagFunction


