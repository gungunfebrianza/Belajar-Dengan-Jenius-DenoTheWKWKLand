var DataStructure;
(function (DataStructure) {
    DataStructure.library = "Data Structure Library";
})(DataStructure || (DataStructure = {}));
///<reference path = "LibDataStructure.ts" />
var DataStructure;
(function (DataStructure) {
    var Stack = /** @class */ (function () {
        function Stack(s) {
            if (s === void 0) { s = [""]; }
            this._stack = s;
        }
        Stack.prototype.push = function (input) {
            this._stack.push(input);
        };
        Stack.prototype.pop = function () {
            this._stack.pop();
        };
        Stack.prototype.isEmpty = function () {
            return this._stack.length == 0;
        };
        Stack.prototype.peek = function () {
            return !this.isEmpty()
                ? this._stack[this._stack.length - 1]
                : "Empty Stack";
        };
        return Stack;
    }());
    DataStructure.Stack = Stack;
})(DataStructure || (DataStructure = {}));
///<reference path = "LibDataStructure.ts" />
///<reference path = "ClassDataStructure.ts" />
var ObjStack = new DataStructure.Stack(["Maudy", "Ayunda"]);
console.log(ObjStack.peek());
ObjStack.push("Gun Gun");
console.log(ObjStack);
// StackDataStructure { _stack: [ "Maudy", "Ayunda", "Gun Gun" ] }
ObjStack.pop();
console.log(ObjStack);
//StackDataStructure { _stack: [ "Maudy", "Ayunda" ] }
