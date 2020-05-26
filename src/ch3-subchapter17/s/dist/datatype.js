"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.City = exports.Product = exports.Person = void 0;
class Person {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
}
exports.Person = Person;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
class City {
    constructor(name, population) {
        this.name = name;
        this.population = population;
    }
}
exports.City = City;
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
exports.Employee = Employee;
