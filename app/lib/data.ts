import { sql } from '@vercel/postgres';
import {
  ContributorField,
  ContributorsTableType,
  RefreshmentForm,
  RefreshmentTable,
  //LatestRefreshmentRaw,
  LatestRefreshment,
  User,
  Contributor, 
  Refreshment,
} from './definitions';
//import { formatCurrency } from './utils';


export async function fetchLatestRefreshments() {
  try {
    const data = await sql<LatestRefreshment>`
      SELECT contributors.name, contributors.image_url, contributors.email, refreshments.id, refreshments.title, refreshments.content, refreshments.tags, refreshments.image_url
      FROM refreshments
      JOIN contributors ON refreshments.contributor_id = contributors.id
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
    const refreshments = await sql<RefreshmentTable>`
      SELECT
        refreshments.id,
        refreshments.title,
        refreshments.content,
        refreshments.image_url,
        refreshments.tags,
        refreshments.date,
        refreshments.status,
        contributors.name,
        contributors.email,
        contributors.image_url
      FROM refreshments
      JOIN contributors ON refreshments.contributor_id = contributors.id
      WHERE
        contributors.name ILIKE ${`%${query}%`} OR
        contributors.email ILIKE ${`%${query}%`} OR
        refreshments.title::text ILIKE ${`%${query}%`} OR
        refreshments.content::text ILIKE ${`%${query}%`} OR
        refreshments.image_url::text ILIKE ${`%${query}%`} OR
        refreshments.tags::text ILIKE ${`%${query}%`} OR
        refreshments.date::text ILIKE ${`%${query}%`} OR
        refreshments.status ILIKE ${`%${query}%`}
      ORDER BY refreshments.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return refreshments.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch refreshments.');
  }
}

export async function fetchRefreshmentsPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM refreshments
    JOIN contributors ON refreshments.contributor_id = contributors.id
    WHERE
      contributors.name ILIKE ${`%${query}%`} OR
      contributors.email ILIKE ${`%${query}%`} OR
      refreshments.title::text ILIKE ${`%${query}%`} OR
      refreshments.content::text ILIKE ${`%${query}%`} OR
      refreshments.image_url::text ILIKE ${`%${query}%`} OR
      refreshments.tags::text ILIKE ${`%${query}%`} OR
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
        refreshments.status
      FROM refreshments
      WHERE refreshments.id = ${id};
    `;

    const refreshment = data.rows.map((refreshment) => ({
      ...refreshment,
    }));

    console.log(refreshment); // Refreshment is an empty array []
    return refreshment[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch refreshment.');
  }
}

export async function fetchContributors() {
  try {
    const data = await sql<ContributorField>`
      SELECT
        id,
        name
      FROM contributors
      ORDER BY name ASC
    `;

    const contributors = data.rows;
    return contributors;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all contributors.');
  }
}

export async function fetchFilteredContributors(query: string) {
  try {
    const data = await sql<ContributorsTableType>`
		SELECT
		  contributors.id,
		  contributors.name,
		  contributors.email,
		  contributors.image_url,
		  COUNT(refreshments.id) AS total_refreshments,
		FROM contributors
		LEFT JOIN refreshments ON contributors.id = refreshments.contributor_id
		WHERE
		  contributors.name ILIKE ${`%${query}%`} OR
        contributors.email ILIKE ${`%${query}%`}
		GROUP BY contributors.id, contributors.name, contributors.email, contributors.image_url
		ORDER BY contributors.name ASC
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
