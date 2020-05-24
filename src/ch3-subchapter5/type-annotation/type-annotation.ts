// primitive type annotation
const username: string = "Maudy Ayunda";
const height: number = 167.13;
const isCute: boolean = true;

// array type annotation
const usernames: string[] = ["Gun", "Maudy", "Nikolaj"];

// function annotation with parameter type annotation and return type annotation
let sayHi: (name: string) => string;

// implementation of sayHello function
sayHi = function (name) {
  return "Hello " + name;
};

// object type annotation
let human: {
  name: string;
  height: number;
  sayHi: (name: string) => string;
};

// Implementation of a human object
human = {
  name: "Maudy",
  height: 167.13,
  sayHi: function (name) {
    return "Hello " + name;
  },
};
