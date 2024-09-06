"use client";
import clsx from 'clsx';
import { useState } from 'react';
import {
    PlusIcon,
    MinusIcon
} from '@heroicons/react/24/outline';
import { PrefMenu } from './buttons';


export default function Recipies({
        children,
    }: {
        children: React.ReactNode
    }){

    const [selection, setSelection] = useState(false);

    return (
        <>
        <h2 className="text-xl">View/Adjust Selection
        {!selection && (
        <PlusIcon 
            className="w-8 inline-block ml-4" 
            onClick={
                () => setSelection(!selection)
            }
            />
        )}
         {selection && (
        <MinusIcon 
            className="w-8 inline-block ml-4" 
            onClick={
                () => setSelection(!selection)
            }
            />
        )}
        </h2>

        <div  className={clsx(
        'text-left bg-white w-full transition transition-max-height duration-500 ease-in-out max-h-0 overflow-hidden p-0 my-8',
        {'max-h-[1000px] transition transition-height duration-500 ease-in-out': selection === true},
        )}><div className="inner p-16 border-solid border-8 border-primary_yellow ">

        <h2 className="text-xl font-bold pb-6">Your Selections</h2>
        {children}
        <PrefMenu />
        </div></div>
        </>
    )
}