interface IBook {
  isbn: string;
  author: string;
  title: string;
}

const ebooks1: IBook[] = [{
  isbn: "1",
  author: "Gun Gun Febrianza",
  title: "Belajar Dengan Jenius Deno",
}, {
  isbn: "2",
  author: "Gun Gun Febrianza",
  title: "Belajar Dengan Jenius Serverless Application",
}, {
  isbn: "3",
  author: "Gun Gun Febrianza",
  title: "Belajar Dengan Jenius Blockchain",
}];

console.log(ebooks1);

/* 
[
  { isbn: "1", author: "Gun Gun Febrianza", title: "Belajar Dengan Jenius Deno" },
  {
    isbn: "2",
    author: "Gun Gun Febrianza",
    title: "Belajar Dengan Jenius Serverless Application"
  },
  {
    isbn: "3",
    author: "Gun Gun Febrianza",
    title: "Belajar Dengan Jenius Blockchain"
  }
]
[
  { isbn: "1", author: "Gun Gun Febrianza", title: "Belajar Dengan Jenius Deno" },
  {
    isbn: "2",
    author: "Gun Gun Febrianza",
    title: "Belajar Dengan Jenius Serverless Application"
  },
  {
    isbn: "3",
    author: "Gun Gun Febrianza",
    title: "Belajar Dengan Jenius Blockchain"
  }
] 
*/
