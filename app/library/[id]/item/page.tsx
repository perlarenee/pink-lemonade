import Breadcrumbs from '@/app/ui/breadcrumbs';
import {notFound} from 'next/navigation';
import {fetchRefreshmentById } from '@/app/lib/data';
import Image from 'next/image';
import { formatDateToLocal } from "@/app/lib/utils";
import {DeleteRefreshmentButtonLarge ,UpdateRefreshmentButtonLarge} from '@/app/ui/buttons';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Library  - Refreshment`,
};

export default async function EditContributions({ params }: { params: { id: string } }){
  const id = params.id;
  const [refreshment] = await Promise.all([
    fetchRefreshmentById(id)
  ]);
  
  if(!refreshment){
    notFound();
  }

  return (
    <main className="p-16 mb-16">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Library', href: '/library' },
          {
            label: 'Refreshment',
            href: `/library/${id}/item`,
            active: true,
          },
        ]}
      />
       <div className="flex grid grid-cols-12 gap-1 allowStyles">
        
                    <div className="col-span-12 gap-4 p-4 bg-slate-50 border-solid border-red-500 m-4">
                        <h2>{refreshment.title}</h2>
                        <div dangerouslySetInnerHTML={{__html: refreshment.content}}/>
                        <div><Image
                            src={refreshment.image_url}
                            width={500}
                            height={500}
                            alt={refreshment.image_url}
                            className="w-full h-auto "
                        /></div>
                        <p>Status: {refreshment.status}</p>
                        <p>Tags: {refreshment.tags}</p>
                        <p>Format: {refreshment.format}</p>
                        <p>Length: {refreshment.length}</p>
                        <p>Date: {formatDateToLocal(refreshment.date)}</p>

                        <DeleteRefreshmentButtonLarge id={refreshment.id} />
                        <UpdateRefreshmentButtonLarge id={refreshment.id} />
                        
                    </div>
        </div>

    </main>
    )
}