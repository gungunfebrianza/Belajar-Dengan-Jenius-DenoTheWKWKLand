import "https://deno.land/x/dotenv/load.ts";
import { PostgresClient, ConnectionOptions, envConfig } from "./deps.ts";
import { CustomConfig } from "./types.ts";

envConfig();

const dbConfig: ConnectionOptions = {
  hostname: Deno.env.get("DB_HOST"),
  port: +Deno.env.get("DB_PORT")!,
  user: Deno.env.get("DB_USER"),
  database: Deno.env.get("DB_DATABASE"),
  password: Deno.env.get("DB_PASSWORD"),
};

export const pgClient = new PostgresClient(dbConfig);

export const objCustomConfig: CustomConfig = {
  DBPGConfig: dbConfig,
  jwtSecret: Deno.env.get("JWT_SECRET")!,
};
