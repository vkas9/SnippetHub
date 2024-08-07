import { quicklinks } from "@/constants/quicklinks";
import { SnippetType, tagType } from "@/Types/type.snippetData";
import { createSlice } from "@reduxjs/toolkit";
import {snippetData} from "../../../../src/constants/SnippetData"
import {Tags} from "../../../../src/constants/Tags"
import React from "react";

 export interface link{
  id: string;
  isSelected: boolean;
  title: string;
  icon: React.ReactNode;
}

export interface QuickLink {
  items:link[],
  OpenClose:boolean,
  isSnippetOpen:boolean,
  AllTags:tagType[],
  isMobileView:boolean,
  snippetData:SnippetType[],
  selectedSnippet:SnippetType|null,
  isNewSnippet:boolean,
  

  }

const initialState: QuickLink = {
  items:quicklinks,
  OpenClose:false,
  isSnippetOpen:false,
  isMobileView:false,
  AllTags:Tags,
  snippetData:snippetData,
  selectedSnippet:null,
  isNewSnippet:false


}

const quickLinkSlice=createSlice({
    name:"quicklink",
    initialState,
    reducers:{
        setQuickLink:(state,action)=>{
          const id = action.payload;
          state.items = state.items.map((item) =>
            item.id === id ? {...item, isSelected: true } : { ...item, isSelected: false }
          );
            
        },
        setSnippetData:(state,action)=>{
            state.snippetData=action.payload
        },
        setOpenClose:(state,action)=>{
          state.OpenClose= action.payload
        },
        setSnippetOpen:(state,action)=>{
          state.isSnippetOpen=action.payload
        },
        setMobileView:(state,action)=>{
          state.isMobileView=action.payload
        },
        setSelectedSnippet:(state,action)=>{
          state.selectedSnippet=action.payload
        },
        setIsNewSnippet:(state,action)=>{
          state.isNewSnippet=action.payload
        },
        setAllTag:(state,action)=>{
          state.AllTags=[{_id:String(state.AllTags.length+1),name:action.payload},...state.AllTags]
        }
    }
})
export const quickLinkAction = quickLinkSlice.actions;
export default quickLinkSlice;