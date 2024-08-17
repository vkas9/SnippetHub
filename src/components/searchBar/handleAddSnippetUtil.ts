"use client";
import { FaJava } from "react-icons/fa";
import formatDate from "../content/SnippetSection/formatDate";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "@/lib/store/hooks";
import { languageType, SnippetType } from "../../Types/type.snippetData";
export const handleAddSnippet = async (
  dispatch: any,
  router: any,
  snippetData: SnippetType[],
  ClerkUserId: string,
  items: languageType[]
) => {
  // Navigate first
  await dispatch(quickLinkAction.setQuickLink("1"));
  await router.push("/snippets/all-snippets");

  // Then dispatch actions
  const newSingleSnippet = {
    _id: uuidv4(),

    clerkUserId: ClerkUserId || "",
    title: "",
    isFavorite: false,
    tags: [],
    code: ``,
    language: { ...items[0] },
    createdAt: String(new Date()),
    updatedAt: String(new Date()),
    isTrashed: false
  };

  dispatch(quickLinkAction.setIsNewSnippet(true));
  dispatch(quickLinkAction.setSnippetOpen(true));
  dispatch(quickLinkAction.setSelectedSnippet(newSingleSnippet));
};
