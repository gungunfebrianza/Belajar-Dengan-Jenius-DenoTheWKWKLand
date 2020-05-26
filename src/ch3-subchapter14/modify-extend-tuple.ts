var listUsers: [number, string, string[]] = [1, "Maudy", ["Artist", "Singer"]];
listUsers[0] = 888;
listUsers[1] = "Ayunda";
listUsers[2] = ["Young", "Single"];
console.log(listUsers[0]);
console.log(listUsers[1]);
console.log(listUsers[2]);
/* 
  888
  Ayunda
  [ "Artist", "Singer" ] 
  */
