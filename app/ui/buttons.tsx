"use client";
import { useState } from "react";
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function PrefMenu(){
    const [prefToggle,setPrefToggle] = useState(false);

    return(
        <>
            <button 
        className="bg-primary_blue hover:bg-secondary_blue text-white font-bold py-2 px-4 m-8 rounded text-center"
            onClick={
                () => setPrefToggle(!prefToggle)
            }
        >
          Change Selections
        </button>
        </>
    );
}


export function CreateRefreshmentButton() {
  return (
    <Link
      href="/contributors/contributions/new"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateRefreshmentButton({ id }: { id: string }) {
  return (
    <Link
      href={`/contributors/contributions/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteRefreshmentButton({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
}

