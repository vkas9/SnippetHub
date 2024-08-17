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
  AllTags:[],
  snippetData:[],
  selectedSnippet:null,
  tagsClicked:[],
  isNewSnippet:false,
  singleLanguageSelected:null,
  isAddTagOpen:false,
  filtererdAllSnippets:[],
  loadingSnippets:true,
  loadingTags:true




}

const quickLinkSlice=createSlice({
    name:"quicklink",
    initialState,
    reducers:{
        setQuickLink:(state,action)=>{
          if(Array.isArray(action.payload)){
            state.items=action.payload
          }
          else{

          
          const _id = action.payload;
          state.items = state.items.map((item) =>
            item._id === _id ? {...item, isSelected: true } : { ...item, isSelected: false }
          );}
            
        },
        setSnippetData:(state,action)=>{
          if (typeof action.payload === "function") {
            state.snippetData = action.payload(state.snippetData);
          } else {
            state.snippetData = action.payload;
          }
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
          if (Array.isArray(action.payload)) {
            
            state.AllTags = action.payload
          } else {
            const newTag = {
              _id: action.payload._id|| uuidv4(),
              name: action.payload.tagName,
              clerkUserId: action.payload.ClerkUserId,
              isSelected: false,
            };
            state.AllTags = [state.AllTags[0], newTag, ...state.AllTags.slice(1)];
          }
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
        } ,
        setLoadingSnippets:(state,action)=>{
          state.loadingSnippets=action.payload
        }      ,
        setLoadingTags:(state,action)=>{
          state.loadingTags=action.payload
        } 
    }
})
export const quickLinkAction = quickLinkSlice.actions;
export default quickLinkSlice;