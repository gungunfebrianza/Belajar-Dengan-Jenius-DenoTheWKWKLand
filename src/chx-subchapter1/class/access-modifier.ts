class Person1 {
  public firstName = "";
  public lastName = "";
  private age = 0;
  public eyecolor = "";

  protected getFullName(): string {
    return `Fullname : ${this.firstName} ${this.lastName}`;
  }
}

class Agent extends Person1 {
  division = "";

  sayHello(): void {
    this.getFullName();
  }
}
