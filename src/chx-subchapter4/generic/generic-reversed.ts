function reverseList<T>(list: T[]): T[] {
  const reversedList: T[] = [];
  let i = (list.length - 1);
  for (i; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
}

const letters = ["a", "b", "c", "d"];
const reversedLetters = reverseList<string>(letters);
console.log(reversedLetters);

/* 
  d
  c
  b
  a
  */
const numbers = [1, 2, 3, 4];
const reversedNumbers = reverseList<number>(numbers);
console.log(reversedNumbers);
/* 
  4
  3
  2
  1
  */
