"use client"
import SnippetSection from '@/components/content/SnippetSection/SnippetSection';
import TagsArea from '@/components/content/TagArea/tagsArea'
import { useAppSelector } from '@/lib/store/hooks';
import React from 'react'
import EmptyFavoritesMessage from './EmptyFavoritesMessage';

const page = () => {
  const { isSnippetOpen: isOpen, isMobileView,snippetData } = useAppSelector(
    

    (state) => state.quicklink
  );
  const filteredAllFavoritesSnippets = snippetData?.filter((item) => item?.isTrashed === false &&item?.isFavorite );
  return (
    <div className=" flex w-full sm:w-[calc(100vw-200px)] bg-gradient-to-br  from-[#030836]/70 to-transparent  p-2   gap-2 ">
       <div
        className={`  flex flex-col w-full h-[calc(100vh-76px)] rounded-md overflow-y-auto gap-2`}
      >
        <TagsArea />

        {
          filteredAllFavoritesSnippets?.length?
          <SnippetSection />:


          <EmptyFavoritesMessage/>
        }
        

       
      </div>
       
      
    </div>
  )
}

export default page
