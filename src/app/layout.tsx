import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/components/Navbar/Navbar";
import { Provider } from "react-redux";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnippetHub",
  icons:{
    icon:"/sh.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <StoreProvider>

    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        
        <body className={inter.className}>

          <ClerkLoading>
            <div className="h-screen w-screen flex text-xl items-center justify-center "><span className="animate-pulse ">Loading...</span></div>
          </ClerkLoading>
          <ClerkLoaded>

          <div className="flex flex-col h-screen">
            <Navbar />
           
              {children}
            
          </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
    </StoreProvider>

  );
}
