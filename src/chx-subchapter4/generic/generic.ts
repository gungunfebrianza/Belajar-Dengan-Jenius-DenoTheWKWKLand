function reverse<T>(list: T[]): T[] {
  const reversedList: T[] = [];
  for (let i = (list.length - 1); i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
}
const letters = ["a", "b", "c", "d"];
// d, c, b, a
const reversedLetters = reverse<string>(letters);
const numbers = [1, 2, 3, 4];
// 4, 3, 2, 1
const reversedNumbers = reverse<number>(numbers);
console.log(letters);
