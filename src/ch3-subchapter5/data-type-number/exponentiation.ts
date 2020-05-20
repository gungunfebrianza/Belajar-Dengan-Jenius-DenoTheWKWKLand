  let num: number = 1225.30;
  console.log(num.toExponential()); //"1.2253+3"
  console.log(num.toExponential(1)); //"1.22e+3"
  console.log(num.toExponential(2)); //"1.23e+3"
  console.log(num.toExponential(4)); //"1.22253e+3"
  console.log(num.toExponential(5)); //"1.22530e+3"
  console.log(1.2e+3); //1200
  console.log(1.23e+3); //1230
  console.log(1.2253e+3); //1225.3
  console.log(1.22530e+3); //1225.3
