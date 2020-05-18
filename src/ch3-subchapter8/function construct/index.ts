/**
@description function constructor  adalah sebuah  function yang dapat di instansiasi layaknya sebuah kelas, ini biasa  disebut juga sebagai versi mini dari sebuah class
**/
function Deno(this: any, name: string, release: number, creator: string) {
  this.name = name;
  this.release = release;
  this.creator = creator;
}

// const resultI = new (Deno as any)("DenoJs", 2018, "Ryan Dyland");
// console.log(resultI);

/**
@description dengan fungsi prototype kita bisa membuat sebuah function baru dari function yang sudah ada dan kita juga bisa dapat mengambil property yang di miliki oleh function parent, ini sama saja seperti layaknya pada sebuah class
**/
Deno.prototype.Node = function(this: any, name: string, release: number, creator: string, version: string) {
  this.name = name;
  this.release = release;
  this.creator = creator;
  this.version =  version;
}

const resultII = new (Deno as any)("Denojs", 2018, "Ryan Dyland", "v14.0.0");
resultII.Node("Nodejs", 2009, "Ryan Dyland")
console.log(resultII);
