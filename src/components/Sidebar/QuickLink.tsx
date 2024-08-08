"use client"
import { quickLinkAction } from '@/lib/store/features/quicklinkSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const QuickLink = () => {
    const { items, snippetData } = useAppSelector(state => state.quicklink);
    const filteredAllSnippets = snippetData?.filter((item) => item?.isTrashed === false);
    const dispatch = useAppDispatch();
    const router = useRouter();
   const param= useParams()

    console.log("roter",param)

    const handleLink =  async(id: any, link: string) => {
    await dispatch(quickLinkAction.setQuickLink(id));
    router.push(`/snippets/${link}`); 
};
    return (
        <>
            {items.map((item) => {
                return (
                    <div key={item.id} onClick={() => handleLink(item.id, item.link)} className={`flex items-center gap-1 hover:bg-white/10 ${item.isSelected ? "bg-white/10" : ""} transition-all duration-10 justify-between p-2 rounded-md cursor-pointer`}>
                        <div className='flex items-center gap-1'>
                            <item.icon />
                            <span>{item?.title}</span>
                        </div>
                        {item.title === "All Snippets" && <span>{filteredAllSnippets?.length}</span>}
                    </div>
                );
            })}
        </>
    )
}

export default QuickLink;
