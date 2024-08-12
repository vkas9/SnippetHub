"use client"
import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import AddSnippet from './addSnippet';
import { useAppDispatch } from '@/lib/store/hooks';
import { useUser } from '@clerk/nextjs';
import { quickLinkAction } from '@/lib/store/features/quicklinkSlice';
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

const SearchBar = () => {
    const inputRef=useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const handleRef=()=>{
        if (inputRef.current) {
            inputRef.current.focus();
          
          }
    }
    const placeholders = [
      "Docker...",
     "bestcode...",
     "project...",
     "cyber...",
     "linux...",
     "feature code...",
     
    ];

    const dispatch=useAppDispatch();
  const {isLoaded,user}= useUser();








  useEffect(()=>{
    dispatch(quickLinkAction.setClerkUserId(user?.id))
  },[isLoaded,user]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className={` relative ${isFocused?"ring-1 border-blue-500 outline-none":""} flex  items-center overflow-hidden gap-2  w-[40%] rounded-full h-[100%] sm:h-[90%] `}>
      {/* <IoIosSearch onClick={handleRef} size={25}  className={`${isFocused ? 'block' : 'hidden'} text-white`}/> */}


      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        
      />
      {/* <input onFocus={()=>setIsFocused(true)} onBlur={() => setIsFocused(false)} ref={inputRef} placeholder='Search a snippet...' className='bg-transparent text-white h-full  sm:pr-[110px] pr-[2.3rem] truncate outline-none w-full' /> */}
      <AddSnippet/>
    </div>
  )
}

export default SearchBar
