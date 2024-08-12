'use client';

import { handleAddSnippet } from "@/components/searchBar/handleAddSnippetUtil";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useRouter } from "next/navigation";
import React from "react";

const EmptySnippetsMessage = () => {
  const { snippetData, isSnippetOpen, tagsClicked,ClerkUserId } = useAppSelector((state) => state.quicklink);
  const{items}= useAppSelector((state)=>state.language)
  const dispatch = useAppDispatch();
  const router = useRouter();

  const hasTagsClicked = tagsClicked?.filter((tag) => tag !== "All").length > 0;
  const nonTrashedSnippets = snippetData?.filter((snippet) => !snippet.isTrashed);
  const isNoSnippets = nonTrashedSnippets.length === 0;


  return (
    <div className="w-full h-full flex items-center justify-center">
      {isNoSnippets ? (
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="font-bold text-white/40 sm:text-2xl">
            Snippets Empty!
          </span>
          <div
            onClick={() => {
              if (!isSnippetOpen) {
                handleAddSnippet(dispatch, router, snippetData,ClerkUserId,items);
              }
            }}
            className="bg-white/20 text-center hover:cursor-pointer hover:bg-white/30 p-2 rounded-xl font-bold"
          >
            Add Snippet
          </div>
        </div>
      ) : hasTagsClicked ? (
        <div className="text-center">
          <span className="font-bold  text-white/40 sm:text-2xl">
            No snippets found for these tags!
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default EmptySnippetsMessage;
