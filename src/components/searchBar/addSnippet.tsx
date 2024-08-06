"use client"
import { quickLinkAction } from '@/lib/store/features/quicklinkSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import React from 'react'
import { IoAddSharp } from "react-icons/io5";

const AddSnippet = () => {
  const{snippetData,isSnippetOpen}= useAppSelector(state=>state.quicklink);
 const dispatch= useAppDispatch()
  const handleAddSnippet=()=>{
    const newSingleSnippet={
      id:String(snippetData.length+1),
      title:"",
    isFavorite:false,
    tags:[],
    description:"",
    code:"",
    language:"",
    createdAt:String(new Date())

    }
    dispatch(quickLinkAction.setIsNewSnippet(true))
    // dispatch(quickLinkAction.setSnippetData([...snippetData,newSingleSnippet]));
    dispatch(quickLinkAction.setSnippetOpen(true));
    dispatch(quickLinkAction.setSelectedSnippet(newSingleSnippet));


    

  }
  return (
    <div onClick={()=>{if(!isSnippetOpen)handleAddSnippet()}}  className={` h-full px-2 gap-1 md:gap-2 absolute right-0 transition-all duration-100 top-0 ${!isSnippetOpen?"hover:cursor-pointer hover:bg-white/20":"cursor-not-allowed"}  rounded-full flex items-center justify-center bg-white/10 `}>
        <IoAddSharp size={23}/>
      <span className='hidden sm:flex'>Snippet</span>
    </div>
  )
}

export default AddSnippet
