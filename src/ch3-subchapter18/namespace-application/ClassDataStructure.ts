///<reference path = "LibDataStructure.ts" />
namespace DataStructure {
  export class Stack implements StackDataStructure {
    private _stack: string[];
    constructor(s: string[] = [""]) {
      this._stack = s;
    }
    push(input: string): void {
      this._stack.push(input);
    }
    pop(): void {
      this._stack.pop();
    }
    isEmpty(): boolean {
      return this._stack.length == 0;
    }
    peek(): string {
      return !this.isEmpty()
        ? this._stack[this._stack.length - 1]
        : "Empty Stack";
    }
  }
  export class Queue implements QueueDataStructure {
    private _queue: string[];
    constructor(s: string[] = [""]) {
      this._queue = s;
    }
    enqueue(input: string): void {
      this._queue.push(input);
    }
    dequeue(): void {
      this._queue.shift();
    }
    isEmpty(): boolean {
      return this._queue.length == 0;
    }
    peek(): string {
      return !this.isEmpty() ? this._queue[0] : "Empty Queue";
    }
  }
}
