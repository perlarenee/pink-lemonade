"use client";

import { ContributorField, FormatField, TagField} from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  XMarkIcon,
  PencilSquareIcon,
  TagIcon,
  PhotoIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useActionState, useEffect, useState , useRef} from 'react';
import { createRefreshment, State} from '@/app/lib/actions';

import FroalaEditorField from '@/app/ui/editor';

export default function Form({ contributors, tags, formats }: { contributors: ContributorField[] ,tags: TagField[] , formats:FormatField[]}) {
  
  const initialState: State = {message: null,errors: {}};
  const [state, formAction] = useActionState(createRefreshment, initialState);
  const [tagsList, setTagsList] = useState<string[]>([]);
  const [formatsList, setFormatsList] = useState<string[]>([]);
  const [textareaContent, setTextareaContent] = useState('');

  //image upload const
  //const inputFileRef = useRef<HTMLInputElement>(null);

  //handle tag clicks
  function handleTags(event:any,tag:object){
    let newValue = event.target.value;

    if(event.target.checked){

        //check for duplicates, though probably unnecesary
        const isFound = tagsList.some(tag => {
            return tag === newValue;
        })

        //set new tag in array
        if(!isFound){
            setTagsList(prevState => [
                ...prevState,
                newValue
            ]);
        }
        
    }else{
        //remove unchecked tag from array
        setTagsList(tagsList.filter(tag => tag !== newValue));
    }
  }

  //handle formats clicks
  function handleFormats(event:any,format:object){
    let newValue = event.target.value;

    if(event.target.checked){

        //check for duplicates, though probably unnecesary
        const isFound = formatsList.some(format => {
            return format === newValue;
        })

        //set new tag in array
        if(!isFound){
            setFormatsList(prevState => [
                ...prevState,
                newValue
            ]);
        }
        
    }else{
        //remove unchecked tag from array
        setFormatsList(formatsList.filter(format => format !== newValue));
    }
  }

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Contributor Name */}
        <div className="mb-4">
          <label htmlFor="contributor" className="mb-2 block text-sm font-medium">
            Choose contributor
          </label>
          <div className="relative">
            <select
              id="contributor"
              name="contributor"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="contributor_error"
            >
              <option value="" disabled>
                Select a contributor
              </option>
              {contributors.map((contributor) => (
                <option key={contributor.cont_id} value={contributor.cont_id}>
                  {contributor.cont_name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="contributor-error" aria-live="polite" aria-atomic="true">
            {state.errors?.contributor && 
            state.errors.contributor.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Title */}

        <div className="mb-4">
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
                Enter a Title
            </label>
            <div className="relative mt-2 rounded-md">
                <div className="relative">
                    <input 
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Your title here"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby="title_error"
                    />
                    <PencilSquareIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"  />
                </div>

                <div id="title-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.title && 
                    state.errors.title.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                    ))}
                </div>

            </div>
        </div>


        {/* Content */}

        <div className="mb-4">
            <label htmlFor="content" className="mb-2 block text-sm font-medium">
                Describe your Contribution
            </label>
            <div className="relative mt-2 rounded-md">
                <div className="relative">
                
                <FroalaEditorField textareaContent={textareaContent} setTextareaContent={setTextareaContent}/>
                
                    <textarea 
                        id="content"
                        name="content"
                        placeholder="Your content here"
                        className="hidden peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby="content_error"
                        rows={4} cols={40}
                        value={textareaContent}
                        readOnly
                    />
                    
                    {/*<PencilSquareIcon className="pointer-events-none absolute left-3 top-5 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"  />*/}
                </div>

                <div id="content-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.content && 
                    state.errors.content.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                    ))}
                </div>

            </div>
        </div>

        {/* File Upload*/}
        <div className="mb-4">
            <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
                Upload your file
            </label>
            <div className="relative mt-2 rounded-md">
                <div className="relative">
                    <input 
                        id="image_url"
                        name="image_url"
                        type="file"
                        placeholder="Your image_url here"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby="image_url_error"
                    />
                    <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"  />
                </div>

                <div id="image_url-error" aria-live="polite" aria-atomic="true">
                 {state.errors?.image_url && 
                    state.errors.image_url.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                    ))}
                </div>

            </div>
        </div>

        {/* Image url */}

       {/*<div className="mb-4">
            <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
                Place your Image URL
            </label>
            <div className="relative mt-2 rounded-md">
                <div className="relative">
                    <input 
                        id="image_url"
                        name="image_url"
                        type="text"
                        placeholder="Your image_url here"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby="image_url_error"
                    />
                    <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"  />
                </div>

                <div id="image_url-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.image_url && 
                    state.errors.image_url.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                    ))}
                </div>

            </div>
        </div>*/}

        {/* Tags */}

        <fieldset className="mb-4">
          <legend className="mb-2 block text-sm font-medium">
            Select Tags
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">


            {tags.map((tag, index) => (

                <div className="flex items-center" key={index}>
                <input
                id={tag.slug}
                name={tag.slug}
                type="checkbox"
                value={tag.slug}
                onClick={(event) => handleTags(event, tag)} 
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                aria-describedby={`${tag.slug}_error`}
                />
                <label
                htmlFor={tag.slug}
                className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                {`${tag.name}`}<TagIcon className="h-4 w-4" />
                </label>
                </div>

              ))}


            <div id="tags-error" aria-live="polite" aria-atomic="true">
                {state.errors?.tags && 
                state.errors.tags.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                </p>
                ))}
            </div>


            </div>
          </div>
        </fieldset>

        {/*hidden field to send collected tags to database */}
            <input 
            id="tags"
            name="tags"
            type="text"
            placeholder="tags combined field"
            className="hidden peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            aria-describedby="tags_error"
            value={tagsList}
            readOnly
        />



        {/* Length */}
        <div className="mb-4">
            <label htmlFor="length" className="mb-2 block text-sm font-medium">
                Enter Approximate Length of Refreshment in Minutes
            </label>
            <div className="relative mt-2 rounded-md">
                <div className="relative">
                    <input 
                        id="length"
                        name="length"
                        type="text"
                        placeholder="Length in minutes"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby="length_error"
                    />
                    <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"  />
                </div>

                <div id="length-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.length && 
                    state.errors.length.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                    ))}
                </div>

            </div>
        </div>

        {/* Format */}


        <fieldset className="mb-4">
          <legend className="mb-2 block text-sm font-medium">
            Select Formats
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">


            {formats.map((format, index) => (

                <div className="flex items-center" key={index}>
                <input
                id={format.slug}
                name={format.slug}
                type="checkbox"
                value={format.slug}
                onClick={(event) => handleFormats(event, format)} 
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                aria-describedby={`${format.slug}_error`}
                />
                <label
                htmlFor={format.slug}
                className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                {`${format.name}`}<FunnelIcon className="h-4 w-4" />
                </label>
                </div>

              ))}


            <div id="formats-error" aria-live="polite" aria-atomic="true">
                {state.errors?.formats && 
                state.errors.formats.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                </p>
                ))}
            </div>


            </div>
          </div>
        </fieldset>

        {/*hidden field to send collected formats to database */}
            <input 
            id="formats"
            name="formats"
            type="text"
            placeholder="formats combined field"
            className=" hidden peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            aria-describedby="formats_error"
            value={formatsList}
            readOnly
        />


        {/* Refreshment Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the refreshment status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="status_error"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="approved"
                  name="status"
                  type="radio"
                  value="approved"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="status_error"
                />
                <label
                  htmlFor="approved"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Approved <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="declined"
                  name="status"
                  type="radio"
                  value="declined"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="status_error"
                />
                <label
                  htmlFor="declined"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Rejected <XMarkIcon className="h-4 w-4" />
                </label>
              </div>

              <div id="status-error" aria-live="polite" aria-atomic="true">
                {/*state.errors?.status && 
                state.errors.status.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))*/}
              </div>


            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/contributors/contributions"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Refreshment</Button>
      </div>
    </form>
  );
}
