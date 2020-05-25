const exampleMap8 = new Map();
exampleMap8.set("1", "Maudy");
exampleMap8.set(1, "Ayunda");
exampleMap8.set(true, "Faza");

  for (const [k,v] of exampleMap8.entries()) {
    console.log(k,v);
  }
  /* 
  1 Maudy
  1 Ayunda
  true Faza
  */
