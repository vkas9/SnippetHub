"use client";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React, { useEffect, useRef, useState } from "react";
import SnippetModal from "./SnippetModal";
import { languageType, SnippetType, tagType } from "@/Types/type.snippetData";
import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { Editor } from "@monaco-editor/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { languages } from "@/constants/languages";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const SnippetOpen = () => {
  const {
    isSnippetOpen,
    isMobileView,
    selectedSnippet,
    isNewSnippet,
    snippetData,
  } = useAppSelector((state) => state.quicklink);
  const dispatch = useAppDispatch();
  const [singleSnippet, setSingleSnippet] = useState<SnippetType | null>(null);

  useEffect(() => {
    if (isSnippetOpen && selectedSnippet) {

      setSingleSnippet(selectedSnippet);
    }
  }, [selectedSnippet, isSnippetOpen]);

  useEffect(() => {
    if (isNewSnippet &&singleSnippet&& singleSnippet?.title?.trim() !== "") {
   
      dispatch(quickLinkAction.setSnippetData([...snippetData, singleSnippet]));
      dispatch(quickLinkAction.setIsNewSnippet(false));
    }
  }, [singleSnippet]);

  return (
    <div className={ `${
      isSnippetOpen ? `${isMobileView ? "" : "w-[60%]"}` : ""
    } `}>
      <div
        className={`${
          isSnippetOpen && isMobileView
            ? "bg-black/90  z-10 w-screen absolute top-0 left-0 h-screen"
            : " "
        }  `}
      >

        
      </div>
      <SnippetModal />
      <div
        className={`p-3 rounded-lg ${
          isMobileView
            ? "absolute w-[90%] z-20 bg-[#393a3b] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : " overflow-y-auto h-[calc(100vh-76px)]  w-full bg-white/10"
        } ${isSnippetOpen ? "block" : "hidden"}`}
      >
        {singleSnippet && (
          <SnippetHeader
            singleSnippet={singleSnippet}
            setSingleSnippet={setSingleSnippet}
          />
        )}
      </div>
    </div>
  );
};

export default SnippetOpen;

