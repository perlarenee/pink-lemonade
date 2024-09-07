import {inter, teko} from '@/app/ui/fonts';
import Link from "next/link";
import { Suspense } from "react";
import { fetchRefreshmentsPages } from "@/app/lib/data";
import { LibraryTableSkeleton, DataFeedSkeleton } from '@/app/ui/skeletons';
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";
import RefreshmentsTable from "@/app/ui/table";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin - Library',
};

export default async function AdminLibrary({
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
        <>
        
            <div className="w-full p-16">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${inter.className} text-2xl`}>Refreshments Library</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search refreshements..." />
                {/* <CreateInvoice /> */}
            </div>

                <Suspense key={query + currentPage} fallback={<LibraryTableSkeleton />}>
                <RefreshmentsTable query={query} currentPage={currentPage} />
                </Suspense>

            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
            </div>
        </>
       
    );
  }