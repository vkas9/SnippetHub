"use client"
import React, { useRef } from 'react'
import { IoIosSearch } from "react-icons/io";
import AddSnippet from './addSnippet';

const SearchBar = () => {
    const inputRef=useRef<HTMLInputElement>(null)
    const handleRef=()=>{
        if (inputRef.current) {
            inputRef.current.focus();
          }
    }
  return (
    <div className=' relative flex items-center pl-2 overflow-hidden gap-2 bg-white/10 w-[40%] rounded-full h-[100%] sm:h-[90%] '>
      <IoIosSearch onClick={handleRef} size={25} className=' '/>
      <input ref={inputRef} placeholder='Search a snippet...' className='bg-transparent text-white h-full sm:pr-[110px] pr-[2.3rem] truncate outline-none w-full' />
      <AddSnippet/>
    </div>
  )
}

export default SearchBar
