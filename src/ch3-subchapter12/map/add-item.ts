const exampleMap = new Map();
console.log(exampleMap.set("1", "Maudy"));
// Map { "1" => "Maudy" }
console.log(exampleMap.set(1, "Ayunda"));
// Map { "1" => "Maudy", 1 => "Ayunda" }
console.log(exampleMap.set(true, "Faza"));
// Map { "1" => "Maudy", 1 => "Ayunda", true => "Faza" }
