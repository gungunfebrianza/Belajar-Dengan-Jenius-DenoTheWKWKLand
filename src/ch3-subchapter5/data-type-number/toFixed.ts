console.log(0.1 + 0.2);
//0.30000000000000004
console.log((0.1 + 0.2).toFixed(2));
//0.30
console.log(typeof (0.1 + 0.2).toFixed(2));
//string

let sum = 0.1 + 0.2;
console.log(sum.toFixed(2));
//0.3

console.log(typeof +sum.toFixed(2));
//"number"

console.log(typeof sum.toFixed(2));
//"string"
