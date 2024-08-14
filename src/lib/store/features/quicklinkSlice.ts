import { quicklinks } from "@/constants/quicklinks";
import { languageType, link, QuickLink, SnippetType, tagType } from "@/Types/type.snippetData";
import { createSlice } from "@reduxjs/toolkit";
import {snippetData} from "../../../../src/constants/SnippetData"
import {Tags} from "../../../../src/constants/Tags"

import { v4 as uuidv4 } from 'uuid';

const initialState: QuickLink = {
  items:quicklinks,
  OpenClose:false,
  ClerkUserId:"",
  isSnippetOpen:false,
  isMobileView:false,
  AllTags:Tags,
  snippetData:snippetData,
  selectedSnippet:null,
  tagsClicked:[],
  isNewSnippet:false,
  singleLanguageSelected:null,
  isAddTagOpen:false,
  filtererdAllSnippets:[],




}

const quickLinkSlice=createSlice({
    name:"quicklink",
    initialState,
    reducers:{
        setQuickLink:(state,action)=>{
          const _id = action.payload;
          state.items = state.items.map((item) =>
            item._id === _id ? {...item, isSelected: true } : { ...item, isSelected: false }
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
        setClerkUserId:(state,action)=>{
          state.ClerkUserId=action.payload
        },
        setAllTag:(state,action)=>{
          state.AllTags=[state.AllTags[0],{_id:uuidv4(),name:action.payload.tagName,clerkUserId:action.payload.ClerkUserId,isSelected:false},...state.AllTags.slice(1)]
        },
        setSingleLanguageSelected:(state,action)=>{
          state.singleLanguageSelected=action.payload
        },
        setAddTagOpen:(state,action)=>{
          state.isAddTagOpen=action.payload
        },
        setTagsClicked:(state,action)=>{
          state.tagsClicked=action.payload
        },
        setFiltererdAllSnippets:(state,action)=>{
          state.filtererdAllSnippets=action.payload
        }        
    }
})
export const quickLinkAction = quickLinkSlice.actions;
export default quickLinkSlice;