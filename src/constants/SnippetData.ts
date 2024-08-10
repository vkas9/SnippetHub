import { SiScala } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import formatDate from "@/components/content/SnippetSection/formatDate";

export const snippetData = [
  {
    id: "1FG22NDi2o3if",
    title: "this is a note",
    isFavorite: false,
    tags: [
      { _id: "1", name: "tag1",isSelected:false },
      { _id: "2", name: "tag2",isSelected:false  },
    ],
    code: ` const handleFavorite = (item: SnippetType) => {
    const updatedSnippetData: SnippetType[] = snippetData.map((snippet) => {
      if (snippet.id === item.id) {
        return { ...snippet, isFavorite: !snippet.isFavorite };
      }
      return snippet;
    });
    
    dispatch(quickLinkAction.setSnippetData(updatedSnippetData));
  };`,
    language: { id: "1", title: "Java", icon: FaJava, isSelected: false },
    createdAt: formatDate("2022-01-01"),
    isTrashed:false
  },
  {
    id: "nsdnkf23DFw23ihfn",
    title: "this is a note",
    isFavorite: false,
    tags: [
      { _id: "1", name: "tag1",isSelected:false  },
      { _id: "2", name: "tag2",isSelected:false  },
    ],
    code: `const handleFavorite = (item: SnippetType) => {
    const updatedSnippetData: SnippetType[] = snippetData.map((snippet) => {
      if (snippet.id === item.id) {
        return { ...snippet, isFavorite: !snippet.isFavorite };
      }
      return snippet;
    });
    
    dispatch(quickLinkAction.setSnippetData(updatedSnippetData));
  };`,
    language: { id: "1", title: "Java", icon: FaJava, isSelected: false },
    createdAt: formatDate("2022-01-01"),
    isTrashed:false
  },
];
