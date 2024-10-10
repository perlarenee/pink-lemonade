"use client";
import { useState } from "react";
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DeleteRefreshment } from "@/app/lib/actions";

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
      href="/library/new"
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
      href={`/library/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function UpdateRefreshmentButtonLarge({ id }: { id: string }) {
  return (
    <div className="flex mt-4">
    <Link
      href={`/library/${id}/edit`}
      className="flex flex-row justify-center h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
    ><span>Update</span>
      <PencilIcon className="h-5 md:ml-4" />
    </Link>
    </div>
    
  );
}

export function DeleteRefreshmentButtonLarge({ id }: { id: string }) {
  const deleteRefreshmentById = DeleteRefreshment.bind(null,id);
  return (
    <form action={deleteRefreshmentById}>
      <button type="submit" className="bg-red-500 text-white mt-4 flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">
        <span>Delete</span>
        <TrashIcon className="h-5 md:ml-4" />
      </button>
      </form>
  );
}

export function DeleteRefreshmentButton({ id }: { id: string }) {
  const deleteRefreshmentById = DeleteRefreshment.bind(null,id);
  return (
    <form action={deleteRefreshmentById}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
      </form>
  );
}

