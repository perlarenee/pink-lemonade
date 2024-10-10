import { sql } from '@vercel/postgres';
import {
  ContributorField,
  ContributorsTableType,
  RefreshmentForm,
  RefreshmentsTable,
  //LatestRefreshmentRaw,
  LatestRefreshment,
  User,
  Contributor, 
  Refreshment,
  Selections,
  RefreshmentsContributorsTable,
  TagField,
  FormatField
} from './definitions';
//import { formatCurrency } from './utils';


export async function fetchLatestRefreshments() {
  try {
    const data = await sql<LatestRefreshment>`
      SELECT contributors.cont_name, contributors.cont_image_url, contributors.cont_email, refreshments.id, refreshments.title, refreshments.content, refreshments.tags, refreshments.format, refreshments.length, refreshments.image_url
      FROM refreshments
      JOIN contributors ON refreshments.contributor_id = contributors.cont_id
      ORDER BY refreshments.date DESC
      LIMIT 5`;

    const latestRefreshments = data.rows.map((refreshment) => ({
      ...refreshment,
    }));
    return latestRefreshments;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest refreshments.');
  }
}


const ITEMS_PER_PAGE = 6;
export async function fetchFilteredRefreshments(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    const refreshments = await sql<RefreshmentsTable>`
      SELECT
        refreshments.id,
        refreshments.title,
        refreshments.content,
        refreshments.image_url,
        refreshments.tags,
        refreshments.format, 
        refreshments.length, 
        refreshments.date,
        refreshments.contributor_id,
        refreshments.status,
        contributors.cont_name,
        contributors.cont_email,
        contributors.cont_image_url
      FROM refreshments
      JOIN contributors ON refreshments.contributor_id = contributors.cont_id
      WHERE
        contributors.cont_name ILIKE ${`%${query}%`} OR
        contributors.cont_email ILIKE ${`%${query}%`} OR
        refreshments.title::text ILIKE ${`%${query}%`} OR
        refreshments.contributor_id::text ILIKE ${`%${query}%`} OR
        refreshments.content::text ILIKE ${`%${query}%`} OR
        refreshments.image_url::text ILIKE ${`%${query}%`} OR
        refreshments.tags::text ILIKE ${`%${query}%`} OR
        refreshments.format::text ILIKE ${`%${query}%`} OR
        refreshments.length::text ILIKE ${`%${query}%`} OR
        refreshments.date::text ILIKE ${`%${query}%`} OR
        refreshments.status ILIKE ${`%${query}%`}
      ORDER BY refreshments.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
   // console.log('Data fetch completed after 3 seconds.');
    return refreshments.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch refreshments.');
  }
}

export async function fetchFilteredRefreshmentTableWContributors(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try{
    const data = await sql<RefreshmentsContributorsTable>`
      SELECT
          refreshments.id,
          refreshments.title,
          refreshments.content,
          refreshments.image_url,
          refreshments.tags,
          refreshments.format, 
          refreshments.length, 
          refreshments.date,
          refreshments.contributor_id,
          refreshments.status,
          contributors.cont_name,
          contributors.cont_email,
          contributors.cont_image_url
        FROM refreshments
        JOIN contributors ON refreshments.contributor_id = contributors.cont_id
        WHERE
          contributors.cont_name ILIKE ${`%${query}%`} OR
          contributors.cont_email ILIKE ${`%${query}%`} OR
          refreshments.title::text ILIKE ${`%${query}%`} OR
          refreshments.contributor_id::text ILIKE ${`%${query}%`} OR
          refreshments.content::text ILIKE ${`%${query}%`} OR
          refreshments.image_url::text ILIKE ${`%${query}%`} OR
          refreshments.tags::text ILIKE ${`%${query}%`} OR
          refreshments.format::text ILIKE ${`%${query}%`} OR
          refreshments.length::text ILIKE ${`%${query}%`} OR
          refreshments.date::text ILIKE ${`%${query}%`} OR
          refreshments.status ILIKE ${`%${query}%`}
        ORDER BY refreshments.date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `

    const ref = data.rows.map((refreshments) => ({
      ...refreshments,
      // Convert amount from cents to dollars
      //amount: invoice.amount / 100,
    }));

    console.log(ref);
    return ref;


  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch refreshments and contributors data.');
  }
  //const refreshments = await fetchFilteredRefreshments(query, currentPage);



  

}

export async function fetchRefreshmentsPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM refreshments
    JOIN contributors ON refreshments.contributor_id = contributors.cont_id
    WHERE
      contributors.cont_name ILIKE ${`%${query}%`} OR
      contributors.cont_email ILIKE ${`%${query}%`} OR
      refreshments.title::text ILIKE ${`%${query}%`} OR
      refreshments.content::text ILIKE ${`%${query}%`} OR
      refreshments.image_url::text ILIKE ${`%${query}%`} OR
      refreshments.tags::text ILIKE ${`%${query}%`} OR
      refreshments.format::text ILIKE ${`%${query}%`} OR
      refreshments.length::text ILIKE ${`%${query}%`} OR
      refreshments.date::text ILIKE ${`%${query}%`} OR
      refreshments.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of refreshments.');
  }
}

export async function fetchRefreshmentById(id: string) {

  try {
    const data = await sql<RefreshmentForm>`
      SELECT
        refreshments.contributor_id,
        refreshments.id,
        refreshments.title,
        refreshments.content,
        refreshments.image_url,
        refreshments.tags,
        refreshments.format, 
        refreshments.length, 
        refreshments.status,
        refreshments.date
      FROM refreshments
      WHERE refreshments.id = ${id};
    `;

    const refreshment = data.rows.map((refreshment) => ({
      ...refreshment,
    }));

    //console.log(refreshment); // Refreshment is an empty array []
    return refreshment[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch refreshment.');
  }
}

export async function fetchContributorById(id:string){
  try {
    const data = await sql<Contributor>`
      SELECT 
      contributors.cont_id,
      contributors.cont_name,
      contributors.cont_email,
      contributors.cont_image_url
    FROM contributors
    WHERE contributors.cont_id=${id}
    `;

    const contributor = data.rows.map((contributor) => ({
      ...contributor,
    }));
    return contributor[0];

  }catch(error){
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch contributor with the id of ${id}`);
  }

}

