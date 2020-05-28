import { move } from "https://deno.land/std/fs/mod.ts";

const res = move("./a.text", "./folder/b.txt");
res.then(() => {
  console.log("Moved");
}).catch((err) => {
  console.log(err);
});
