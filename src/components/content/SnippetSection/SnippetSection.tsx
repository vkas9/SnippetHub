"use client";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React, { useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { SnippetType } from "@/Types/type.snippetData";
import Editor from "@monaco-editor/react";

const SnippetSection = () => {
  const { isSnippetOpen: isOpen, snippetData } = useAppSelector(
    (state) => state.quicklink
  );
  const dispatch = useAppDispatch();
  const handleFavorite = (item: SnippetType) => {
    const updatedSnippetData: SnippetType[] = snippetData.map((snippet) => {
      if (snippet.id === item.id) {
        return { ...snippet, isFavorite: !snippet.isFavorite };
      }
      return snippet;
    });

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
  return (
    <div className="  flex flex-wrap gap-2">
      {[...snippetData].reverse().map((item, index) => (
        <div
          key={item.id}
          className={`max-sm:w-full ${
            isOpen ? "w-full" : "w-[320px]"
          }  p-2 flex flex-col justify-between max-h-[500px]  bg-white/10 rounded-lg`}
        >
          <div>
            <div className="flex text-lg  gap-5 justify-between">
              <span
                onClick={() => handleSnippetOpen(item)}
                className="font-bold truncate w-full hover:text-red-500 text-2xl hover:cursor-pointer"
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
            <div className="flex mt-3 items-center truncate gap-1">
              {item.tags.map((tagitem, index) => (
                <span
                  key={index}
                  className=" bg-white/10 rounded-md px-3 text-white/60  "
                >
                  {tagitem.name}
                </span>
              ))}
            </div>

            {/* code block */}

            <div className=" mt-4  bg-white/[.03] p-1    rounded-md  ">
              <p className="overflow-hidden h-full ">
                {" "}
                <Editor
                  height="200px"
                  theme="vs-dark"
                  options={{ readOnly: true,minimap:{ enabled: false } }}
                  defaultLanguage="javascript"
                  defaultValue={item.code}
                 
                />
              </p>
            </div>
          </div>
          {/* footer */}

          <div className="flex mt-8 items-center justify-between">
            <div className="flex text-white/20 text-sm capitalize items-center gap-1">
              <IoLogoJavascript />
              {item.language}
            </div>
            <span className="sm:hover:text-red-500 active:text-red-500 active:bg-white/10 sm:hover:bg-white/10 p-2 rounded-full transition-all duration-100">
              <FaTrash />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SnippetSection;
