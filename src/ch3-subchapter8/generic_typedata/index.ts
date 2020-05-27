// function using  generic
function person <T> (name: T, age: T) : void {
   console.log(`my name ${name} and age ${age}`);
}
person <string> ("john doe", "30");


// class using generic
class Profile <T, U>  {
   name: T;
   age: U;
   constructor(name: T, age: U) {
     this.name = name;
     this.age = age;
   }
}
const resultProfile = new Profile<string, number>("john doe", 23);
console.log(resultProfile);
