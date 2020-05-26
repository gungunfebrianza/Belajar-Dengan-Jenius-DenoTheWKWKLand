const ClassWallet = require("./class-module.");
const userGun = new ClassWallet("Gun", 1000);
userGun.topUp(1000);
console.log(userGun);
// Wallet { name: 'Gun', balance: 2000 }
console.log(userGun.balance);
// 2000
