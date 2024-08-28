"use client";
import clsx from 'clsx';
import { useState } from 'react';
import {
    PlusIcon,
    MinusIcon
} from '@heroicons/react/24/outline';
import { PrefMenu } from './buttons';

export default function Recipies(){

    const [recipe, setRecipe] = useState(false);

    return (
        <>
        <h2 className="text-xl">View/Adjust Recipe
        {!recipe && (
        <PlusIcon 
            className="w-8 inline-block ml-4" 
            onClick={
                () => setRecipe(!recipe)
            }
            />
        )}
         {recipe && (
        <MinusIcon 
            className="w-8 inline-block ml-4" 
            onClick={
                () => setRecipe(!recipe)
            }
            />
        )}
                

        </h2>

        <div  className={clsx(
        
        
        'text-left bg-white w-full transition transition-max-height duration-500 ease-in-out max-h-0 overflow-hidden p-0 my-8',
        {'max-h-[1000px] transition transition-height duration-500 ease-in-out': recipe === true},
        )}><div className="inner p-16 border-solid border-8 border-secondary_blue ">

        <h2 className="text-xl font-bold pb-6">Menu</h2>
        {/*https://www.w3schools.com/react/react_lists.asp*/}
        <ul role="list" className="list-disc list-outside">
        <li>Frequency: Once Daily</li>
        <li>Servings
            <ul role="list" className="list-disc list-outside pl-4" >
            <li><span className="font-bold">Serving 1</span>
                <ul role="list" className="list-disc list-outside pl-4">
                <li>Types:
                    <ul role="list" className="list-disc list-outside pl-4">
                    <li>Pink Lemonade</li>
                    <li>Capuchino</li>
                    </ul>
                </li>
                <li>Formats
                    <ul role="list" className="list-disc list-outside pl-4">
                    <li>Memes</li>
                    <li>Poetry</li>
                    </ul>
                </li>
                <li>Length: 5 minutes</li>
                </ul>

            </li>
            </ul>

        </li>
        </ul>

        <PrefMenu />
        </div></div>
        </>
    )
}