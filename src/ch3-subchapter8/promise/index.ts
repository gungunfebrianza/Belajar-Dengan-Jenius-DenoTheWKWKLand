// cara pertama
const person = async function(): Promise<string> {
    let name = "John Doe";
    return name;
}
person().then(result => console.log(result));

// cara kedua
function person ()  {
  return new Promise((resolve, reject) => {
     let name = "john doe";
     resolve(name);
  })
}
person().then(result => console.log(result));

// cara ketiga
function person ()  {
  let name = "john doe";
  return Promise.resolve(name);
}
person().then(result => console.log(result));
