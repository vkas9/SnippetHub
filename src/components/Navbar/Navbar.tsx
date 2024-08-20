"use client";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import SearchBar from "../searchBar/searchBar";
import AddSnippet from "../searchBar/addSnippet";
import OpenCloseSidebar from "./OpenCloseSidebar";
import { BackgroundBeams } from "../ui/background-beams";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import BlurFade from "@/components/magicui/blur-fade";
import UserAuth from "./UserAuth";
import { DrawerDemo } from "./Popup";
import SnippetModal from "../content/SnippetOpen/SnippetModal";

const Navbar = () => {
  const {isSignedIn,isLoaded}=useAuth()
  const dispatch = useAppDispatch();
  const { isMobileView, items } = useAppSelector((state) => state.quicklink);
  const router = useRouter();
  const handleLink = async (id: string, link: string) => {
    await dispatch(quickLinkAction.setQuickLink(id));
    router.push(`/snippets/${link}`);
  };

  const handleMouseEnter = (link: string) => {
    router.prefetch(`/snippets/${link}`);
  };
  

  if (!isLoaded) return null;
  return (
    <>
    <BlurFade delay={0.25} yOffset={-10} duration={.8} inView>
      <SnippetModal />
      <div
        className={`  w-full   flex items-center h-[45px] sm:h-[60px] ${!isSignedIn?"pl-2":""} justify-between  py-2 sm:pl-6 pr-4 ${
          items[2].isSelected ? "bg-red-500/10" : "bg-[#030836]"
        } bg-[#030836] mx-auto`}
      >
        {/* Home */}

        <div className=" flex items-center gap-2 ">
          <SignedIn>
            <OpenCloseSidebar isMobileView={isMobileView} />
          </SignedIn>
          <Link href={"/"} className="relative">
            <div className="flex   text-lg sm:text-2xl items-center">
              <span className="font-bold ">Snippet</span>
              <span className="font-thin">Hub</span>
            </div>

            <BackgroundBeams />
          </Link>
        </div>
        <SignedIn>
          <SearchBar />
        </SignedIn>
        {/*User Auth */}
        <SignedOut>
          <div className="sm:hidden">
            <DrawerDemo isMobileView={isMobileView} />
          </div>
        </SignedOut>

        <SignedIn>
          <div className=" flex  gap-2 sm:gap-4 items-center ">
            <div
              onClick={() => handleLink("1", "all-snippets")}
              onMouseEnter={() => handleMouseEnter("all-snippets")}
              className="bg-white/10 max-sm:hidden hover:cursor-pointer  flex items-center group gap-3 active:bg-white/20 sm:hover:bg-white/20 transition-all duration-100 py-1 sm:py-2 px-4 sm:px-6 rounded-md font-bold text-md "
            >
              <span>My Snippets</span>
              {/* <FaArrowRight className='hidden transition-all duration-200 group-hover:flex'/> */}
            </div>
            <div className="h-[40px]  max-sm:hidden  sm:h-[50px] rounded-full min-w-[1px] bg-white/20 "></div>
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <div className="hidden sm:block">
            <UserAuth />
          </div>
        </SignedOut>
      </div>
      </BlurFade>
    </>
  );
};

export default Navbar;
