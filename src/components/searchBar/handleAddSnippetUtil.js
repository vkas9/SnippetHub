import { FaJava } from "react-icons/fa";
import formatDate from "../content/SnippetSection/formatDate";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { v4 as uuidv4 } from 'uuid';
export const handleAddSnippet = async (dispatch, router, snippetData) => {
  // Navigate first
  await dispatch(quickLinkAction.setQuickLink("1"));
  await router.push("/snippets/all-snippets");

  // Then dispatch actions
  const newSingleSnippet = {
    id: uuidv4(),
    title: "",
    isFavorite: false,
    tags: [],
    description: "",
    code: ``,
    language: { id: "1", title: "Java", icon: FaJava, isSelected: false },
    createdAt: formatDate(String(new Date())),
    isTrashed: false,
  };

  dispatch(quickLinkAction.setIsNewSnippet(true));
  dispatch(quickLinkAction.setSnippetOpen(true));
  dispatch(quickLinkAction.setSelectedSnippet(newSingleSnippet));
};
