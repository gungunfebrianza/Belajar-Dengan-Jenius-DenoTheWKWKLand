import { Client } from "https://deno.land/x/postgres/mod.ts";

const client = new Client({
  user: "maudy",
  database: "earth",
  hostname: "localhost",
  port: 5432,
  password: "ayunda",
});

await client.connect();

export default client;
