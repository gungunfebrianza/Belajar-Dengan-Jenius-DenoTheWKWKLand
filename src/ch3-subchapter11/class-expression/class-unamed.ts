let mywallet1 = class Wallet {
  constructor(public id: number, public balance: number) {
    this.id = id;
    this.balance = balance;
  }
};

console.log(typeof mywallet1); //function
