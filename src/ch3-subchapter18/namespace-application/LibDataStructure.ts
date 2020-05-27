namespace DataStructure {
  export let library: string = "Data Structure Library";
  export interface StackDataStructure {
    push(input: string): void;
    pop(): void;
    peek(): void;
    isEmpty():boolean;
  }
  export interface QueueDataStructure {
    enqueue(input: string): void;
    dequeue(): void;
    peek(): void;
    isEmpty():boolean;
  }
}
