///<reference path = "LibDataStructure.ts" />
namespace DataStructure {
  export class Stack implements StackDataStructure {
    private _stack: string[];
    constructor(s: string[] = [""]) {
      this._stack = s;
    }
    pushMethod(input: string): void {
      this._stack.push(input);
    }

    popMethod(): void {
      this._stack.pop();
    }
    peekMethod(): string {
      return this._stack[this._stack.length - 1];
    }
  }
}
