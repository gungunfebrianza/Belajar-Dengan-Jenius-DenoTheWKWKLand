const array1: (string | number)[] = ["maudy", 100, "ayunda", 200, "faza", 300];
const array2 = array1.filter(function (item) {
  return typeof item === "string";
});
console.log(array2);
// [ "maudy", "ayunda", "faza" ]
