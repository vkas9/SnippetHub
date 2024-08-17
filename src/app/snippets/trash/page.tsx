"use client"

import SnippetSection from '@/components/content/SnippetSection/SnippetSection'
import TagsArea from '@/components/content/TagArea/tagsArea'
import React from 'react'

import { useAppSelector } from '@/lib/store/hooks';
import EmptyTrashMessage from './EmptyTrashMessage';
import { Skeleton } from '@/components/ui/skeleton';
const TrashPage = () => {
  const { isSnippetOpen: isOpen,items,loadingSnippets,selectedSnippet, isMobileView,snippetData } = useAppSelector(
    

    (state) => state.quicklink
  );
  const filteredAllTrashedSnippets = snippetData?.filter((item) => item?.isTrashed === true);
  return (
    <div className=" flex w-full max-sm:flex-col sm:w-[calc(100vw-200px)] bg-gradient-to-br  from-red-500/10 to-transparent  p-2   gap-2 ">
       <div
        className={`  flex flex-col w-full h-[calc(100vh-76px)] rounded-md overflow-y-auto gap-2`}
      >
        <TagsArea />
        {
          loadingSnippets ?(
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
          ):
          filteredAllTrashedSnippets?.length?
          <SnippetSection />:


          <EmptyTrashMessage/>
        }
       
      </div>
       
      
    </div>
  )
}

export default TrashPage;
