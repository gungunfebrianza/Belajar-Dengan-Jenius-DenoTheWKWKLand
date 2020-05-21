interface IPerson {
  firstName: string;
  greet(): void;
}

class Test implements IPerson{

}
class Person implements Test {
  firstName: string;
  constructor(inFirstName: string) {
    this.firstName = inFirstName;
  }
  greet() {
    alert(`Hello, ${this.firstName}`);
  }
}
const p = new Person("Frank");
p.greet();
