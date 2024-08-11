import { IconType } from "react-icons";

export interface SnippetType{
    _id:string;
    title:string;
    isFavorite:boolean;
    tags:tagType[];
    code:string;
    language:languageType;
    createdAt:string;
    isTrashed:boolean;
}


export interface tagType{
    _id:string;
    name:string;
    clerkUserId:string
    isSelected:boolean
}



export interface languageType{
    _id:string;
    title:string;
    icon:IconType;
    isSelected: boolean;
}
export interface linkType{
    _id: string;
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
    isAddTagOpen:boolean,
    tagsClicked:string[],
    filtererdAllSnippets:SnippetType[],
    ClerkUserId:string
    
  
    }


