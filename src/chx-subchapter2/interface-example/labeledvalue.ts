interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

//let myObj = { size: 10 }; Error no label properties
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
