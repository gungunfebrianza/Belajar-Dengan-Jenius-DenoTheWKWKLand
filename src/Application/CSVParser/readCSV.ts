import { readCSV } from "https://deno.land/x/csv/mod.ts";

const f = await Deno.open("./example.csv");

for await (const row of readCSV(f)) {
  console.log("row:");
  for await (const cell of row) {
    console.log(`  cell: ${cell}`);
  }
}

f.close();
