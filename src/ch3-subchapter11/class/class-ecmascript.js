class person {
  constructor(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
  }
  getName() {
    return this.firstname + " " + this.lastname;
  }
}
