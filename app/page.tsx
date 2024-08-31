

import Image from "next/image";
import {inter, teko} from '@/app/ui/fonts';
import Link from "next/link";
//import {useState} from 'react';
import {PrefMenu} from '@/app/ui/buttons';
import Recipes from '@/app/ui/recipes';
import DataFeed from "./ui/data-feed";
import { fetchRefreshmentsPages } from "./lib/data";





export default function Home() {
    const query = '';
    const currentPage = 1;
    const totalPages = 2; //await fetchRefreshmentsPages(query);

  return (
    <main className="flex min-h-screen flex-col items-center p-16 md:p-24">

      {/* top row */}
      <div className="flex z-10 w-full justify-center justify-between items-center flex-col">
        <div>
        <Link
            className="pointer-events-none flex gap-2 p-8 lg:pointer-events-auto lg:p-0 text-center"
            href="https://weblocomotive.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/pinklemonade.png"
              alt="Pink Lemonade Logo"
              className=""
              width={600}
              height={328}
              priority
            />
          </Link>
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
        <h2 className={`${inter.className} text-4xl pt-0 pb-8`}>Welcome [name]</h2>
        <p>[Todays Date]</p>

        <Recipes />
      
        
        
        </div>
        <div className="flex p-16" >
          <DataFeed query={query} currentPage={currentPage} />
        </div>


      </div>

      {/*<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>*/}


      
    </main>
  );
}
