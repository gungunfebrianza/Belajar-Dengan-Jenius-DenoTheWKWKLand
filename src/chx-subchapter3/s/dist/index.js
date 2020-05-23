"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datatype_1 = require("./datatype");
let people = [
    new datatype_1.Person("Bob Smith", "London"),
    new datatype_1.Person("Dora Peters", "New York"),
];
let products = [new datatype_1.Product("Running Shoes", 100), new datatype_1.Product("Hat", 25)];
[...people, ...products].forEach((item) => console.log(`Item:
${item.name}`));
