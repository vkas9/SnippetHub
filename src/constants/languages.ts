import { SiScala } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { languageType } from "@/Types/type.snippetData";

export const languages:languageType[] = [
  {
    _id: "66bd1da9f296f671a15a8689",
    title: "Java",
    icon: FaJava,
    isSelected: false
    
  },
  {
    _id: "66bd1dfdf296f671a15a868b",
    title: "Python",
    icon: FaPython,
    isSelected: false
  },
  {
    _id: "66bd1e0cf296f671a15a868d",
    title: "JavaScript",
    icon: IoLogoJavascript,
    isSelected: false
  },
  {
    _id: "66bd1e14f296f671a15a868f",
    title: "Scala",
    icon: SiScala,
    isSelected: false
  },
  {
    _id: "66bd1e1ff296f671a15a8691",
    title: "Go",
    icon: FaGolang,
    isSelected: false
  },
];
