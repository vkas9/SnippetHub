"use client";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MobileSidebar from "../Sidebar/MobileSidebar";

const OpenCloseSidebar = ({isMobileView}:{
  isMobileView?:boolean
}) => {
  const {OpenClose:check,items} = useAppSelector((state) => state.quicklink);
  const dispatch = useAppDispatch();
  const handleSideBar = () => {
    dispatch(quickLinkAction.setOpenClose(!check));
  };
  const [open, setOpen] = React.useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };
  if(!isMobileView)return null
  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <button className="p-2">
            {!open ? (
              <GiHamburgerMenu className="sm:hidden" size={25} />
            ) : (
              <IoMdClose className="sm:hidden " size={25} />
            )}
          </button>
        </DrawerTrigger>
        <DrawerContent className={` bg-gradient-to-b border-none ${
        items[2].isSelected ? "from-red-500/10" : "from-[#030836]"
      }  to-transparent`}>
          <div className="mx-auto px-[1rem] pb-[.5rem] w-full max-w-sm ">
            <MobileSidebar closeDrawer={closeDrawer} />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default OpenCloseSidebar;
