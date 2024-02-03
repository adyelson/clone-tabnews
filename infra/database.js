import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  console.log("Credenciais do postgress:", {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);

    return result; //rever a posição
  } catch (err) {
    console.error(err ? err.stack : result.rows[0].message);
    throw error;
  } finally {
    await client.end();
  }
  // const result = await client.query(queryObject);
  // await client.end();
}

export default {
  query: query,
};
