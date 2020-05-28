import { ensureDir, ensureDirSync } from "https://deno.land/std/fs/mod.ts";

ensureDir("./logs").then(
  () => console.log("Success Created"),
).catch((err) => console.log(`Error ${err}`));
