namespace MyFirstNamespace {
  export let sweethome = "Maudy Ayunda";
  export function sayName() {
    console.log(sweethome);
  }
}
console.log(MyFirstNamespace.sweethome);
MyFirstNamespace.sayName();
console.log(typeof MyFirstNamespace); //Object
