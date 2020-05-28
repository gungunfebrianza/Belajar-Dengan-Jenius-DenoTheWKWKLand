import { readJson } from "https://deno.land/std/fs/mod.ts";

const res = await readJson("./user.json");
console.log(res);
// { name: "Maudy" }
