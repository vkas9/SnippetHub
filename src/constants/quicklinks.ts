import { MdOutlineTextSnippet } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { languageType, linkType } from "@/Types/type.snippetData";

export const quicklinks:linkType[] = [
  {
    _id: '1',
    isSelected: true,
    icon: MdOutlineTextSnippet,
    title: "All Snippets",
    link:"all-snippets"
  },
  {
    _id: '2',
    isSelected: false,
    icon: MdOutlineFavoriteBorder,
    title: "Favorites",
    link:"favorites"
  },
  {
    _id: '3',
    isSelected: false,
    icon: IoTrashOutline ,
    title: "Trash",
    link:"trash"
  },
];
