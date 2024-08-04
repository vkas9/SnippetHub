import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import SearchBar from "../searchBar/searchBar";
import AddSnippet from "../searchBar/addSnippet";
import OpenCloseSidebar from "./OpenCloseSidebar";

const Navbar = () => {
  return (
    <div className="  w-full   flex items-center h-[45px] sm:h-[60px] justify-between py-2 pl-2 sm:pl-6 pr-4 bg-[#030836] mx-auto">
      {/* Home */}
      <div className=" flex items-center gap-2 ">
       <OpenCloseSidebar/>
        <Link href={"/"}>
          <div className="flex   text-lg sm:text-2xl items-center">
            <span className="font-bold ">Snippet</span>
            <span className="font-thin">Hub</span>
          </div>
        </Link>
      </div>
      <SignedIn>
        <SearchBar />
      </SignedIn>
      {/*User Auth */}
      <SignedOut>
        <div className="sm:hidden active:bg-white/10 p-2 transition-all duration-200 rounded-full ">
          <GiHamburgerMenu size={25} />
        </div>
      </SignedOut>

      <SignedIn>
        <div className=" flex  gap-2 sm:gap-4 items-center ">
          <Link
            href={"/snippets"}
            className="bg-white/10 max-sm:hidden  flex items-center group gap-3 active:bg-white/20 sm:hover:bg-white/20 transition-all duration-100 py-1 sm:py-2 px-4 sm:px-6 rounded-md font-bold text-md "
          >
            <span>My Snippets</span>
            {/* <FaArrowRight className='hidden transition-all duration-200 group-hover:flex'/> */}
          </Link>
          <div className="h-[40px]  max-sm:hidden  sm:h-[50px] rounded-full min-w-[1px] bg-white/20 "></div>
          <UserButton />
        </div>
      </SignedIn>

      <SignedOut>
        <div className=" gap-4 hidden sm:flex  ">
          <Link
            href={"/user/sign-in"}
            className="bg-white/10 hover:bg-white/20 transition-all duration-100 py-2 px-6 rounded-md font-bold text-md "
          >
            Sign in
          </Link>
          <Link
            href={"/user/sign-up"}
            className="bg-white/10 hover:bg-white/20 transition-all duration-100 py-2 px-6 rounded-md font-bold text-md "
          >
            Sign up
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default Navbar;
