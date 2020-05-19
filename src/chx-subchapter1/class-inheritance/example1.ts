class Person2 {
  firstName = "";
  lastName = "";
  age = 0;
  eyecolor = "";

  getFullName(): string {
    return `Fullname : ${this.firstName} ${this.lastName}`;
  }
}

class Agent2 extends Person2 {
  division = "";
}

const FBI = new Agent2();
FBI.firstName = "Gun Gun Febrianza";
