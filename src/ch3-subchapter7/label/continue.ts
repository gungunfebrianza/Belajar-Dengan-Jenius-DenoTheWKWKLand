let str: string = "";
let idx: number = 0;

loop1:
for (idx; idx < 5; idx++) {
  if (idx === 1) {
    continue loop1;
  }
  str = str + idx;
  console.log(str);
}
