function createString1(): string {
  return `Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry''s
  standard dummy text ever since the 1500s, when an unknown
  printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but
  also the leap into electronic typesetting, remaining
  essentially unchanged. It was popularised in the 1960s with the
  release of Letraset sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like Aldus
  PageMaker including versions of Lorem Ipsum.`;
}
let baseString: string = createString1();
const replacementCharacter: string = "|";
let ttime1: number = Date.now();
for (let i = 0; i < 50000; i++) {
  baseString.split(" ").join(replacementCharacter);
}
let ttime2: number = Date.now();
console.log("Time difference (SplitJoin): ", ttime2 - ttime1);
ttime1 = Date.now();
for (let i = 0; i < 50000; i++) {
  baseString.replace(/ /g, replacementCharacter);
}
ttime2 = Date.now();
console.log(
  "Time difference (Replace_w_RegExp): ",
  ttime2 -
    ttime1,
);

/* 
Time difference (SplitJoin):  164
Time difference (Replace_w_RegExp):  191 
*/