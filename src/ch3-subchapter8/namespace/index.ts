/**
@description namespace adalah sebuah fungsi untuk memberikan sebuah label dan mengroupkan sebuah fungsi tertentu untuk digunakan.
**/

namespace Framework {

  export function Deno(this: any, name: string, release: number, creator: string) {
    this.name = name;
    this.release = release;
    this.creator = creator;
  }

  export function Node(this: any, name: string, release: number, creator: string) {
    this.name = name;
    this.release = release;
    this.creator = creator;
  }

}

const deno = new (Framework.Deno as any)("Deno", 2018, "Ryan Dyland");
console.log(deno);

const node = new (Framework.Node as any)("Node", 2009, "Ryan Dyland");
console.log(node);
