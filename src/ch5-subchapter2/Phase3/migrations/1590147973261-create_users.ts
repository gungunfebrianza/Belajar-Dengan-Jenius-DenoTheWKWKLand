import { Schema, dbDialects, uuid } from "../deps.ts";

const dialect: dbDialects = "pg";

export const up = (): string => {
  let query = new Schema(dialect).create("users", (table: any) => {
    table.uuid("id").primary();
    table.text("name").notNullable();
    table.text("email").notNullable().unique();
    table.text("password").notNullable();
  });

  query += new Schema(dialect).queryString(
    `INSERT INTO users VALUES ('${uuid.generate()}', 'Deno', 'deno@gmail.com', 'denodenodeno');`
  );

  return query;
};

export const down = (): string => {
  return new Schema(dialect).drop("users");
};
