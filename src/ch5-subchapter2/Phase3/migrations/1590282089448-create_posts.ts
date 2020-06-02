import { Schema, dbDialects } from "../deps.ts";

const dialect: dbDialects = "pg";

export const up = (): string => {
  let query = new Schema(dialect).create("posts", (table: any) => {
    table.uuid("id").primary();
    table.text("title").notNullable();
    table.text("body").notNullable();
    table.uuid("user_id").notNullable();
    table.custom("foreign key (user_id) references users");
  });
  return query;
};

export const down = (): string => {
  return new Schema(dialect).drop("posts");
};
