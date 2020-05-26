export let bookTitle: string = "Belajar Dengan Jenius Typescript";
export let bookDetail: {
  author: string;
  price: number;
} = { author: "Gun Gun Febrianza", price: 90000 };
export const publication: [string, number] = ["PinterCoding", 2020]; //Tuple
export const keywords: string[] = ["javascript", "typescript", "deno"]; //Array
export enum Contributor {
  M = "Maudy",
  N = "Nikolaj",
  Y = "Yuma",
}
export function readBook(): void {
  console.log(`${bookTitle} karya ${bookDetail.author}`);
}
export class Wallet {
  constructor(public name: string, public balance: number) {
    this.name = name;
    this.balance = balance;
  }
  topUp(newbalance: number) {
    return (this.balance += newbalance);
  }
}
