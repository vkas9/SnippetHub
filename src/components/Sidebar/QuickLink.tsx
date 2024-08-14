"use client"
import { quickLinkAction } from '@/lib/store/features/quicklinkSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { useRouter } from 'next/navigation'
import React from 'react'

const QuickLink = () => {
    const { items, snippetData } = useAppSelector(state => state.quicklink);
    const filteredAllSnippets = snippetData?.filter((item) => item?.isTrashed === false);
    const filteredAllTrashedSnippets = snippetData?.filter((item) => item?.isTrashed === true);
    const filteredAllFavoritesSnippets = snippetData?.filter((item) => item?.isTrashed === false &&item?.isFavorite );
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleLink = async (id: any, link: string) => {
        await dispatch(quickLinkAction.setQuickLink(id));
        router.push(`/snippets/${link}`);
    };

    const handleMouseEnter = (link: string) => {
       
        router.prefetch(`/snippets/${link}`);
    };

    return (
        <>
            {items.map((item) => {
                return (
                    <div
                        key={item._id}
                        onClick={() => handleLink(item._id, item.link)}
                        onMouseEnter={() => handleMouseEnter(item.link)}
                        className={`flex items-center gap-1  hover:bg-white/10 ${item.isSelected ? "bg-white/10" : ""} transition-all duration-100 justify-between p-2 rounded-md cursor-pointer`}
                    >
                        <div className='flex items-center gap-1'>
                            <item.icon />
                            <span className='whitespace-nowrap'>{item?.title}</span>
                        </div>
                        {item.title === "All Snippets" && <span className='text-white/30 text-sm'>{filteredAllSnippets?.length}</span>}
                        {item.title === "Favorites" && <span className='text-white/30 text-sm'>{filteredAllFavoritesSnippets?.length}</span>}
                        {item.title.toLowerCase() === "trash" && <span className='text-white/30 text-sm'>{filteredAllTrashedSnippets?.length}</span>}
                    </div>
                );
            })}
        </>
    )
}

export default QuickLink;
