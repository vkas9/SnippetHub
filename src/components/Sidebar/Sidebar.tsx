"use client";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";

import QuickLink from "./QuickLink";
import Languages from "./Languages";
import { useAppSelector } from "@/lib/store/hooks";
import { LanguageCounterType } from "@/Types/type.snippetData";
import { languagesAction } from "@/lib/store/features/languagesSlice";
import { useDispatch } from "react-redux";
import { SignOutButton } from "@clerk/nextjs";

const Sidebar = () => {
  const {
    OpenClose: isVisible,
    items,
    snippetData
  } = useAppSelector((state) => state.quicklink);

  const { AllLanguage } = useAppSelector((state) => state.language);
  const handleGithub = () => {
    window.open("https://github.com/vkas9/snip", "_blank");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const languageFrequencyMap: Record<string, number> = {};
    snippetData.forEach((snippet) => {
      const languageName = snippet.language.title.toLowerCase();
      if (languageFrequencyMap[languageName]) {
        languageFrequencyMap[languageName]++;
      } else {
        languageFrequencyMap[languageName] = 1;
      }
    });

    const sortedLanguageCounts: LanguageCounterType[] = Object.entries(
      languageFrequencyMap
    )
      .map(([languageName, count]) => {
        const languageDetails = AllLanguage.find(
          (lang) => lang.title.toLowerCase() === languageName
        );
        if (!languageDetails) {
          throw new Error(`Language details not found for ${languageName}`);
        }
        return {
          ...languageDetails,
          title: languageName,
          count,
        };
      })
      .sort((a, b) => b.count - a.count);
    dispatch(languagesAction.setLanguageCounter(sortedLanguageCounts));
  }, [snippetData]);

  return (
    <div
      className={`w-[200px] ${
        !isVisible ? "max-sm:hidden" : ""
      } h-full p-3 flex flex-col pt-7 bg-gradient-to-b ${
        items[2].isSelected ? "from-red-500/10" : "from-[#030836]"
      } from-[#030836] to-transparent justify-between `}
    >
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-white/50 font-semibold ">Quick Links</h1>
          <div className=" pl-1 mt-4  ">
            <ul className="flex flex-col gap-1">
              <QuickLink />
            </ul>
          </div>
        </div>
<div>
         { snippetData.length>0&& <h1 className="text-white/50 font-semibold ">Languages</h1>}
          <div className="pl-1 mt-4">
            <ul className="flex flex-col gap-1">
              <Languages />
            </ul>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col gap-1 ">
        <SignOutButton>
          <button className="hover:bg-white/10 font-bold  text-red-500 flex items-center hover:cursor-pointer  transition-all duration-100  gap-1   p-2 rounded-md">
           <PiSignOutBold/>
            <span>Sign out</span>
          </button>
        </SignOutButton>

        <div className="h-[1px] w-full bg-white/20 rounded-full  shrink-0 "></div>

        <div
          onClick={handleGithub}
          className={`flex items-center gap-1 group hover:text-white hover:bg-white/10  transition-all duration-100 justify-between p-2 rounded-md cursor-pointer`}
        >
          <div className="flex items-center gap-1">
            <FaGithub />
            <span className="whitespace-nowrap">GitHub</span>
          </div>
          <TbExternalLink className="text-white/30 group-hover:text-white transition-all duration-100  shrink-0 text-xl " />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
