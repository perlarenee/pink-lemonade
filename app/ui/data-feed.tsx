import { fetchFilteredRefreshments } from "../lib/data";
import Image from 'next/image';
import { formatDateToLocal } from "@/app/lib/utils";

export default async function DataFeed({
    query,
    currentPage,
}:{
        query: string;
        currentPage: number;
}){
    const refreshments = await fetchFilteredRefreshments(query, currentPage);

    return(
        <>
       

        <div className="flex grid grid-cols-12 gap-1">
        {
                refreshments?.map((ref, index) => (
                    <div key={index} className="col-span-12 gap-4 p-4 bg-slate-50 border-solid border-red-500 m-4">
                        <h2>{ref.title}</h2>
                        <div>{ref.content}</div>
                        <div><Image
                            src={ref.image_url}
                            width="300"
                            height="300"
                            alt={ref.image_url}
                        /></div>
                        <p>Status: {ref.status}</p>
                        <p>Tags: {ref.tags}</p>
                        <p>Format: {ref.format}</p>
                        <p>Length: {ref.length}</p>
                        <p>Date: {formatDateToLocal(ref.date)}</p>

                        
                    </div>
                ))
            }
        </div>
        </>
    )
}