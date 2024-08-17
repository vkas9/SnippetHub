"use client";
import React, { useEffect, useState } from "react";
import TagsArea from "./TagArea/tagsArea";
import SnippetSection from "./SnippetSection/SnippetSection";
import SnippetOpen from "./SnippetOpen/SnippetOpen";
import { useAppSelector } from "@/lib/store/hooks";
import EmptySnippetsMessage from "@/app/snippets/all-snippets/EmptySnippetsMessage";
import { Skeleton } from "../ui/skeleton";

const SnippetArea = () => {
  const { isSnippetOpen: isOpen,items,selectedSnippet, isMobileView,snippetData,tagsClicked,loadingSnippets } = useAppSelector(
    (state) => state.quicklink
  );

  const [filteredAllSnippets, setFilteredAllSnippets] = useState(
    snippetData?.filter((item) => item?.isTrashed === false)
  );



useEffect(()=>{

  if(items[0].isSelected){
    if(tagsClicked.length===1 && tagsClicked[0]==="All"){
      setFilteredAllSnippets(snippetData.filter(snippet=>!snippet.isTrashed));
      return ;
    }
  }

  if(tagsClicked.length>0){
    const updatedSnippets=snippetData
    .filter((snippet)=>{
      return tagsClicked.every((selectedTag)=>snippet.tags.some((noteTag)=>noteTag.name===selectedTag))

    })
    .filter((snip)=>!snip.isTrashed)
    setFilteredAllSnippets(updatedSnippets)
  }
},[items,tagsClicked,snippetData])







  return (
    <div className={` flex w-full max-sm:flex-col sm:w-[calc(100vw-200px)] bg-gradient-to-br  from-[#030836]/70 to-transparent pl-2 pt-2 pb-2 ${isOpen?"pr-2":""}  gap-2 `}>
      <div
        className={`${
          isOpen ? `${isMobileView ? "w-full" : "w-[40%]"}` : "w-full"
        }  flex flex-col h-[calc(100vh-76px)] rounded-md overflow-y-auto gap-2`}
      >
        <TagsArea />







        {loadingSnippets ?(
          <div className="flex flex-wrap gap-2">
          
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className={`max-sm:w-full ${
                  isOpen ? (items[1]?.isSelected && !selectedSnippet?.isFavorite ? "min-w-[320px]" : "w-full") : "w-[320px]"
                } flex flex-col justify-between min-h-[420px] rounded-lg`}
              />
            ))}
          </div>
        ):filteredAllSnippets?.length&& filteredAllSnippets?.length ? (
      
          <SnippetSection />
        ) : (
          
          <EmptySnippetsMessage/>
        )}




       
      </div>

      <SnippetOpen />
    </div>
  );
};

export default SnippetArea;
