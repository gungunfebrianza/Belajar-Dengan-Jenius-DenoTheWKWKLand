  import { walk } from "https://deno.land/std/fs/mod.ts";

  // Async
  async function printFilesNames() {
    for await (const entry of walk(".")) {
      console.log(entry.path);
    }
  }

  printFilesNames().then(() => console.log("Done!"));
