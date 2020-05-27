var ComputerScience;
(function (ComputerScience) {
    ComputerScience.course = "Computer Science";
})(ComputerScience || (ComputerScience = {}));
///<reference path = "IComputerScience.ts" />
var ComputerScience;
(function (ComputerScience) {
    var StackDataStructure = /** @class */ (function () {
        function StackDataStructure(s) {
            if (s === void 0) { s = [""]; }
            this._stack = s;
        }
        StackDataStructure.prototype.pushMethod = function (input) {
            this._stack.push(input);
        };
        StackDataStructure.prototype.popMethod = function () {
            this._stack.pop();
        };
        StackDataStructure.prototype.peekMethod = function () {
            return this._stack[this._stack.length - 1];
        };
        return StackDataStructure;
    }());
    ComputerScience.StackDataStructure = StackDataStructure;
})(ComputerScience || (ComputerScience = {}));
///<reference path = "IComputerScience.ts" />
///<reference path = "OComputerScience.ts" />
var stack = new ComputerScience.StackDataStructure(["Maudy", "Ayunda"]);
console.log(stack.peekMethod());
stack.pushMethod("Gun Gun");
console.log(stack);
// StackDataStructure { _stack: [ "Maudy", "Ayunda", "Gun Gun" ] }
stack.popMethod();
console.log(stack);
//StackDataStructure { _stack: [ "Maudy", "Ayunda" ] }
