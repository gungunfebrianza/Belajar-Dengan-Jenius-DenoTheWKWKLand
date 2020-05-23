function addition(): number {
  var counter: number = 0;

  function plus(): void {
    counter += 1;
  }
  plus();
  return counter;
}
console.log(addition()); //1
