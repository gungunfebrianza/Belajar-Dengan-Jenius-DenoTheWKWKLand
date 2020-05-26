var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startEngine = function () {
        return true;
    };
    Car.prototype.stopEngine = function () {
        return true;
    };
    Car.prototype.brake = function () {
        return true;
    };
    Car.prototype.accelerate = function (speed) {
        console.log("Driving Faster");
    };
    Car.prototype.honk = function (howLong) {
        console.log("beep beep beep");
    };
    Car.prototype.onlyOnTypeCar = function (howLong) {
        console.log("beep beep beep");
    };
    return Car;
}());
var typeCar = new Car();
typeCar.onlyOnTypeCar(2);
var typeMotorVechile = new Car();
typeMotorVechile.startEngine();
//# sourceMappingURL=motorvechile.js.map