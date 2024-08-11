"use client";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import AddTagModal from "./AddTagModal";


const TagsArea = () => {
  const { AllTags,isAddTagOpen,snippetData,items,tagsClicked } = useAppSelector(state => state.quicklink);
  const dispatch=useAppDispatch()
  const [tagsSelected,setTagsSelected]=useState<boolean[]>([]);


  useEffect(()=>{
    if(AllTags){
      const newTagsSelected=Array(AllTags.length).fill(false);
      newTagsSelected[0]=true;
      setTagsSelected(newTagsSelected);
    }
  },[AllTags])


  useEffect(()=>{
const newTagsSelected=Array(AllTags.length).fill(false);
const newTagsClicked=['All'];
newTagsSelected[0]=true;
dispatch(quickLinkAction.setTagsClicked(newTagsClicked));
setTagsSelected(newTagsSelected);
  },[items])


  useEffect(() => {
    // Compute the new array of tags
    const newTagsClicked = AllTags
        .filter((tag, index) => tagsSelected[index])
        .map(tag => tag.name);

    // Remove tags that are no longer selected
    const updatedTags = tagsClicked.filter(tag =>
      AllTags.some(t => t.name === tag && tagsSelected[AllTags.indexOf(t)])
    );

    // Add newly selected tags
    const finalTagsClicked = [
        ...updatedTags,
        ...newTagsClicked.filter(tag => !tagsClicked.includes(tag)),
    ];

    // Dispatch the updated tags array
    dispatch(quickLinkAction.setTagsClicked(finalTagsClicked));
}, [tagsSelected]);


  const handleTagClick=(index:number)=>{
    const newTagsSelected=[...tagsSelected];
    if(index===0){
      newTagsSelected[0]=true;
      for(let index=1;index<newTagsSelected.length;index++){
        newTagsSelected[index]=false;
      }
      setTagsSelected(newTagsSelected)
      
    }
    else{
      newTagsSelected[0]=false;
      newTagsSelected[index]=!newTagsSelected[index];
      setTagsSelected(newTagsSelected);

    }

    if(newTagsSelected.every((tag)=>!tag)){
      newTagsSelected[0]=true;
      setTagsSelected(newTagsSelected);
    }




  }

  return (
    <div className="flex items-center w-full gap-3 bg-white/10 rounded-xl">
      <div className="w-full flex rounded-xl items-center p-2 overflow-x-auto h-fit">
        <Carousel className="w-full rounded-lg overflow-hidden">
          <CarouselContent className="flex pl-4   gap-2">
            {AllTags.map((item,index) => (
              <CarouselItem
                onClick={()=>handleTagClick(index)}
                key={item._id}
                className={`px-2 ${tagsSelected[index]?"bg-white text-black ":"hover:bg-white/20"} hover:cursor-pointer py-1 whitespace-nowrap   rounded-lg   `}
              >
                {item.name}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <button onClick={()=>dispatch(quickLinkAction.setAddTagOpen(!isAddTagOpen))} className="whitespace-nowrap font-extrabold bg-white/10 py-1 px-3 active:bg-white/20 sm:hover:bg-white/20 rounded-lg">
        Add Tag
      </button>
      <AddTagModal/>
    </div>
  );
};

export default TagsArea;
