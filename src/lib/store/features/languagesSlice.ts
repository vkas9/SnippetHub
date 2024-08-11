import { languages } from "@/constants/languages";
import { languageType } from "@/Types/type.snippetData";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";



export interface language {
  items:languageType[]
  }

const initialState: language = {
  items:languages
}

const languagesSlice=createSlice({
    name:"language",
    initialState,
    reducers:{
        setLanguages:(state,action)=>{
          const _id=action.payload;
          state.items=state.items.map((item)=>
            item?._id===_id?{...item,isSelected:true}:{...item,isSelected:false}
          )
            
        }
    }
})

export const languagesAction=languagesSlice.actions;

export default languagesSlice;