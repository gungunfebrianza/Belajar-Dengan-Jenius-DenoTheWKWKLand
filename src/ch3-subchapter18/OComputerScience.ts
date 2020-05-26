///<reference path = "IComputerScience.ts" />
namespace ComputerScience {
  export class StackDataStructure implements DataStructure {
    public stack: string[];
    constructor() {
      this.stack = [];
    }
    createArray(): void {
      console.log("Array Created");
    }
  }
}
