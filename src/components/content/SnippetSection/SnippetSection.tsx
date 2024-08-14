"use client";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React, { useEffect, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { SnippetType } from "@/Types/type.snippetData";
import Editor from "@monaco-editor/react";
import { FaTrashRestore } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const SnippetSection = () => {
  const {
    isSnippetOpen: isOpen,
    snippetData,
    isSnippetOpen,
    selectedSnippet,
    items,tagsClicked
  } = useAppSelector((state) => state.quicklink);

  const dispatch = useAppDispatch();
  const handleFavorite = (item: SnippetType) => {
    const updatedSnippetData:SnippetType[] = snippetData.map((snippet) => {
      if (snippet?._id === item?._id) {
        return { ...snippet, isFavorite: !snippet.isFavorite };
      }
      return snippet;
      
    });

    
    if(selectedSnippet && item?._id===selectedSnippet._id){
      const updatedSelectedSnippet={...selectedSnippet,isFavorite: !selectedSnippet?.isFavorite};
    // console.log("updatedSelectedSnippet",updatedSelectedSnippet,"selectedSnippet-->",selectedSnippet)
    dispatch(quickLinkAction.setSelectedSnippet(updatedSelectedSnippet));

    }
    

    dispatch(quickLinkAction.setSnippetData(updatedSnippetData));
  };

  const handleSnippetOpen = (item: SnippetType) => {
    dispatch(quickLinkAction.setSnippetOpen(true));
    dispatch(quickLinkAction.setSelectedSnippet(item));
  };
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }
  const [filtererdAllSnippets, setFiltererdAllSnippets] = useState(
    snippetData?.filter((item) => item?.isTrashed === false)
  );

  useEffect(() => {
    const filtererdAllSnippets = snippetData?.filter((snippet) => {
      return (
        snippet?.code.trim() !== `` ||
        snippet?.title.trim() !== ""
      );
    });
    dispatch(quickLinkAction.setSnippetData(filtererdAllSnippets));
  }, [isOpen]);

useEffect(()=>{
  if(items[0].isSelected){
    if(tagsClicked.length===1 && tagsClicked[0]==="All"){
      setFiltererdAllSnippets(snippetData.filter(snippet=>!snippet.isTrashed));
      return ;
    }
    else if(tagsClicked.length>0){
      const updatedSnippets=snippetData.filter((snippet)=>{
        return tagsClicked.every((selectedTag)=>snippet.tags.some((noteTag)=>noteTag.name===selectedTag))
  
      }).filter((snip)=>!snip.isTrashed)
      setFiltererdAllSnippets(updatedSnippets)
    }
  }

 

  if(items[1].isSelected){
    if(tagsClicked.length==1 && tagsClicked[0]==="All"){
      setFiltererdAllSnippets(snippetData.filter((snippet)=>snippet?.isFavorite &&snippet?.isTrashed===false ))
    }
    else if(tagsClicked.length>0){
      const updatedSnippets=snippetData.filter((snippet)=>{
        return tagsClicked.every((selectedTag)=>snippet.tags.some((noteTag)=>noteTag.name===selectedTag))
  
      }).filter((snip)=>snip?.isFavorite && snip.isTrashed===false)
      setFiltererdAllSnippets(updatedSnippets)
    }
  }

  if(items[2].isSelected){
    if(tagsClicked.length===1 && tagsClicked[0]==="All"){
      setFiltererdAllSnippets(snippetData.filter(snippet=>snippet.isTrashed===true));
      return ;
    }
    else if(tagsClicked.length>0){
      const updatedSnippets=snippetData.filter((snippet)=>{
        return tagsClicked.every((selectedTag)=>snippet.tags.some((noteTag)=>noteTag.name===selectedTag))
  
      }).filter((snip)=>snip.isTrashed===true)
      setFiltererdAllSnippets(updatedSnippets)
    }
  }


},[items,tagsClicked])


  useEffect(() => {
    if (items[1].isSelected) {
      setFiltererdAllSnippets(
        snippetData.filter(
          (item) => item?.isFavorite && item?.isTrashed === false
        )
      );
    } else if (items[0].isSelected) {
      setFiltererdAllSnippets(snippetData.filter((item) => !item?.isTrashed));


    }
    else if(items[2].isSelected){
      setFiltererdAllSnippets(snippetData.filter((item) => item?.isTrashed))
    }
  }, [items,snippetData]);

  
  useEffect(() => {
    if (items[1].isSelected) {
      setFiltererdAllSnippets(
        snippetData.filter(
          (item) => item?.isFavorite && item?.isTrashed === false
        )
      );
    } else if (items[2].isSelected) {
      setFiltererdAllSnippets(snippetData.filter((item) => item?.isTrashed));
    }
  }, [items,snippetData]);

  const handleTrash = (_id: string) => {
    const updatedSnippetData = snippetData.map((item) => 
      item?._id === _id ? { ...item, isTrashed: !item.isTrashed } : item
    );
    dispatch(quickLinkAction.setSnippetData(updatedSnippetData));
  
    if (selectedSnippet?._id === _id) {
      dispatch(quickLinkAction.setSnippetOpen(false));
      dispatch(quickLinkAction.setIsNewSnippet(false));
    }
  };
  
  return (
    <div className="  flex flex-wrap gap-2">
      {[...filtererdAllSnippets].reverse().map((item, index) => (
        <div
          key={item?._id}
          className={`max-sm:w-full ${
            isOpen?items[1]?.isSelected &&!selectedSnippet?.isFavorite ?"w-[320px]":"w-full"  : "w-[320px]"
          }  p-2 flex flex-col justify-between max-h-[500px]  bg-white/10 rounded-lg`}
        >
          <div>
            <div className="flex text-lg  gap-5 justify-between">
              <span
                onClick={(e) =>{
                  e.stopPropagation()
                  if(!item?.isTrashed){
                    handleSnippetOpen(item)
                  }
                }}
                className={`font-bold truncate w-full ${!item?.isTrashed?" active:text-red-500  hover:cursor-pointer sm:hover:text-red-500 ":"hover:cursor-default"} text-2xl `}
              >
                {item?.title}
              </span>
              {item.isFavorite ? (
                <FaHeart
                  className="text-red-500"
                  onClick={() => handleFavorite(item)}
                  size={25}
                />
              ) : (
                <FaRegHeart onClick={() => handleFavorite(item)} size={25} />
              )}
            </div>

            {/* date */}
            <div className="text-xs mt-2 text-white/60 ">
              <span className="">{item.createdAt}</span>
            </div>

            {/* tags list */}
            <div className="w-full flex  mt-3 rounded-md items-center p-2 overflow-x-auto h-fit">
            <Carousel className="w-full rounded-md overflow-hidden">
              <CarouselContent className="flex pl-4   gap-2">
              {item?.tags.map((tagitem, index) => (
                <CarouselItem
                  key={index}
                  className=" bg-white/10 whitespace-nowrap rounded-md px-3 text-white/60  "
                >
                  {tagitem.name}
                </CarouselItem>
              ))}
              </CarouselContent>
            </Carousel>
          </div>

{/* 
            <div className="flex mt-3 items-center truncate gap-1">
              {item?.tags.map((tagitem, index) => (
                <span
                  key={index}
                  className=" bg-white/10 rounded-md px-3 text-white/60  "
                >
                  {tagitem.name}
                </span>
              ))}
            </div> */}

            {/* code block */}

            <div className=" mt-4  bg-white/[.03] p-1    rounded-md  ">
              <p className="overflow-hidden h-full ">
                {" "}
                <Editor
                  height="200px"
                  theme="vs-dark"
                  options={{ readOnly: true, minimap: { enabled: false } }}
                  language={item?.language.title.toLowerCase()}
                  value={item?.code}
                />
              </p>
            </div>
          </div>
          {/* footer */}

          <div className="flex mt-8 items-center justify-between">
            <div className="flex text-white/20 text-sm capitalize items-center gap-1">
              <item.language.icon />
              {item?.language.title}
            </div>
            <span
              onClick={() => handleTrash(item._id)}
              className={ `${item?.isTrashed?"sm:hover:text-green-500 active:text-green-500":"sm:hover:text-red-500 active:text-red-500"}  active:bg-white/10 sm:hover:bg-white/10 p-2 rounded-full transition-all duration-100`}
            >
              {item?.isTrashed ? <FaTrashRestore className=" " /> : <FaTrash className=" " />}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SnippetSection;
