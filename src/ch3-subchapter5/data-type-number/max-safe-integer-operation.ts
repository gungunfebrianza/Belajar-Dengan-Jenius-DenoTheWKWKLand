  var x: number = Number.MAX_SAFE_INTEGER;
  var y: number = 9007199254740990;
  console.log(Number.MAX_SAFE_INTEGER);
  //9007199254740991
  console.log(y);
  //9007199254740990
  console.log(x === y);
  //false
