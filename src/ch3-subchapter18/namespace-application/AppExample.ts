///<reference path = "LibDataStructure.ts" />
///<reference path = "ClassDataStructure.ts" />
const ObjStack = new DataStructure.Stack(["Maudy", "Ayunda"]);
console.log(ObjStack.peek());
ObjStack.push("Gun Gun");
console.log(ObjStack);
// StackDataStructure { _stack: [ "Maudy", "Ayunda", "Gun Gun" ] }
ObjStack.pop();
console.log(ObjStack);
//StackDataStructure { _stack: [ "Maudy", "Ayunda" ] }
//Ayunda