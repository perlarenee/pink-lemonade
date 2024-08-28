import { fetchFilteredRefreshments } from "../lib/data";
import Image from 'next/image';

export default async function DataFeed({
    query,
    currentPage,
}:{
        query: string;
        currentPage: number;
}){
    //const refreshments = await fetchFilteredRefreshments(query, currentPage);

    return(
        <>
       

        <div className="flex grid grid-cols-12 gap-1">
            <div className="title col-span-12 p-8 m-0">
            <p><b>Serving:</b> A, 9:30am | <b>Ingredients:</b> Capuchino, Pink Lemonade | <b>Served in:</b> Meme, Poetry, Short Story</p>
            </div>
            {
                /*refreshments?.map((ref) => (
                    <div key={`${ref.id}`} className="col-span-12 gap-4 p-4 bg-slate-50 border-solid border-red-500 m-4">
                        <h2>{`Hello ${ref.title}`}</h2>
                        <div>{ref.content}</div>
                        <div><Image
                            src={ref.image_url}
                            className={ref.title}
                            width="300"
                            height="300"
                            alt={ref.image_url}
                        /></div>
                        <p>Status: {`${ref.status}`}</p>
                        <p>Date: {`${ref.date}`}</p>
                    </div>
                ))*/
            }
        </div>
        </>
    )
}