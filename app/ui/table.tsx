import Image from 'next/image';
//import {UpdateRefreshmentButton, DeleteInvoice } from '@/app/ui/invoices/buttons';
//import InvoiceStatus from '@/app/ui/invoices/status';
import RefreshmentStatus from '@/app/ui/status';
import { formatDateToLocal} from '@/app/lib/utils';
import { fetchFilteredRefreshments,fetchContributorById } from '@/app/lib/data';
//import { refreshments } from '../lib/placeholder-data';
import { UpdateRefreshmentButton, CreateRefreshmentButton, DeleteRefreshmentButton } from '@/app/ui/buttons';

export default async function RefreshmentsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const refreshments = await fetchFilteredRefreshments(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {refreshments?.map((ref) => (
              <div
                key={ref.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                    <Image
                        src={ref.cont_image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${ref.cont_name}`}
                      />
                      <p>{ref.cont_name}</p>
                      
                      </div>
                      <div className="mb-2 flex items-center">

                      <Image
                        src={ref.image_url}
                        className="mr-2"
                        width={150}
                        height={150}
                        alt={`${ref.title}`}
                      />
                       </div>
                       <div className="mb-2 flex items-center">
                      <p>{ref.title}</p>
                    </div>
                    <div  className="text-sm text-gray-500"  dangerouslySetInnerHTML={{__html: ref.content}}/>
                  </div>
                  <RefreshmentStatus status={ref.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>{formatDateToLocal(ref.date)}</p>
                  </div>
                 
                  <div className="flex justify-end gap-2">
                  <UpdateRefreshmentButton id={ref.id} />
                  <DeleteRefreshmentButton id={ref.id} />
                  </div>

                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Contributor{/* contributor imag and name */}
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Format
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tags
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Content{/* short blurb cotent, title, image */}
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {refreshments?.map((ref) => (
                <tr
                  key={ref.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={ref.cont_image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${ref.cont_name}`}
                      />
                      <p>{ref.cont_name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {ref.format}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {ref.tags}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <div className="flex items-center gap-3">
                      <Image
                        src={ref.image_url}
                        className=""
                        width={28}
                        height={28}
                        alt={`${ref.title}`}
                      />
                      <p>{ref.title}</p>
                      {ref.content}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {formatDateToLocal(ref.date)}
                  </td>
                  <td>
                  <RefreshmentStatus status={ref.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <DeleteRefreshmentButton id={ref.id} />
                    <div className="flex justify-end gap-2"> 
                    <UpdateRefreshmentButton id={ref.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
