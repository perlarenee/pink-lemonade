import { fetchSelectionsById } from "../lib/data";
import { Instance } from "../lib/definitions";

export default async function SelectionsContent(){

    const userId = '410544b2-4001-4271-9855-fec4b6a6442a';
    const selection = await fetchSelectionsById(userId);
    const instances = JSON.parse(selection.instances);

    return (
        <>
            {
            instances?.map((instance:Instance,index:number)=>(
                <div key={index}>
                    <h2 className="py-4">Serving: {`${index+1}`}</h2>

                    <ul key={`serving-${index+1}_list`} role="list" className="list-disc list-outside pl-4">
                        <li key={`serving-${index+1}_length`}>Length: {`${instance.time}`}</li>
                        <li key={`serving-${index+1}_ref`}>Refreshments: {`${instance.types}`}</li>
                        <li key={`serving-${index+1}_formats`}>Formats: {`${instance.formats}`}</li>
                    </ul>
                </div>
            ))
            }
        </>
    )
}