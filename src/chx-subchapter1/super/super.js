var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Person;
}());
var Agent = /** @class */ (function (_super) {
    __extends(Agent, _super);
    function Agent(firstName, lastName, age, division) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.division = division;
        return _this;
    }
    return Agent;
}(Person));
var CIA = new Agent("Gun Gun", "Febrianza", 28, "IT");
console.log(CIA.division); //IT
