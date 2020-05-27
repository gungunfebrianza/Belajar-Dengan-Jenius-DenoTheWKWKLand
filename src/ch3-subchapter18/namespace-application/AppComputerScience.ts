///<reference path = "LibDataStructure.ts" />
///<reference path = "ClassDataStructure.ts" />
const stack = new DataStructure.Stack(["Maudy", "Ayunda"]);
console.log(stack.peekMethod());
stack.pushMethod("Gun Gun");
console.log(stack);
// StackDataStructure { _stack: [ "Maudy", "Ayunda", "Gun Gun" ] }
stack.popMethod();
console.log(stack);
//StackDataStructure { _stack: [ "Maudy", "Ayunda" ] }
