import Form from '@/app/ui/forms/create-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchContributors, fetchTags, fetchFormats } from '@/app/lib/data';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contributors - New',
};

export default async function NewContributions() {
  const contributors = await fetchContributors();
  const tags = await fetchTags();
  const formats = await fetchFormats();
 
  return (
    <main className="p-16">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Contributions', href: '/contributors/contributions' },
          {
            label: 'Create Refreshment',
            href: '/contributors/contributions/new',
            active: true,
          },
        ]}
      />
      <Form contributors={contributors} tags={tags} formats={formats} />
    </main>
  );
}



