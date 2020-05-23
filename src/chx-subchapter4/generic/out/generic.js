function reverse(list) {
    var reversedList = [];
    for (var i = (list.length - 1); i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
var letters = ["a", "b", "c", "d"];
// d, c, b, a
var reversedLetters = reverse(letters);
var numbers = [1, 2, 3, 4];
// 4, 3, 2, 1
var reversedNumbers = reverse(numbers);
console.log(letters);
//# sourceMappingURL=generic.js.map