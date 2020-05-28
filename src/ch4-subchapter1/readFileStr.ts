import { readFileStr } from "https://deno.land/std/fs/mod.ts";

const res = readFileStr("./surat.txt", { encoding: "utf8" });
res.then((result) => {
  console.log(result);
});
