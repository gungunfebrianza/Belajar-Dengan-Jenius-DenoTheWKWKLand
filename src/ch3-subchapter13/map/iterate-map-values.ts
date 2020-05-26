const exampleMap7 = new Map();
exampleMap7.set("1", "Maudy");
exampleMap7.set(1, "Ayunda");
exampleMap7.set(true, "Faza");

for (const v of exampleMap7.values()) {
  console.log(v);
}
/* 
  Maudy
  Ayunda
  Faza
  */
