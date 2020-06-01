const multi: number[][] = [[1, 2, 3], [23, 24, 25]];
console.log(multi[0][0]);
console.log(multi[0][1]);
console.log(multi[0][2]);
console.log(multi[1][0]);
console.log(multi[1][1]);
console.log(multi[1][2]);
/* 
  1
  2
  3
  23
  24
  25 */

var i: number = 0;
for (i; i < multi.length; i++) {
  for (let j: number = 0; j < multi[i].length; j++) {
    console.log(multi[i][j]);
  }
}
