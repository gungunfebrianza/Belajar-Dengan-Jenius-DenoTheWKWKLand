const asyncAdd = (a: number, b: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number.isInteger(a) && Number.isInteger(b)) {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers");
      }
    }, 1500);
  });
};

asyncAdd(5, 7.2).then(
  (res) => {
    console.log("Result:", res);
  },
  (errorMessage) => {
    console.log(errorMessage);
  }
);
/*  
Result: 12
Arguments must be numbers 
*/
