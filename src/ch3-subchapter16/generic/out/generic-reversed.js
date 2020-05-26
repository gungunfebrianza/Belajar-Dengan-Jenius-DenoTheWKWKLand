function reverseList(list) {
    var reversedList = [];
    for (var i = (list.length - 1); i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
var letters = ["a", "b", "c", "d"];
var reversedLetters = reverseList(letters);
console.log(letters);
/*
  d
  c
  b
  a
  */
var numbers = [1, 2, 3, 4];
var reversedNumbers = reverseList(numbers);
console.log(numbers);
/*
  4
  3
  2
  1
  */
//# sourceMappingURL=generic-reversed.js.map