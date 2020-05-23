function greeting(name: string): void {
  console.log("Hello " + name);
}

function processUserInput(callback: (name: string) => void) {
  var name = "Gun Gun Febrianza";
  callback(name);
}

processUserInput(greeting);
//Hello Gun Gun Febrianza
