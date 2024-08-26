import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { refreshments, contributors, users } from '../lib/placeholder-data';

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
       title NOT NULL,
       content NOT NULL,
       image_url VARCHAR(255) NOT NULL,
       status VARCHAR(255) NOT NULL,
       date DATE NOT NULL
     );
   `;

   const insertedRefreshments = await Promise.all(
    refreshments.map(
       (refreshment) => client.sql`
         INSERT INTO invoices (contributor_id, title, content, image_url, status, date)
         VALUES (${refreshment.contributor_id}, ${refreshment.title}, ${refreshment.content}, ${refreshment.image_url},  ${refreshment.status}, ${refreshment.date})
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
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       image_url VARCHAR(255) NOT NULL
     );
   `;

   const insertedContributors = await Promise.all(
    contributors.map(
       (contributor) => client.sql`
         INSERT INTO contributor (id, name, email, image_url)
         VALUES (${contributor.id}, ${contributor.name}, ${contributor.email}, ${contributor.image_url})
         ON CONFLICT (id) DO NOTHING;
       `,
     ),
   );

   return insertedContributors;
 }


export async function GET() {
   try {
     await client.sql`BEGIN`;
     await seedUsers();
     await seedContributors();
     await seedRefreshments();
     await client.sql`COMMIT`;

     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await client.sql`ROLLBACK`;
     return Response.json({ error }, { status: 500 });
   }
}
