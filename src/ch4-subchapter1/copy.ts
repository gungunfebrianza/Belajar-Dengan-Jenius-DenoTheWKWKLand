import { copy } from "https://deno.land/std/fs/mod.ts";

const res = copy("./x", "./folder/x", { overwrite: true });
res.then(() => {
  console.log("Copied");
}).catch((err) => {
  console.log(err);
});
