function getAverage(a: number, b: number, c?: number): string {
  let total = a + b;
  let counter = 1;
  counter++;
  if (typeof c !== "undefined") {
    total += c;
    counter++;
  }
  const average = total / counter;
  return "The average is " + average;
}
// 'The average is 5'
const result = getAverage(2, 6);
console.log(result);
