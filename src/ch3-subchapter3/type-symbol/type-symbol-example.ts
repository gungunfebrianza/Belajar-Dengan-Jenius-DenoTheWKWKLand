const symbol = Symbol();
console.log(String(symbol));
// Symbol()

var sym1 = Symbol("test");
var sym2 = Symbol("test");
console.log(sym1 === sym2);
// false

const symbol1 = Symbol("symbol1");
console.log(String(symbol1));
