'use server';

import {z} from 'zod';
import {sql} from '@vercel/postgres';
import {revalidatePath} from 'next/cache';
import {redirect} from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    contributor: z.string({
        invalid_type_error: "Please select a contributor.",
    }),
    title: z.string(),
    content: z.string(),
    image_url: z.string(),
    tags: z.string(),
    formats: z.string(),
    length: z.string(),
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
        content?: string[];
        image_url?: string[];
        tags?: string[];
        formats?: string[];
        length?: string[];
        status?: string[];
    };
    message?: string | null;
}


export async function createRefreshment(prevState: State, formData: FormData) {
//console.log('hi');
    //validate using Zod
  const validatedFields = CreateRefreshment.safeParse({
        contributor: formData.get('contributor'),
        title: formData.get('title'),
        content: formData.get('content'),
        image_url: formData.get('image_url'),
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
  //const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  //insert data into database
  try {
    await sql `
    INSERT INTO refreshments (contributor_id, title, content, image_url, tags, format, length, status, date)
    VALUES (${contributor}, ${title}, ${content}, ${image_url}, ${tags}, ${formats}, ${length}, ${status}, ${date})
    `;
  }catch(error){
    //if a database error occurs, return a more specific error
    return {
        message: 'Database Error: Failed to Create Refreshment.',
    };
  }
  
    //revalidate the cache for the location page and redirect the user
    revalidatePath('/contributors/contributions');
    redirect('/contributors/contributions');
}

export async function updateRefreshment(id: string, prevState: State, formData: FormData){


    //validate using Zod
    const validatedFields = CreateRefreshment.safeParse({
        contributor: formData.get('contributor'),
        title: formData.get('title'),
        content: formData.get('content'),
        image_url: formData.get('image_url'),
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

    //insert data into database
    try{
        await sql `
        UPDATE refreshments
        SET contributor_id = ${contributor}, title = ${title}, content = ${content}, image_url = ${image_url}, tags = ${tags}, format = ${formats}, length = ${length}, status = ${status}
        WHERE id = ${id}
        `;
    } catch (error){
        //if a database error occurs, return a more specific error
        return {
            message: 'Database Error: Failed to Update Refreshment.',
        }
    }

    //revalidate the cache for the location page and redirect the user
    revalidatePath('/contributors/contributions');
    redirect('/contributors/contributions');

}

/*



export async function updateRefreshment(id: string, prevState: State, formData: FormData){
    
    //validate using Zod
    const validatedFields = UpdateRefreshment.safeParse({
        contributorId: formData.get('contributorId'),
        title: formData.get('title'),
        content: formData.get('content'),
        image_url: formData.get('image_url'),
        tags: formData.get('tags'),
        format: formData.get('format'),
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
    const { contributorId, title, content, image_url, tags, format, length, status } = validatedFields.data;
    //const amountInCents = amount * 100;

    //insert data into database
    try{
        await sql `
        UPDATE refreshments
        SET contributor_id = ${contributorId}, title = ${title}, content = ${content}, image_url = ${image_url}, tags = ${tags}, format = ${format}, length = ${length}, status = ${status}
        WHERE id = ${id}
        `;
    } catch (error){
        //if a database error occurs, return a more specific error
        return {
            message: 'Database Error: Failed to Update Refreshment.',
        }
    }
   
    //revalidate the cache for the location page and redirect the user
    revalidatePath('/contributors/contributions');
    redirect('/contributors/contributions');
}

export async function createRefreshment(prevState: State, formData: FormData) {

    //validate using Zod
  const validatedFields = CreateRefreshment.safeParse({
    contributorId: formData.get('contributorId'),
        title: formData.get('title'),
        content: formData.get('content'),
        image_url: formData.get('image_url'),
        tags: formData.get('tags'),
        format: formData.get('format'),
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
  const {contributorId, title, content, image_url, tags, format, length, status} = validatedFields.data;
  //const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  //insert data into database
  try {
    await sql `
    INSERT INTO refreshments (contributor_id, title, content, image_url, tags, format, length, status, date)
    VALUES (${contributorId}, ${title}, ${content}, ${image_url}, ${tags}, ${format}, ${length}, ${status}, ${date})
    `;
  }catch(error){
    //if a database error occurs, return a more specific error
    return {
        message: 'Database Error: Failed to Create Refreshment.',
    };
  }
  
    //revalidate the cache for the location page and redirect the user
    revalidatePath('/contributors/contributions');
    redirect('/contributors/contributions');
}*/

/*export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }*/