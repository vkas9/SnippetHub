"use client"
import { quickLinkAction } from '@/lib/store/features/quicklinkSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import React, { useEffect, useState } from 'react'
import SnippetModal from './SnippetModal';
import { SnippetType } from '@/Types/type.snippetData';
import { IoMdClose } from "react-icons/io";
const SnippetOpen = () => {
    const {isSnippetOpen,isMobileView,selectedSnippet,isNewSnippet,snippetData}= useAppSelector(state=>state.quicklink);
    const dispatch=useAppDispatch();
    const[singleSnippet,setSingleSnippet]= useState<SnippetType|null>(null);
    useEffect(()=>{
      if(isSnippetOpen && selectedSnippet){
       
          setSingleSnippet(selectedSnippet)
        
      }
    },[selectedSnippet,isSnippetOpen])

    useEffect(()=>{
      if(isNewSnippet && singleSnippet?.title!=="" ){
        dispatch(quickLinkAction.setSnippetData([...snippetData,singleSnippet]));
        dispatch(quickLinkAction.setIsNewSnippet(false))
        
      }
    },[singleSnippet])



  return (
    <div className={`${isSnippetOpen?"w-[60%]":""}  `}>
        <div className= { `${isSnippetOpen&&isMobileView?"bg-black/90 z-10 w-screen absolute top-0 left-0 h-screen":""}  `}>
        
        </div>

    <SnippetModal/>
    <div className={` p-3 rounded-lg  ${isMobileView?"absolute w-[90%] z-20 bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   ":"h-full w-full bg-white/10"}  ${isSnippetOpen?"block":"hidden"} `}>
    {
      singleSnippet&&
      <SnippetHeader singleSnippet={singleSnippet} setSingleSnippet={setSingleSnippet}/>
    }
   
     

    </div>
    </div>
  )
}

export default SnippetOpen

export const SnippetHeader=({singleSnippet,setSingleSnippet}:{singleSnippet:SnippetType,setSingleSnippet:React.Dispatch<React.SetStateAction<SnippetType|null>>})=>{
  const {snippetData,isSnippetOpen}=useAppSelector(state=>state.quicklink);
  const dispatch=useAppDispatch();
  const onUpdateTitle=(event:React.ChangeEvent<HTMLInputElement>)=>{
    const newSingleSnippet={...singleSnippet,title:event.target.value};
    setSingleSnippet(newSingleSnippet);

    const newAllSnippets=snippetData.map((item)=>{
      if(item.id===singleSnippet.id){

        return newSingleSnippet;

      }
      return item;
    })
    dispatch(quickLinkAction.setSnippetData(newAllSnippets))
  } 


return <>
<div className='flex  justify-between'>
  <input onChange={onUpdateTitle} placeholder='New Title...' value={singleSnippet.title} className='outline-none max-sm:w-full  p-2 rounded-md' />
  <div  className=' active:bg-white/10 sm:hover:bg-white/10 rounded-full p-2' onClick={()=>dispatch(quickLinkAction.setSnippetOpen(!isSnippetOpen))}>
        <IoMdClose size={25}/>
      </div>

  
</div>
</>
}
