import { FaJava } from "react-icons/fa";
import formatDate from "../content/SnippetSection/formatDate";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";

export const handleAddSnippet = async (dispatch, router, snippetData) => {
  // Navigate first
  await dispatch(quickLinkAction.setQuickLink("1"));
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
    isTrashed: false,
  };

  dispatch(quickLinkAction.setIsNewSnippet(true));
  dispatch(quickLinkAction.setSnippetOpen(true));
  dispatch(quickLinkAction.setSelectedSnippet(newSingleSnippet));
};
