const exampleMap6 = new Map();
exampleMap6.set("1", "Maudy");
exampleMap6.set(1, "Ayunda");
exampleMap6.set(true, "Faza");

for (const k of exampleMap6.keys()) {
  console.log(k);
}
/* 
  1
  1
  true 
  */
