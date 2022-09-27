const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen Stuff to pack:");
// for (let i=0; i < packingList.length; i++) { // traditional for loop using index variable
//   console.log(packingList[i]);
// }

// for (let item of packingList) {              // same as above using for..of
//   console.log(item);
// }

let i = 0;                                      // using while, less efficient but still possible
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}