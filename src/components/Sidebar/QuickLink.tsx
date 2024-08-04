"use client"
import { quickLinkAction } from '@/lib/store/features/quicklinkSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import Link from 'next/link'
import React from 'react'

const QuickLink = () => {

    const items=useAppSelector(state=>state.quicklink.items);
    const dispatch=useAppDispatch()
    const handleLink=(id:any)=>{
        dispatch(quickLinkAction.setQuickLink(id))
    }
  return (
    <>
    {items.map((item,index)=>{
        return <Link key={index} href={"/snippets"} >
            <div onClick={()=>handleLink(item.id)}  className={`flex  items-center gap-1 hover:bg-white/10 ${item.isSelected?"bg-white/10":""} transition-all duration-10 p-2 rounded-md`}>
               { item.icon}
                <span>{item.title}</span>
            </div>
        </Link>
    })}
    
    </>
  )
}

export default QuickLink
