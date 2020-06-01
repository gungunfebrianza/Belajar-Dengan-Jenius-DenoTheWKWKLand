interface IPerson {
  firstName: string;
  greet(): void;
}
class Person implements IPerson {
  firstName: string;
  constructor(inFirstName: string) {
    this.firstName = inFirstName;
  }
  greet() {
    console.log(`Hello, ${this.firstName}`);
  }
}
const p = new Person("Frank");
p.greet();
