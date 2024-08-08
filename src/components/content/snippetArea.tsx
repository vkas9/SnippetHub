"use client";
import React from "react";
import TagsArea from "./TagArea/tagsArea";
import SnippetSection from "./SnippetSection/SnippetSection";
import SnippetOpen from "./SnippetOpen/SnippetOpen";
import { useAppSelector } from "@/lib/store/hooks";

const SnippetArea = () => {
  const { isSnippetOpen: isOpen, isMobileView } = useAppSelector(
    (state) => state.quicklink
  );
  return (
    <div className=" flex w-full sm:w-[calc(100vw-200px)]  py-2 pl-2   gap-2 ">
      <div
        className={`${
          isOpen ? `${isMobileView ? "w-full" : "w-[40%]"}` : "w-full"
        }  flex flex-col h-[calc(100vh-76px)] rounded-md overflow-y-auto gap-2`}
      >
        <TagsArea />

        <SnippetSection />
      </div>

      <SnippetOpen />
    </div>
  );
};

export default SnippetArea;
