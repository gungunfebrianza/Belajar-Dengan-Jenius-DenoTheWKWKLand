function reverseList<T>(list: T[]): T[] {
  const reversedList: T[] = [];
  for (let i = (list.length - 1); i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
}

const letters = ["a", "b", "c", "d"];
const reversedLetters = reverseList<string>(letters);
console.log(letters);

/* 
  d
  c
  b
  a
  */
const numbers = [1, 2, 3, 4];
const reversedNumbers = reverseList<number>(numbers);
console.log(numbers);
/* 
  4
  3
  2
  1
  */
