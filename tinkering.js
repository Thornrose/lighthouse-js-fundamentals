// function multiply(a, b) {
//   return a * b;
// }
// const result = multiply(2, 4);
// console.log(result);  // will output 8

// console.log("up up \n \t down down");

let tier = "deck of legends";
let output = "You'll receive ";


switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
    break;
  default:
    output += "and one copy of the Cards Against Humanity card game."  
}

console.log(output);