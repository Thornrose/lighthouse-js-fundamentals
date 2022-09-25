


const sayHelloToConsole = function(name) {
  console.log("Hello, " + name);
};

sayHelloToConsole("Cheever");


const returnSayHello = function(name) {
  return "Hello, " + name;
};

const greeting = returnSayHello("Ames");
console.log(greeting);
