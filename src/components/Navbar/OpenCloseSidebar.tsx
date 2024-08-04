"use client"
import { quickLinkAction } from '@/lib/store/features/quicklinkSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const OpenCloseSidebar = () => {
    const check=useAppSelector(state=>state.quicklink.OpenClose);
    const dispatch=useAppDispatch()
    const handleSideBar=()=>{
        dispatch(quickLinkAction.setOpenClose(!check))
    }
  return (
    <>

    {

        !check?<GiHamburgerMenu onClick={handleSideBar} className="sm:hidden" size={25} />:
        <IoMdClose onClick={handleSideBar} className="sm:hidden " size={25} />

    }
    
    </>
  )
}

export default OpenCloseSidebar
