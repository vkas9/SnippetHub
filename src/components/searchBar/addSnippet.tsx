"use client";
import { FaJava } from "react-icons/fa";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React from "react";
import { IoAddSharp } from "react-icons/io5";
import formatDate from "../content/SnippetSection/formatDate";
import { useRouter } from "next/navigation";

const AddSnippet = () => {
  const { snippetData, isSnippetOpen } = useAppSelector(
    (state) => state.quicklink
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddSnippet = async () => {
    // Navigate first
    await router.push("/snippets/all-snippets");

    // Then dispatch actions
    const newSingleSnippet = {
      id: String(snippetData.length + 1),
      title: "",
      isFavorite: false,
      tags: [],
      description: "",
      code: ``,
      language: { id: "1", title: "Java", icon: FaJava, isSelected: false },
      createdAt: formatDate(String(new Date())),
      isTrashed: false
    };

    dispatch(quickLinkAction.setIsNewSnippet(true));
    dispatch(quickLinkAction.setSnippetOpen(true));
    dispatch(quickLinkAction.setSelectedSnippet(newSingleSnippet));
  };

  return (
    <div
      onClick={() => {
        if (!isSnippetOpen) {
          handleAddSnippet(); // Trigger navigation and state updates
        }
      }}
      className={`h-full px-2 gap-1 md:gap-2 absolute right-0 transition-all duration-100 top-0 ${
        !isSnippetOpen
          ? "hover:cursor-pointer hover:bg-white/20"
          : "cursor-not-allowed"
      } rounded-full flex items-center justify-center bg-white/10`}
    >
      <IoAddSharp size={23} />
      <span className="hidden sm:flex">Snippet</span>
    </div>
  );
};

export default AddSnippet;
