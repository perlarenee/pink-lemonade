
import type { Metadata } from "next";
import AdminNav from "../ui/adminnav";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Pink Lemonade',
    default: 'Pink Lemonade',
  },
  description: "Refreshments for tired minds",
  metadataBase: new URL('https://someurlhere'),
};

export default function Layout({children}:{children: React.ReactNode}) {
  return (

      <div className="flex h-screen flex-col md:flex-col">
        {/*md:overflow-y-auto md:p-12 md:pb-16 m-0*/}
        <div className="flex-grow" >{children}</div>
        <div className="flex-grow p-6 md:p-4 fixed bottom-0 left-0 right-0 bg-secondary_pink text-primary_pink font-bold hover:text_slate_50">
        <AdminNav />
        </div>
        
      </div>
  );
}



