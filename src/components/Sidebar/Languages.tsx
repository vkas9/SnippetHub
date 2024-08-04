"use client"
import { languages } from '@/constants/languages'
import { languagesAction } from '@/lib/store/features/languagesSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import Link from 'next/link'
import React from 'react'

const Languages = () => {

  const items=useAppSelector(state=>state.language.items)
  const dispatch=useAppDispatch()
  const handleLink=(id:any)=>{
      dispatch(languagesAction.setLanguages(id))
  }
  return (
    <>
     {
              items.map((item,index)=>{
                return <Link key={index} href={"/snippets"}>
                  <div onClick={()=>handleLink(item.id)} className={`flex  items-center gap-1 hover:bg-white/10 ${item.isSelected?"bg-white/10":""} justify-between z p-2 rounded-md`}>
                                <div className='flex items-center gap-2 '>

                                {item.icon}                                
                                <span>{item.title}</span>
                                </div>
                                <span className='text-white/30 text-sm'>{index+1}</span>
                            </div>
                </Link>
              })
            }
    </>
  )
}

export default Languages