export const SnippetHeader = ({
  singleSnippet,
  setSingleSnippet,
}: {
  singleSnippet: SnippetType;
  setSingleSnippet: React.Dispatch<React.SetStateAction<SnippetType | null>>;
}) => {
  const { snippetData, isSnippetOpen } = useAppSelector(
    (state) => state.quicklink
  );
  const [isTagMenuOpen, setTagMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const inputRef=useRef<HTMLInputElement>(null)
  useEffect(()=>{
    inputRef?.current?.focus()
  },[isSnippetOpen])
  const onUpdateTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSingleSnippet = { ...singleSnippet, title: event.target.value };
    

   
    // Dispatch action to update the snippet data in the store
    dispatch(quickLinkAction.setSnippetData(
      snippetData.map(item =>
        item?._id === singleSnippet?._id ? newSingleSnippet : item
      )
    ));
    setSingleSnippet(newSingleSnippet);
  };
  const languageRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      languageRef.current &&
      !languageRef.current.contains(event.target as Node)
    ) {
      setTagMenuOpen(false);
    }
  };
  useEffect(() => {
    if (isTagMenuOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isTagMenuOpen]);

  return (
    <>
      <div className="flex flex-col gap-5  text-xl  justify-between">
        <div className="flex gap-2 justify-between items-center">
          <div className="flex items-center gap-3 ">
            <span className="font-bold">Title: </span>

            <input
             
              onChange={onUpdateTitle}
              placeholder="New Title..."
              value={singleSnippet.title}
              ref={inputRef}
              className="outline-none bg-white/10 max-sm:w-full w-full p-2 rounded-md"
            />
          </div>

          <div
            className="active:bg-white/10 sm:hover:bg-white/10 rounded-full p-2 transition-all duration-150"
            onClick={() => {
              dispatch(quickLinkAction.setSnippetOpen(!isSnippetOpen));
              dispatch(quickLinkAction.setIsNewSnippet(false));
              

            }}
          >
            <IoMdClose size={25} />
          </div>
        </div>

        {/* tags */}

        <div className=" relative flex items-center gap-2">
          <span className="font-bold">Tags: </span>
          <div ref={languageRef} className="">
              <AiOutlinePlus
                onClick={() => setTagMenuOpen(!isTagMenuOpen)}
                className="bg-white/10 rounded-md px-1 hover:animate-none hover:cursor-pointer w-7 h-7 "
              />
              {isTagMenuOpen && <TagMenu singleSnippet={singleSnippet} />}
             
            </div>
            <div className="bg-white/20 rounded-full ml-1 h-[40px] w-[1px] "></div>


          <div className="w-full flex  rounded-md items-center p-2 overflow-x-auto h-fit">
            <Carousel className="w-full rounded-md overflow-hidden">
              <CarouselContent className="flex pl-4   gap-2">
              {singleSnippet.tags.map((tagitem, index) => (
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


          {/* <div className="flex  items-center truncate gap-1">
            {singleSnippet.tags.map((tagitem, index) => (
              <span
                key={index}
                className=" bg-white/10 rounded-md px-3 text-white/60  "
              >
                {tagitem.name}
              </span>
            ))}
            <div ref={languageRef} className="">
              <AiOutlinePlus
                onClick={() => setTagMenuOpen(!isTagMenuOpen)}
                className="bg-white/10 rounded-md animate-pulse hover:animate-none hover:cursor-pointer w-7 h-7 "
              />
              {isTagMenuOpen && <TagMenu singleSnippet={singleSnippet} />}
            </div>
          </div> */}
        </div>
        {/* code */}
        <Code singleSnippet={singleSnippet} />
      </div>
    </>
  );
};

export const TagMenu = ({ singleSnippet }: { singleSnippet: SnippetType }) => {
  const { AllTags, snippetData } = useAppSelector((state) => state.quicklink);
  const dispatch = useAppDispatch();
  const onTagUpdate = (newTag: tagType) => {
    const updatedSnippet = {
      ...singleSnippet,
      tags: [newTag, ...singleSnippet.tags],
    };
    const newSnippetData = snippetData.map((item) => {
      if (item?._id === singleSnippet?._id) {
        return updatedSnippet;
      }
      return item;
    });

    dispatch(quickLinkAction.setSelectedSnippet(updatedSnippet));
    dispatch(quickLinkAction.setSnippetData(newSnippetData));
  };

  return (
    <ul className="absolute top-10 bg-[#393a3b] z-20 flex flex-col gap-2 w-[30%]  py-3  h-[200px] overflow-y-auto rounded-md ">
      {AllTags.slice(1).map((item) => (
        <li
          onClick={() => {
            onTagUpdate(item);
          }}
          key={item._id}
          className={`${
            singleSnippet.tags.some(
              (tag) => tag.name.toLowerCase() === item.name.toLowerCase()
            )
              ? "text-white/30 select-none pointer-events-none "
              : ""
          } capitalize whitespace-nowrap text-center hover:bg-white/10 px-2 w-full hover:cursor-pointer  `}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};



export const Code = ({ singleSnippet }: { singleSnippet: SnippetType }) => {
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      languageRef.current &&
      !languageRef.current.contains(event.target as Node)
    ) {
      setLanguageModalOpen(false);
    }
  };
  const { snippetData } = useAppSelector(
    (state) => state.quicklink
  );
  useEffect(() => {
    if (isLanguageModalOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isLanguageModalOpen]);
  const dispatch=useAppDispatch()

  const handleChange=(code:any)=>{
    const newCodeSnippet={...singleSnippet,code:code}
    const updatedSnippet=snippetData.map((item)=>{

      if(item?._id===singleSnippet?._id){
        return newCodeSnippet;
      }
      return item;
    })

    dispatch(quickLinkAction.setSelectedSnippet(newCodeSnippet));
    dispatch(quickLinkAction.setSnippetData(updatedSnippet));



  }
  return (
    <div className=" flex gap-2 flex-col">
      <div className="flex gap-2">
        <label className="font-bold " htmlFor="code">
          Code:{" "}
        </label>

        <div
          onClick={() => setLanguageModalOpen(!isLanguageModalOpen)}
          className=" relative hover:bg-white/20 w-[180px] flex items-center bg-white/10 p-1 rounded-md justify-between px-2 hover:cursor-pointer "
          ref={languageRef}
        >
          <div className="flex items-center gap-1">
          <span><singleSnippet.language.icon/></span>
          <span  className="capitalize ">{singleSnippet.language.title}</span>
          </div>
          {!isLanguageModalOpen ? (
            <MdKeyboardArrowDown   />
          ) : (
            <MdKeyboardArrowUp />
          )}
          {isLanguageModalOpen && <Language singleSnippet={singleSnippet} />}
        </div>
      </div>

      <Editor
        onChange={handleChange}
        className="bg-white/10 outline-none max-sm:w-full  h-[300px] p-2 rounded-md"
        theme="vs-dark"
        options={{ readOnly: false, minimap: { enabled: false } }}
        language={singleSnippet?.language?.title?.toLowerCase()}
        value={singleSnippet.code}
      />
    </div>
  );
};

export const Language = ({ singleSnippet }: { singleSnippet: SnippetType }) => {
  const { snippetData } = useAppSelector((state) => state.quicklink);
  const dispatch = useAppDispatch();
  const onLanguageUpdate = (newLanguage: languageType) => {
    const updatedSnippet = { ...singleSnippet, language: newLanguage };
    const newSnippetData = snippetData.map((item) => {
      if (item?._id === singleSnippet?._id) {
        return updatedSnippet;
      }
      return item;
    });


    dispatch(quickLinkAction.setSelectedSnippet(updatedSnippet));
    dispatch(quickLinkAction.setSnippetData(newSnippetData));
  };

  return (
    <div className=" absolute top-10 z-20 bg-[#393a3b] left-0 overflow-hidden rounded-md w-[180px]  ">
      <ul className=" flex flex-col gap-2 overflow-y-auto ">
        {languages.map((item) => (
          <li
          key={item?._id}
            onClick={() => onLanguageUpdate(item)}
            className={`hover:bg-white/20 ${singleSnippet.language.title.toLowerCase()===item.title.toLowerCase()?"text-white/20 pointer-events-none select-none":""} flex items-center gap-1 p-2 `}
          >
              <item.icon/>
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
