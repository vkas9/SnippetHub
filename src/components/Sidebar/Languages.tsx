"use client";
import { languages } from "@/constants/languages";
import { languagesAction } from "@/lib/store/features/languagesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";
import React from "react";
import { Skeleton } from "../ui/skeleton";

const Languages = () => {
  const { LanguageCounter } = useAppSelector((state) => state.language);
  const { loadingSnippets } = useAppSelector((state) => state.quicklink);
  const dispatch = useAppDispatch();
  const handleLink = (_id: string) => {
    dispatch(languagesAction.setLanguages(_id));
  };
  return (
    <>
      {loadingSnippets
        ? Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="min-h-[40px] min-w-[172px] " />
          ))
        : LanguageCounter?.map((item, index) => {
            return (
              <div key={item._id}>
                <div
                  className={`flex items-center gap-1 hover:bg-white/10 ${
                    item.isSelected ? "bg-white/10" : ""
                  } justify-between z p-2 rounded-md`}
                >
                  <div className="flex items-center gap-2 ">
                    <item.icon />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-white/30 text-sm">{item?.count}</span>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default Languages;
