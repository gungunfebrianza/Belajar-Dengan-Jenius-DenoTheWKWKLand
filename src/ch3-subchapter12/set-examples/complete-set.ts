let usarsMap = new Map();

//Set entries
usarsMap.set("Maudy", 25);
usarsMap.set("Ayunda", 26);
usarsMap.set("Gun Gun", 27);

//Get entries
usarsMap.get("Maudy"); //25

//Check entry is present or not
usarsMap.has("Maudy"); //true
usarsMap.has("Yuma"); //false

//Size of Map with
usarsMap.size; //3

//Delete an entry
usarsMap.delete("Ayunda"); // true

//Clear whole Map
usarsMap.clear(); //Clear all entries
