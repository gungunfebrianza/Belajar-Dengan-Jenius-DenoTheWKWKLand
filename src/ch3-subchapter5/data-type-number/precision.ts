  let num = new Number(27.123456);
  num.toPrecision(); // "27.123456"
  num.toPrecision(1); //"3e+1"
  num.toPrecision(2); //"27"
  num.toPrecision(3); //"27.1"
  num.toPrecision(4); //"27.12"
  num.toPrecision(5); //"27.123"
  num.toPrecision(6); //"27.1235"
  num.toPrecision(7); //"27.1246"
  num.toPrecision(8); //"27.123456"
  console.log(num.toPrecision(9)); //"27.1234560"
  console.log(3e+1);//30
