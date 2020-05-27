import { listenAndServe } from "https://deno.land/std@0.50.0/http/server.ts";
import { env } from "./helpers/env.ts";
import { httpRouter } from "./helpers/routers.ts";
import { indexRoute } from "./routes/index.route.ts";
// run server
listenAndServe({ port: env("PORT", 3000).PORT }, httpRouter);
// register route
indexRoute();
