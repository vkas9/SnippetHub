import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
const user= await  currentUser();
console.log("user",user)

  return (
  <div>
    
  </div>)
  
}
