import { MdOutlineTextSnippet } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

export const quicklinks = [
  {
    id: '1',
    isSelected: true,
    icon: <MdOutlineTextSnippet />,
    title: "All Snippets",
  },
  {
    id: '2',
    isSelected: false,
    icon: <MdOutlineFavoriteBorder />,
    title: "Favorites",
  },
  {
    id: '3',
    isSelected: false,
    icon: <IoTrashOutline />,
    title: "Trash",
  },
];
