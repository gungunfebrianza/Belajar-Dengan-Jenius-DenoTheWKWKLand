const integerAddition = (a: number, b: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number.isInteger(a) && Number.isInteger(b)) {
        resolve(a + b);
      } else {
        reject("Arguments must be integer");
      }
    }, 1500);
  });
};

integerAddition(5, 7.2).then(
  (res) => {
    console.log("Result:", res);
  },
  (errorMessage) => {
    console.log(errorMessage);
  }
);
/*  
  Result: 12
Arguments must be integer 
*/
