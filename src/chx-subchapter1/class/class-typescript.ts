class Person {
  firstName = "";
  lastName = "";
  age = 0;
  eyecolor = "";

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

  const hooman = new Person();
  hooman.firstName = "Maudy";
  hooman.lastName = "Ayunda";
  hooman.age = 25;
  hooman.eyecolor = "Brown";
  console.log(hooman.getFullName());
