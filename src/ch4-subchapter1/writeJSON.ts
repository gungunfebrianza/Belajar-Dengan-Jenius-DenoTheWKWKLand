import { writeJson } from "https://deno.land/std/fs/mod.ts";

const user = writeJson("./user.json", { name: "Maudy" }, { spaces: 2 });
user.then(() => console.log("Done"));
