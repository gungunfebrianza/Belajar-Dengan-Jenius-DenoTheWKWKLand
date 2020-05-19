class Person {
  firstName = "";
  lastName = "";
  age = 0;
  eyecolor = "";

  getName(): string {
    return this.firstName + " " + this.lastName;
  }
}
