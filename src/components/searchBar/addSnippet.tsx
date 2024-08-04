import React from 'react'
import { IoAddSharp } from "react-icons/io5";

const AddSnippet = () => {
  return (
    <div  className=' h-full px-2 gap-1 md:gap-2 absolute right-0 transition-all duration-100 top-0 hover:cursor-pointer hover:bg-white/20  rounded-full flex items-center justify-center bg-white/10 '>
        <IoAddSharp size={23}/>
      <span className='hidden sm:flex'>Snippet</span>
    </div>
  )
}

export default AddSnippet
