type TypeAlias = number[];
type ComplexObj = {
  a: string[];
  b: (param: string[]) => string[];
  c: { d: boolean; e: TypeAlias };
};

let objComplex: ComplexObj = {
  a: ["Hi", "Maudy"],
  b: function (param: string[]): string[] {
    return this.a;
  },
  c: { d: true, e: [22, 33] },
};

console.log(objComplex);
/* 
  { 
    a: [ "Hi", "Maudy" ], 
    b: [Function: b], 
    c: { 
      d: true, 
      e: [ 22, 33 ] 
    } 
  } 
  */
