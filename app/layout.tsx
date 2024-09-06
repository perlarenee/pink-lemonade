
import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import {inter} from '@/app/ui/fonts';
import '@/app/ui/global.css';
import BottomNav from "./ui/bottomnav";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Pink Lemonade',
    default: 'Pink Lemonade',
  },
  description: "Refreshments for tired minds",
  metadataBase: new URL('https://someurlhere'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased font-normal`}>

      <div className="flex h-screen flex-col md:flex-col">
        {/*md:overflow-y-auto md:p-12 md:pb-16 m-0*/}
        <div className="flex-grow  " >{children}</div>
        
        {/*<div className="flex-grow p-6 md:p-4 fixed bottom-0 left-0 right-0 bg-secondary_pink text-primary_pink font-bold hover:text_slate_50">
        <BottomNav />
          </div>*/ } 
        </div>
      

      </body>
    </html>

    
  );
}
