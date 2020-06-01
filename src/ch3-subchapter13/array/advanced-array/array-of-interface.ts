interface IBook {
  isbn: string;
  author: string;
  title: string;
}

const ebooks: IBook[] = [];

ebooks.push({
  isbn: "1111111",
  author: "Gun Gun Febrianza",
  title: "Belajar Dengan Jenius Deno",
}, {
  isbn: "22222",
  author: "Gun Gun Febrianza",
  title: "Belajar Dengan Jenius Blockchain",
});

//console.log(ebooks);

for (let i = 0; i < ebooks.length; i++) {
  console.log(ebooks[i].author);
  console.log(ebooks[i].title);
}

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
