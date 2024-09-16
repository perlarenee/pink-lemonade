import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { FC } from 'react';
import { refreshments, contributors, users, tags, selections, formats } from '../lib/placeholder-data';

const client = await db.connect();

 async function seedUsers() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await client.sql`
     CREATE TABLE IF NOT EXISTS users (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email TEXT NOT NULL UNIQUE,
       password TEXT NOT NULL
     );
   `;

   const insertedUsers = await Promise.all(
     users.map(async (user) => {
       const hashedPassword = await bcrypt.hash(user.password, 10);
       return client.sql`
         INSERT INTO users (id, name, email, password)
         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
         ON CONFLICT (id) DO NOTHING;
       `;
     }),
   );

   return insertedUsers;
 }

 async function seedRefreshments() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

   await client.sql`
     CREATE TABLE IF NOT EXISTS refreshments (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       contributor_id UUID NOT NULL,
       title VARCHAR(255) NOT NULL,
       content TEXT NOT NULL ,
       image_url VARCHAR(255) NOT NULL,
       tags VARCHAR(255) NOT NULL,
       format VARCHAR(255) NOT NULL,
       length VARCHAR(255) NOT NULL,
       status VARCHAR(255) NOT NULL,
       date DATE NOT NULL
     );
   `;

   const insertedRefreshments = await Promise.all(
    refreshments.map(
       (refreshment) => client.sql`
         INSERT INTO refreshments  (contributor_id, title, content, image_url, tags, format, length, status, date)
         VALUES (${refreshment.contributor_id}, ${refreshment.title}, ${refreshment.content}, ${refreshment.image_url},  ${refreshment.tags}, ${refreshment.format}, ${refreshment.length}, ${refreshment.status}, ${refreshment.date})
         ON CONFLICT (id) DO NOTHING;
       `,
     ),
   );

   return insertedRefreshments;
 }

 async function seedContributors() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

   await client.sql`
     CREATE TABLE IF NOT EXISTS contributors (
       cont_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       cont_name VARCHAR(255) NOT NULL,
       cont_email VARCHAR(255) NOT NULL,
       cont_image_url VARCHAR(255) NOT NULL
     );
   `;

   const insertedContributors = await Promise.all(
    contributors.map(
       (contributor) => client.sql`
         INSERT INTO contributors (cont_id, cont_name, cont_email, cont_image_url)
         VALUES (${contributor.cont_id}, ${contributor.cont_name}, ${contributor.cont_email}, ${contributor.cont_image_url})
         ON CONFLICT (cont_id) DO NOTHING;
       `,
     ),
   );

   return insertedContributors;
 }


 async function seedTags() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS tags (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      slug VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL 
    );
  `;

  const insertedTags = await Promise.all(
   tags.map(
      (tag) => client.sql`
        INSERT INTO tags (id, slug, name, description)
        VALUES (${tag.id}, ${tag.slug}, ${tag.name}, ${tag.description})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedTags;
}

async function seedFormats() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS formats (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      slug VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL 
    );
  `;

  const insertedFormats = await Promise.all(
   formats.map(
      (format) => client.sql`
        INSERT INTO formats (id, slug, name, description)
        VALUES (${format.id}, ${format.slug}, ${format.name}, ${format.description})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedFormats;
}

async function seedSelections() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS selections (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      frequency TEXT NOT NULL,
      instances TEXT
    );
  `;

  const insertedSelections = await Promise.all(
    selections.map(
      (selection) => client.sql`
        INSERT INTO selections (id, frequency, instances)
        VALUES (${selection.id}, ${selection.frequency}, ${JSON.stringify(selection.instances)})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedSelections;
}




export async function GET() {
   try {
     await client.sql`BEGIN`;
     //await seedUsers();
     // await seedContributors();
    //await seedRefreshments();
    //await seedTags();
      //await seedSelections();
      //await seedFormats();
     await client.sql`COMMIT`;

     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await client.sql`ROLLBACK`;
     return Response.json({ error }, { status: 500 });
   }
}
