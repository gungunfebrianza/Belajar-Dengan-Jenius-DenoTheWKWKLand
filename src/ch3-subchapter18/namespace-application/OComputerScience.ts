///<reference path = "IComputerScience.ts" />
namespace ComputerScience {
  export class StackDataStructure implements DataStructure {
    private _stack: string[];
    constructor() {
      this._stack = [];
    }
    createArray(input: string[]) {
      this._stack = input;
    }
  }
}
