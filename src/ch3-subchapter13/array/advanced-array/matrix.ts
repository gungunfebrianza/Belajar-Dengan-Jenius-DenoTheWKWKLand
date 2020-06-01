const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]); //5

var i: number = 0;
for (i; i < matrix.length; i++) {
  for (let j: number = 0; j < matrix[i].length; j++) {
    console.log("Matrix[" + i + "][" + j + "] = " + matrix[j]);
  }
}

/* 
  Matrix[0][0] = 1,2,3
  Matrix[0][1] = 4,5,6
  Matrix[0][2] = 7,8,9
  Matrix[1][0] = 1,2,3
  Matrix[1][1] = 4,5,6
  Matrix[1][2] = 7,8,9
  Matrix[2][0] = 1,2,3
  Matrix[2][1] = 4,5,6
  Matrix[2][2] = 7,8,9 
  */
