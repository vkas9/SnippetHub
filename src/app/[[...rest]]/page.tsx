import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
  UserProfile,
  useUser,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const userr=useUser();
  console.log("userrr=->",userr)
const user= await  currentUser();
console.log("user",user)

  return (
  <div>
    
  </div>)
  
}
