const soul: string[] = ["Maudy", "Ayunda Faza", "Gun Gun", "Febrianza"];
const x = soul.entries();
var n: [number, string];
for (n of x) {
  console.log(n = n);
}
/*
    [ 0, "Maudy" ]
    [ 1, "Ayunda Faza" ]
    [ 2, "Gun Gun" ]
    [ 3, "Febrianza" ] 
    */
console.log(x);
//Array Iterator {}