export async function fetchSelectionsById(id:string){
try{
  const data = await sql<Selections>`
  SELECT
    selections.id,
    selections.frequency,
    selections.instances
  FROM selections
  WHERE selections.id = ${id};
`;

const selection = data.rows.map((selection)=>({
  ...selection,
}));

//console.log(selection);
return selection[0];

}catch(error){
  console.error('Database Error:', error);
  throw new Error('Failed to fetch selection.');
}

}

export async function fetchContributors() {
  try {
    const data = await sql<ContributorField>`
      SELECT
        cont_id,
        cont_name
      FROM contributors
      ORDER BY cont_name ASC
    `;

    const contributors = data.rows;
    return contributors;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all contributors.');
  }
}

export async function fetchTags(){
  try{
    const data = await sql<TagField>`
      SELECT
        id,
        slug,
        name,
        description
      FROM tags
      ORDER BY id ASC
    `;

    const tags = data.rows;
    return tags;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all tags.');
  }
}

export async function fetchFormats(){
  try{
    const data = await sql<FormatField>`
      SELECT
        id,
        slug,
        name,
        description
      FROM formats
      ORDER BY id ASC
    `;

    const formats = data.rows;
    return formats;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all formats.');
  }
}

export async function fetchFilteredContributors(query: string) {
  try {
    const data = await sql<ContributorsTableType>`
		SELECT
		  contributors.cont_id,
		  contributors.cont_name,
		  contributors.cont_email,
		  contributors.cont_image_url,
		  COUNT(refreshments.id) AS total_refreshments,
		FROM contributors
		LEFT JOIN refreshments ON contributors.cont_id = refreshments.contributor_id
		WHERE
		  contributors.cont_name ILIKE ${`%${query}%`} OR
        contributors.cont_email ILIKE ${`%${query}%`}
		GROUP BY contributors.cont_id, contributors.cont_name, contributors.cont_email, contributors.cont_image_url
		ORDER BY contributors.cont_name ASC
	  `;

    const contributors = data.rows.map((contributor) => ({
      ...contributor
    }));

    return contributors;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch contributor table.');
  }
}
