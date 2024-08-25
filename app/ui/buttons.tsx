"use client";
import { useState } from "react";

export function PrefMenu(){
    const [prefToggle,setPrefToggle] = useState(false);

    return(
        <>
            <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-8 rounded text-center"
            onClick={
                () => setPrefToggle(!prefToggle)
            }
        >
          Change Selections
        </button>
        {console.log(prefToggle)}
        </>
    );
}

