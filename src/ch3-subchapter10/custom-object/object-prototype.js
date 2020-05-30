function Person(firstname, lastname, age, eyecolor) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.eyecolor = eyecolor;
}

Person.prototype.skill = "singing"; // -- Prototype

var maudy = new Person("Maudy", "Ayunda Faza", 23, "Black");

console.log(maudy.skill); //singing
