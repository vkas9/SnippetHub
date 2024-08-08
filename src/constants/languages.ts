import { SiScala } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { languageType } from "@/Types/type.snippetData";

export const languages:languageType[] = [
  {
    id: "1",
    title: "Java",
    icon: FaJava,
    isSelected: false
    
  },
  {
    id: "2",
    title: "Python",
    icon: FaPython,
    isSelected: false
  },
  {
    id: "3",
    title: "JavaScript",
    icon: IoLogoJavascript,
    isSelected: false
  },
  {
    id: "4",
    title: "Scala",
    icon: SiScala,
    isSelected: false
  },
  {
    id: "5",
    title: "Go",
    icon: FaGolang,
    isSelected: false
  },
];
