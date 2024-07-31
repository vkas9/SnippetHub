"use client"
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


  return (
  <div>
    <h1>Hello Vik</h1>
  </div>)
  
}
