"use client"

import SnippetSection from '@/components/content/SnippetSection/SnippetSection'
import TagsArea from '@/components/content/TagArea/tagsArea'
import React from 'react'

import { useAppSelector } from '@/lib/store/hooks';
import EmptyTrashMessage from './EmptyTrashMessage';
const TrashPage = () => {
  const { isSnippetOpen: isOpen, isMobileView,snippetData } = useAppSelector(
    

    (state) => state.quicklink
  );
  const filteredAllTrashedSnippets = snippetData?.filter((item) => item?.isTrashed === true);
  return (
    <div className=" flex w-full sm:w-[calc(100vw-200px)] bg-gradient-to-br  from-red-500/10 to-transparent  p-2   gap-2 ">
       <div
        className={`  flex flex-col w-full h-[calc(100vh-76px)] rounded-md overflow-y-auto gap-2`}
      >
        <TagsArea />
        {
          filteredAllTrashedSnippets?.length?
          <SnippetSection />:


          <EmptyTrashMessage/>
        }
       
      </div>
       
      
    </div>
  )
}

export default TrashPage;
