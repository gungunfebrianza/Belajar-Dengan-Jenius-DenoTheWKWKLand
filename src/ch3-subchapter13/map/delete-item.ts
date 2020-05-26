const exampleMap3 = new Map();
console.log(exampleMap3.set("1", "Maudy"));
// Map { "1" => "Maudy" }
console.log(exampleMap3.set(1, "Ayunda"));
// Map { "1" => "Maudy", 1 => "Ayunda" }
console.log(exampleMap3.set(true, "Faza"));
// Map { "1" => "Maudy", 1 => "Ayunda", true => "Faza" }

exampleMap3.delete(true);
console.log(exampleMap3);
//Map { "1" => "Maudy", 1 => "Ayunda" }