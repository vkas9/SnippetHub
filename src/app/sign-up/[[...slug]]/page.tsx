import { SignUp } from "@clerk/nextjs";

export default function Signup(){
    return <>
    <div className="flex items-center justify-center h-screen">

    <SignUp path="/sign-up"/>
    </div>
    </>
}