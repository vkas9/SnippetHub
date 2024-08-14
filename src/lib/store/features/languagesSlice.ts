import { languages } from "@/constants/languages";
import { language, languageType } from "@/Types/type.snippetData";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";





const initialState: language = {
  AllLanguage:languages,
  LanguageCounter:[]
}

const languagesSlice=createSlice({
    name:"language",
    initialState,
    reducers:{
        setLanguages:(state,action)=>{
          const _id=action.payload;
          state.AllLanguage=state.AllLanguage.map((item)=>
            item?._id===_id?{...item,isSelected:true}:{...item,isSelected:false}
          )
            
        },
        setLanguageCounter:(state,action)=>{
          state.LanguageCounter=action.payload
        }
    },
    
})

export const languagesAction=languagesSlice.actions;

export default languagesSlice;