"use client"
import SnippetSection from '@/components/content/SnippetSection/SnippetSection';
import TagsArea from '@/components/content/TagArea/tagsArea'
import { useAppSelector } from '@/lib/store/hooks';
import React from 'react'
import EmptyFavoritesMessage from './EmptyFavoritesMessage';
import SnippetOpen from '@/components/content/SnippetOpen/SnippetOpen';

const FavoritesPage = () => {
  const { isSnippetOpen: isOpen, isMobileView,snippetData,items } = useAppSelector(
    

    (state) => state.quicklink
  );
  
  const filteredAllFavoritesSnippets = snippetData?.filter((item) => item?.isTrashed === false &&item?.isFavorite );

  return (
    <div className=" flex w-full max-sm:flex-col sm:w-[calc(100vw-200px)] bg-gradient-to-br  from-[#030836]/70 to-transparent  p-2   gap-2 ">
       <div
        className={` ${
          isOpen ? `${isMobileView ? "w-full" : "w-[40%]"}` : "w-full"
        }  flex flex-col h-[calc(100vh-76px)] rounded-md overflow-y-auto gap-2`}
      >
        <TagsArea />

        {
          filteredAllFavoritesSnippets?.length?
          <SnippetSection />:


          <EmptyFavoritesMessage/>
        }
        

       
      </div> 
      {
        items[1]?.isSelected?
<SnippetOpen />:""


      }
      
       
      
    </div>
  )
}

export default FavoritesPage
