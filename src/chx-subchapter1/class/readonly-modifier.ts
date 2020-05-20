class Person5 {
  readonly firstName: string;
  constructor(firstName: string, public lastname: string, public age: number) {
    this.firstName = firstName;
  }
}

const hooman = new Person5("Maudy", "Ayunda", 25);
//hooman.firstName = "Change it!!";
console.log(hooman.lastname); //Ayunda
