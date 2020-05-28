function createString(): string {
  return `Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry''s
  standard dummy text ever since the 1500s, when an unknown
  printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also
  the leap into electronic typesetting, remaining essentially
  unchanged. It was popularised in the 1960s with the release of
  Letraset sheets containing Lorem Ipsum passages, and more
  recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum.`;
}
let time1: number = Date.now();
let s1: string = "";
for (let i = 0; i < 40000; i++) {
  s1 = s1.concat(createString());
}
let time2: number = Date.now();
console.log("Time difference: ", time2 - time1);
let s2: string = "";
time1 = Date.now();
for (let i = 0; i < 400000; i++) {
  s2 += createString();
}
time2 = Date.now();
console.log("Time difference: ", time2 - time1);

/*
Time difference:  4
Time difference:  37 
*/
