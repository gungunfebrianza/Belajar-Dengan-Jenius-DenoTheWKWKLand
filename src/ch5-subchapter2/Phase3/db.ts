import { PostgresClient, ConnectionOptions, envConfig } from "./deps.ts";

envConfig();

const dbConfig: ConnectionOptions = {
  hostname: Deno.env.get("DB_HOST"),
  port: +Deno.env.get("DB_PORT")!,
  user: Deno.env.get("DB_USER"),
  database: Deno.env.get("DB_DATABASE"),
  password: Deno.env.get("DB_PASSWORD")
};

const client = new PostgresClient({
  user: "maudy",
  database: "blogapp",
  hostname: "localhost",
  port: 5432,
  password: "ayunda",
});

await client.connect();

export default client;
