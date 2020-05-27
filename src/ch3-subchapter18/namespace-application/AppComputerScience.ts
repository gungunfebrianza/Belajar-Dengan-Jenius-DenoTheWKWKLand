///<reference path = "LibDataStructure.ts" />
///<reference path = "ClassDataStructure.ts" />
const stack = new DataStructure.Stack(["Maudy", "Ayunda"]);
console.log(stack.peek());
stack.push("Gun Gun");
console.log(stack);
// StackDataStructure { _stack: [ "Maudy", "Ayunda", "Gun Gun" ] }
stack.pop();
console.log(stack);
//StackDataStructure { _stack: [ "Maudy", "Ayunda" ] }
