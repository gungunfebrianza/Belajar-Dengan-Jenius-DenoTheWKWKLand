class Person3 {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
  ) {}
  protected getFullName(): string {
    return `Fullname : ${this.firstName} ${this.lastName}`;
  }
}

class Agent3 extends Person3 {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    public division: string,
  ) {
    super(firstName, lastName, age);
  }
  getFullName(): string {
    return `Agent ${this.firstName} ${this.lastName}`;
  }
  /*   getFullName(): string {
    return `Agent ${super.getFullName()}`;
  } */
}

const CIA3 = new Agent3("Gun Gun", "Febrianza", 28, "IT");
console.log(CIA3.getFullName()); //Agent Gun Gun Febrianza
