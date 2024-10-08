import EditForm from '@/app/ui/forms/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import {notFound} from 'next/navigation';
import { fetchContributors, fetchTags, fetchFormats, fetchRefreshmentById } from '@/app/lib/data';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contributors  - Edit Refreshment`,
};

export default async function EditContributions({ params }: { params: { id: string } }){
  const id = params.id;
  const [refreshment, contributors, tags, formats] = await Promise.all([
    fetchRefreshmentById(id),
    fetchContributors(),
    fetchTags(),
    fetchFormats()
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
            label: 'Edit Refreshment',
            href: `/library/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm refreshment={refreshment} contributors={contributors} tags={tags} formats={formats} />
    </main>
    )
}