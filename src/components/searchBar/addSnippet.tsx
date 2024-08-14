"use client";
import { FaJava } from "react-icons/fa";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React from "react";
import { IoAddSharp } from "react-icons/io5";
import formatDate from "../content/SnippetSection/formatDate";
import { useRouter } from "next/navigation";
import { handleAddSnippet } from "./handleAddSnippetUtil";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
const AddSnippet = () => {
  const { snippetData, isSnippetOpen, ClerkUserId } = useAppSelector(
    (state) => state.quicklink
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { AllLanguage:items } = useAppSelector((state) => state.language);

  return (
    <div
      onClick={() => {
        if (!isSnippetOpen) {
          handleAddSnippet(dispatch, router, snippetData, ClerkUserId, items);
        }
      }}
      className={`h-full px-2 gap-1 sm:gap-2 absolute z-10 right-0 transition-all duration-100 top-0 ${
        !isSnippetOpen
          ? "hover:cursor-pointer active:bg-white/20 sm:hover:bg-white/20"
          : "cursor-not-allowed"
      } rounded-full group flex items-center justify-center  bg-white/10`}
    >
      
        <AnimatedShinyText className="inline-flex text-white sm:text-white/20 items-center justify-center sm:px-1 transition ease-out group-active:text-white sm:group-hover:text-white hover:duration-300">
          <IoAddSharp size={23} />
          <span className="hidden sm:flex">Snippet</span>
        </AnimatedShinyText>
      
    </div>
  );
};

export default AddSnippet;
