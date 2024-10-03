'use server';

import {z} from 'zod';
import {sql} from '@vercel/postgres';
import {revalidatePath} from 'next/cache';
import {redirect} from 'next/navigation';
import { put } from '@vercel/blob';
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


const FormSchema = z.object({
      id: z.string(),
      contributor: z.string({
          invalid_type_error: "Please select a contributor.",
      }),
      title: z.string()
      .min(1, { message: "Please input a title" }),
      content: z.string()
      .min(1, { message: "Please describe your contribution" }),
      image_url: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      ),
      tags: z.string()
      .min(1, { message: "Please select at least one tag." }),
      formats: z.string()
      .min(1, { message: "Please select at least one format." }),
      length: z.string()
      .min(1, { message: "Please estimate how long it would take an average person to enjoy your contribution." }),
      status: z.enum(['pending','declined','approved'],{
          invalid_type_error: "Please select an refreshment status."
      }),
      date: z.string(),
  });

const CreateRefreshment = FormSchema.omit({ id: true, date: true });

export type State = {
    errors?: {
        contributor?: string[];
        title?: string[];
        content?: any[];
        image_url?: any[];
        tags?: string[];
        formats?: string[];
        length?: string[];
        status?: string[];
    };
    message?: string | null;
}

export async function createRefreshment(prevState: State, formData: FormData) {
  
  const validatedFields = CreateRefreshment.safeParse({
        contributor: formData.get('contributor'),
        title: formData.get('title'),
        content: formData.get('content'),
        image_url: formData.get('image_url') as File,
        tags: formData.get('tags'),
        formats: formData.get('formats'),
        length: formData.get('length'),
        status: formData.get('status'),
  });
  

  //if form validation fails, return errors early. Otherwise continue
  if(!validatedFields.success){

    return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing fields. Failed to create refreshment.',
    };

  }

  // Prepare data for insertion into the database
  const {contributor, title, content, image_url, tags, formats, length, status} = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];
  const blob = await put(image_url.name, image_url, {
      access: 'public',
    });

    //console.log('blob results:',blob);
    //console.log('image_url:',image_url)

  //insert data into database
  try {
    await sql `
    INSERT INTO refreshments (contributor_id, title, content, image_url, tags, format, length, status, date)
    VALUES (${contributor}, ${title}, ${content}, ${blob.url}, ${tags}, ${formats}, ${length}, ${status}, ${date})
    `;
  }catch(error){
    //if a database error occurs, return a more specific error
    return {
        message: 'Database Error: Failed to Create Refreshment.',
    };
  }
  
    //revalidate the cache for the location page and redirect the user
    revalidatePath('/profile/contributions');
    redirect('/profile/contributions');
}

export async function updateRefreshment(id: string, prevState: State, formData: FormData){


    //validate using Zod
    const validatedFields = CreateRefreshment.safeParse({
        contributor: formData.get('contributor'),
        title: formData.get('title'),
        content: formData.get('content'),
        image_url: formData.get('image_url') as File,
        tags: formData.get('tags'),
        formats: formData.get('formats'),
        length: formData.get('length'),
        status: formData.get('status'),
    });

    //if form validation fails, return errors early. Otherwise continue
    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to update refreshment.',
        };
    }

    // Prepare data for insertion into the database
    const {contributor, title, content, image_url, tags, formats, length, status} = validatedFields.data;
    const blob = await put(image_url.name, image_url, {
        access: 'public',
      });

    //insert data into database
    try{
        await sql `
        UPDATE refreshments
        SET contributor_id = ${contributor}, title = ${title}, content = ${content}, image_url = ${blob.url}, tags = ${tags}, format = ${formats}, length = ${length}, status = ${status}
        WHERE id = ${id}
        `;
    } catch (error){
        //if a database error occurs, return a more specific error
        return {
            message: 'Database Error: Failed to Update Refreshment.',
        }
    }

    //revalidate the cache for the location page and redirect the user
    revalidatePath('/profile/contributions');
    redirect('/profile/contributions');

}

    export async function DeleteRefreshment(id: string){
        //throw new Error('Failed to Delete Refreshment');
    
    
        try{
            await sql `
            DELETE FROM refreshments WHERE id = ${id}
            `;
            //revalidate the cache for the location page and redirect the user
            revalidatePath('/contributors/contributions');
            //redirect('/contributors/contributions');
            return {
                message: 'Deleted Refreshment.',
            }
        } catch(error){
            return {
                message: 'Database Error: Failed to Delete Refreshment.',
            }
        }
        
    }