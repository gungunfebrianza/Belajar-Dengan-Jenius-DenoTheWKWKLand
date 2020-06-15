import { writeCSV } from "https://deno.land/x/csv/mod.ts";

const f = await Deno.open("./example.csv", {
  write: true,
  create: true,
  truncate: true,
});
const rows = [
  ["a", "b", "c"],
  ["1", "2", "3"],
];

await writeCSV(f, rows);

f.close();
