var myNumber: number = 2;
  while (myNumber != Infinity) {
    // Execute until Infinity
    console.log((myNumber = myNumber * myNumber));
  }
  /* Output :
  4
  16
  256
  65536
  4294967296
  18446744073709552000
  3.402823669209385e+38
  1.157920892373162e+77
  1.3407807929942597e+154
  Infinity */
