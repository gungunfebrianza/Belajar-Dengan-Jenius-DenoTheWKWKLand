import { Person, Product } from "./datatype";
let people = [
  new Person("Bob Smith", "London"),
  new Person("Dora Peters", "New York"),
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
[...people, ...products].forEach((item) =>
  console.log(`Item:
${item.name}`)
);
