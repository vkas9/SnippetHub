"use client";

import { FaArrowRight } from "react-icons/fa6";
import BlurFade from "@/components/magicui/blur-fade";
import Particles from "@/components/magicui/particles";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const handleClick = () => {
    
   
    if (isSignedIn) {
      router.push("snippets/all-snippets");
    } else {
      router.push("/user/sign-in");
    }
  };
  return (
    <div className="h-full  w-screen ">
      <div className="flex flex-col gap-4 mt-[5rem]  2xl:mt-[8rem] items-center justify-center">
      <BlurFade delay={0.25} inView>
        <h1 className=" py-4 max-w-[70rem] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white via-white to-gray-500/80 bg-clip-text text-center text-5xl md:text-6xl lg:text-7xl  font-semibold leading-none text-transparent ">
        Store and Organize Your Code Snippets Easily
        </h1>
        </BlurFade>
        <BlurFade delay={0.25*2} yOffset={-6} inView>
        <div
          onClick={handleClick}
          className="bg-white flex  hover:cursor-pointer items-center gap-3 text-black px-6 md:px-8 py-2 font-semibold rounded-md  "
        >
          <span>Get Started</span>
          <FaArrowRight />
        </div>
        </BlurFade>
      </div>

      <Particles
        className="absolute -z-10 inset-0"
        quantity={50}
        ease={80}
        color={`#ffffff`}
        refresh
      />
    </div>
  );
}
