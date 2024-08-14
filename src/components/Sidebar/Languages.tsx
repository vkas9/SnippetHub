"use client"
import { languages } from '@/constants/languages'
import { languagesAction } from '@/lib/store/features/languagesSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import Link from 'next/link'
import React from 'react'

const Languages = () => {

  const {LanguageCounter}=useAppSelector(state=>state.language)
  const dispatch=useAppDispatch()
  const handleLink=(_id:string)=>{
      dispatch(languagesAction.setLanguages(_id))
  }
  return (
    <>
     {
              LanguageCounter?.map((item,index)=>{
                return <Link key={item._id} href={"/snippets/all-snippets"}>
                  <div  className={`flex items-center gap-1 hover:bg-white/10 ${item.isSelected?"bg-white/10":""} justify-between z p-2 rounded-md`}>
                                <div className='flex items-center gap-2 '>

                                <item.icon/>                                
                                <span>{item.title}</span>
                                </div>
                                <span className='text-white/30 text-sm'>{item?.count}</span>
                            </div>
                </Link>
              })
            }
    </>
  )
}

export default Languages
