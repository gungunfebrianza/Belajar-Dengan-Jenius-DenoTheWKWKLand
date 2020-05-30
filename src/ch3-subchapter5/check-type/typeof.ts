const map1 = new Map();
const array = ["Hi", "Maudy"];
const object1 = {};
function reflect(param: any): any {
  return param;
}
console.log(typeof map1);
console.log(typeof array);
console.log(typeof object1);
console.log(typeof reflect(() => {}));

/* 
  object
  object
  object
  function
  */
