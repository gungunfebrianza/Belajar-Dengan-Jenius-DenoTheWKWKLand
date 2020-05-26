var Person = /** @class */ (function () {
    function Person(inFirstName) {
        this.firstName = inFirstName;
    }
    Person.prototype.greet = function () {
        alert("Hello, " + this.firstName);
    };
    return Person;
}());
var p = new Person("Frank");
p.greet();
//# sourceMappingURL=iperson.js.map