import { objCustomConfig } from "./db.ts";
import { ClientPostgreSQL, nessieConfig } from "./deps.ts";

const config: nessieConfig = {
  client: new ClientPostgreSQL(`./migrations`, objCustomConfig.DBPGConfig),
};

export default config;
