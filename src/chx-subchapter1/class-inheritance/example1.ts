class Person {
  firstName = "";
  lastName = "";
  age = 0;
  eyecolor = "";

   getFullName(): string {
    return `Fullname : ${this.firstName} ${this.lastName}`;
  }
}

  class Agent extends Person {
    division = "";
  }
