/**
@description readonly adalah sebuah modifiter dimana  nilai tidak dapat lagi di ubah dikarenkan nilai tersebut sudah final atau selesai, jika anda mengubah sebuah nilai dari readonly tersebut maka anda akan mendapatkan pesan kesalahan.
**/

class Deno {

  readonly deno = "";
  node:string = "";

  constructor(deno : any , node: string){
    this.deno = deno;
    this.node = node;
  }
}

const result = new Deno("Typescript", "JavaScript");
result.deno = "Typescript Server Side";
console.log(result);
