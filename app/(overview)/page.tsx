

import Image from "next/image";
import {inter} from '@/app/ui/fonts';
import Link from "next/link";
import {PrefMenu} from '@/app/ui/buttons';
import Selections from '@/app/ui/selections';
import SelectionsContent from "@/app/ui/selections-content";
import DataFeed from "@/app/ui/data-feed";
import { Suspense } from "react";
import { fetchRefreshmentsPages } from "@/app/lib/data";
import { DataFeedSkeleton } from '@/app/ui/skeletons';
import Pagination from "@/app/ui/pagination";
/*import Search from "@/app/ui/search";*/
import {
  BoltIcon,
} from '@heroicons/react/24/outline';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Main Page',
};

export default async function Home({
  searchParams,
}:{
  searchParams?:{
      query?:string;
      page?:string;
  };
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchRefreshmentsPages(query);

  return (
    <main className="flex min-h-screen flex-col items-center p-16 md:p-24">
      <div className="flex z-10 w-full justify-center justify-between items-center flex-col">
        <div>
          <Image
            src="/images/pinklemonade.png"
            alt="Pink Lemonade Logo"
            className=""
            width={600}
            height={328}
            priority
          />
          <Link
            className={`${inter.className} pointer-events-none block gap-2 p-0 lg:pointer-events-auto text-center w-full`}
            href="https://weblocomotive.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          </Link>
        </div>
     
      </div>

      <div className="relative flex place-items-center pt-16 flex-col">
       
        <div className="flex flex-col text-center">
        <p className={`${inter.className} text-4xl pt-0 pb-8`}>Welcome [name]</p>
        
        <Link
        key="Admin Control Panel"
        href="/admin"
        className="text-center flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm  hover:text-slate-50 md:flex-none md:justify-center md:p-2 md:px-3"
        >
          <BoltIcon className="w-6" />
          <p>Admin Control Panel</p>
        </Link>

        <p>[Todays Date]</p>
        <Selections>
          <SelectionsContent />
        </Selections>
        </div>

          <Suspense key={query + currentPage}  fallback={<DataFeedSkeleton />}>
            <DataFeed query={query} currentPage={currentPage} />
          </Suspense>
          
          <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
          </div>


      </div>

    </main>
  );
}
