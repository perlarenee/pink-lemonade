"use client";
import { useState } from "react";

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

