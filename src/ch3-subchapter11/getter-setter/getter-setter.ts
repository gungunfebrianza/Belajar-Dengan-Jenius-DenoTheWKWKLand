class Person4 {
  constructor(
    public firstName: string,
    public lastName: string,
    private _age: number,
  ) {}

  get age(): number {
    return this._age;
  }
  set age(newAge: number) {
    this._age = newAge;
  }
}

const Maudy = new Person4("Maudy", "Ayunda", 25);
Maudy.age = 26;
if (Maudy.age) {
  console.log(Maudy.age);
}
