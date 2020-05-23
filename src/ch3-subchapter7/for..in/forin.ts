  let arr: number[] = [10, 20, 30, 40];

  for (let index in arr) {
    console.log(index); // prints indexes: 0, 1, 2, 3
    console.log(arr[index]); // prints elements: 10, 20, 30, 40
  }
  /* 
  0
  10
  1
  20
  2
  30
  3
  40 */