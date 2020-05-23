function getAverage(...param: number[]): string {
  let total = 0, count = 0, index = 0;
  for (index; index < param.length; index++) {
    total += param[index];
    count++;
  }
  const average = total / count;
  return "The average is " + average;
}
// 'The average is 3'
const res = getAverage(4, 4, 4, 2, 2, 2);
console.log(res);
