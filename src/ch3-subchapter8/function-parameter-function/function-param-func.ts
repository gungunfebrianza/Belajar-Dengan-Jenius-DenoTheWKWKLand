  function displayMessage(from: string, text = test()) {
    console.log(from + ": " + text);
  }

  function test(): string {
    return "Hello";
  }
  displayMessage("Maudy Ayunda");
