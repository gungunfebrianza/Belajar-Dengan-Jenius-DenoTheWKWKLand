var x: number = Number.MAX_SAFE_INTEGER + 1;
var y: number = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// expected output: 9007199254740991

console.log(x);
// expected output: 9007199254740992

console.log(x === y);
// expected output: true
