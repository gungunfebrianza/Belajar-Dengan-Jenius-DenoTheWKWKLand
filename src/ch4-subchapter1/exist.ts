  import { exists } from "https://deno.land/std/fs/mod.ts";

  exists("./logs").then((result) => console.log(result));
  exists("./foo").then((result) => console.log(result));
  /* 
  true
  false 
  */