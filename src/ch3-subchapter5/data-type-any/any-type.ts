var x: any = 4; // Explicitly typed
x = "Bisa sebuah string";
x = false;

var y; // Same as y: any
var z: { a; b }; // Same as z: { a: any; b: any; }

function f(x) { // Same as f(x: any): void
  console.log(x);
}
