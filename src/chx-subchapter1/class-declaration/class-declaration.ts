class Wallet {
  constructor(public id: number, public balance: number) {
    this.id = id;
    this.balance = balance;
  }
}

let myWallet = new Wallet(1, 2000);
console.log(myWallet);
