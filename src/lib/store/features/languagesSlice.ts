import { languages } from "@/constants/languages";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";

 export interface link{
  id: number;
  isSelected: boolean;
  title: string;
  icon: React.ReactNode;
}

export interface language {
  items:link[]
  }

const initialState: language = {
  items:languages
}

const languagesSlice=createSlice({
    name:"language",
    initialState,
    reducers:{
        setLanguages:(state,action)=>{
          const id=action.payload;
          state.items=state.items.map((item)=>
            item.id===id?{...item,isSelected:true}:{...item,isSelected:false}
          )
            
        }
    }
})

export const languagesAction=languagesSlice.actions;

export default languagesSlice;