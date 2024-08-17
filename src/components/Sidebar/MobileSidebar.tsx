import { useAppSelector } from '@/lib/store/hooks';
import React from 'react'
import QuickLink from './QuickLink';
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

import Languages from './Languages';

const MobileSidebar = ({ closeDrawer }:{
    closeDrawer?:()=>void
}) => {
    const {
        OpenClose: isVisible,
        items,
        snippetData,
      } = useAppSelector((state) => state.quicklink);


      const handleGithub = () => {
        if(closeDrawer)closeDrawer()
        window.open("https://github.com/vkas9/snip", "_blank");
      };
    
  return (
    <div
      className={`p-3 w-full flex flex-col   gap-1 justify-between `}
    >
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-white/50 font-semibold ">Quick Links</h1>
          <div className=" pl-1 mt-4  ">
            <ul className="flex flex-col gap-1">
              <QuickLink closeDrawer={closeDrawer} />
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-white/50 font-semibold ">Languages</h1>
          <div className="pl-1 mt-2">
            <ul className="flex flex-col gap-1">
              <Languages />
            </ul>
          </div>
        </div>
      </div>

      <div
        onClick={handleGithub}
        className={`flex items-center gap-1 group hover:text-white hover:bg-white/10  transition-all duration-10 justify-between p-2 rounded-md cursor-pointer`}
      >
        <div className="flex items-center gap-1">
          <FaGithub />
          <span className="whitespace-nowrap">GitHub</span>
        </div>
        <TbExternalLink className="text-white/30 group-hover:text-white transition-all duration-100  shrink-0 text-xl " />
      </div>
    </div>
  )
}

export default MobileSidebar
