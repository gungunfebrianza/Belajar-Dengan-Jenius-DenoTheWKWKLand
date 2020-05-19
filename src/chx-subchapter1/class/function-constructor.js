function person(firstname, lastname, age, eyecolor) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.eyecolor = eyecolor;
}

person.prototype.getName = function() {
  return this.firstname + " " + this.lastname;
};
