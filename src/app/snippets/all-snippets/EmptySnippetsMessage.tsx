"use client"
import { handleAddSnippet } from "@/components/searchBar/handleAddSnippetUtil";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

import { useRouter } from "next/navigation";
import React from "react";

const EmptySnippetsMessage = () => {
    const { snippetData, isSnippetOpen } = useAppSelector(
        (state) => state.quicklink
      );
      const dispatch = useAppDispatch();
      const router = useRouter();
    
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-2  items-center justify-center"> 
        <span className="font-bold text-white/60 sm:text-2xl">
         Snippets Empty!
        </span>

        <div onClick={() => {
        if (!isSnippetOpen) {
          handleAddSnippet(dispatch, router, snippetData) 
        }
      }} className="bg-white/20 hover:cursor-pointer hover:bg-white/30  p-2 rounded-xl  font-bold">Add Snippet</div>
      </div>
    </div>
  );
};

export default EmptySnippetsMessage;
