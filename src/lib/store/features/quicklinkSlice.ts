import { quicklinks } from "@/constants/quicklinks";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";

 export interface link{
  id: number;
  isSelected: boolean;
  title: string;
  icon: React.ReactNode;
}

export interface QuickLink {
  items:link[]
  }

const initialState: QuickLink = {
  items:quicklinks
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
            
        }
    }
})
export const quickLinkAction = quickLinkSlice.actions;
export default quickLinkSlice;