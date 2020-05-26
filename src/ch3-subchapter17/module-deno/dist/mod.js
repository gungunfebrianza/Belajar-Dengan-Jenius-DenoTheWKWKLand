"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = exports.readBook = exports.Contributor = exports.keywords = exports.publication = exports.bookDetail = exports.bookTitle = void 0;
exports.bookTitle = "Belajar Dengan Jenius Typescript";
exports.bookDetail = { author: "Gun Gun Febrianza", price: 90000 };
exports.publication = ["PinterCoding", 2020]; //Tuple
exports.keywords = ["javascript", "typescript", "deno"]; //Array
var Contributor;
(function (Contributor) {
    Contributor["M"] = "Maudy";
    Contributor["N"] = "Nikolaj";
    Contributor["Y"] = "Yuma";
})(Contributor = exports.Contributor || (exports.Contributor = {}));
function readBook() {
    console.log(`${exports.bookTitle} karya ${exports.bookDetail.author}`);
}
exports.readBook = readBook;
class Wallet {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.name = name;
        this.balance = balance;
    }
    topUp(newbalance) {
        return (this.balance += newbalance);
    }
}
exports.Wallet = Wallet;
