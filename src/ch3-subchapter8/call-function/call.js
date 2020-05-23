var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var person1 = {
  firstName: "Gun Gun",
  lastName: "Febrianza",
};

var x = person.fullName.call(person1);
console.log(x); //Gun Gun Febrianza
