namespace DataStructure {
  export let library: string = "Data Structure Library";
  export interface StackDataStructure {
    pushMethod(input: string): void;
    popMethod(): void;
    peekMethod(): void;
  }
}
