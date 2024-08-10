import { IconType } from "react-icons";

export interface SnippetType{
    id:string;
    title:string;
    isFavorite:boolean;
    tags:tagType[];
    description:string;
    code:string;
    language:languageType;
    createdAt:string;
    isTrashed:boolean;
}


export interface tagType{
    _id:string;
    name:string;
    isSelected:boolean
}



export interface languageType{
    id:string;
    title:string;
    icon:IconType;
    isSelected: boolean;
}
export interface linkType{
    id: string;
    isSelected: boolean;
    title: string;
    icon: IconType;
    link:string;
  }

export interface link{
    id: string;
    isSelected: boolean;
    title: string;
    icon: IconType;
  }


  
export interface QuickLink {
    items:linkType[],
    OpenClose:boolean,
    isSnippetOpen:boolean,
    AllTags:tagType[],
    isMobileView:boolean,
    snippetData:SnippetType[],
    selectedSnippet:SnippetType|null,
    isNewSnippet:boolean,
    singleLanguageSelected:languageType|null,
    isAddTagOpen:boolean
    
  
    }