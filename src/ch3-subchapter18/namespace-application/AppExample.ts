///<reference path = "LibDataStructure.ts" />
///<reference path = "ClassDataStructure.ts" />
const ObjStack = new DataStructure.Stack(["Maudy", "Ayunda"]);
console.log(ObjStack.peek());
ObjStack.push("Gun Gun");
console.log(ObjStack);
ObjStack.pop();
console.log(ObjStack);
/* 
Ayunda
Stack { _stack: [ "Maudy", "Ayunda", "Gun Gun" ] }
Stack { _stack: [ "Maudy", "Ayunda" ] } 
*/

const ObjQueue = new DataStructure.Queue(["Gun Gun", "Febrianza"]);
console.log(ObjQueue.peek());
ObjQueue.enqueue("Maudy");
console.log(ObjQueue);
ObjQueue.dequeue();
console.log(ObjQueue);
/* 
Gun Gun
Queue { _queue: [ "Gun Gun", "Febrianza", "Maudy" ] }
Queue { _queue: [ "Febrianza", "Maudy" ] } 
*/
