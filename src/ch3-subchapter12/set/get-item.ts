const exampleMap2 = new Map();
console.log(exampleMap2.set("1", "Maudy"));
// Map { "1" => "Maudy" }
console.log(exampleMap2.set(1, "Ayunda"));
// Map { "1" => "Maudy", 1 => "Ayunda" }
console.log(exampleMap2.set(true, "Faza"));
// Map { "1" => "Maudy", 1 => "Ayunda", true => "Faza" }

  console.log(exampleMap2.get("1"));
  console.log(exampleMap2.get(1));
  console.log(exampleMap2.get(true));
  /* 
  Maudy
  Ayunda
  Faza 
  */