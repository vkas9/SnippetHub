"use client";

import { FaArrowRight } from "react-icons/fa6";
import BlurFade from "@/components/magicui/blur-fade";
import Particles from "@/components/magicui/particles";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { BorderBeam } from "../components/magicui/border-beam";
import Image from "next/image";

import profilePic from "../../public/demo.webp";
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
    <div className="h-screen  w-full ">
      <div className="flex w-full flex-col gap-4 mt-[5rem]  2xl:mt-[8rem] items-center justify-center">
        <BlurFade delay={0.25} yOffset={8} inView>
          <h1 className=" py-4 max-w-[70rem] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white via-white to-gray-500/80 bg-clip-text text-center text-5xl md:text-6xl lg:text-7xl  font-semibold leading-none text-transparent ">
            Store and Organize Your Code Snippets Easily
          </h1>
        </BlurFade>
        <BlurFade delay={0.25 * 2} yOffset={-6} inView>
          <div
            onClick={handleClick}
            className="bg-white flex  hover:cursor-pointer items-center gap-3 text-black px-6 md:px-8 py-2 font-semibold rounded-md  "
          >
            <span>Get Started</span>
            <FaArrowRight />
          </div>
        </BlurFade>
      </div>
      
      <BlurFade delay={0.25} duration={.8}  inView>
      
      <div className="relative mx-auto mt-[5rem] 2xl:mt-[8rem] w-full rounded-xl overflow-hidden max-w-[80rem]  ">

        <Image src={profilePic} alt="main" />
        <div className="w-full h-full z-10 bg-gradient-to-t from-black via-black/40 to-transparent absolute bottom-0 left-0  ">

        </div>
        <BorderBeam/>
      </div>
      
</BlurFade>

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
