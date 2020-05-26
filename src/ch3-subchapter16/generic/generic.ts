function displayItem<T>(item: T): T {
  console.log(item);
  return item;
}
displayItem("Hello Maudy");
displayItem([2]);
displayItem(true);
/* 
  Hello Maudy
  2
  true 
  */
  displayItem([2, 3, 4]);
  // [ 2, 3, 4 ]