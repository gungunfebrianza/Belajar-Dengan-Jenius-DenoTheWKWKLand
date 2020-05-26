class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
  ) {}
}

  class Agent extends Person {
    constructor(
      firstName: string,
      lastName: string,
      age: number,
      public division: string,
    ) {
      super(firstName, lastName, age);
    }
  }

  const CIA = new Agent("Gun Gun", "Febrianza", 28, "IT");
  console.log(CIA.division); //IT
