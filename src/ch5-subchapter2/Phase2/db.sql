CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "user" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "avatar" character varying(255),
  "displayName" character varying(128) NOT NULL,
  "active" boolean NOT NULL DEFAULT false,
  "email" character varying NOT NULL,
  "password" character varying NOT NULL,
  "birthDate" TIMESTAMP,
  CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
  CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"));
