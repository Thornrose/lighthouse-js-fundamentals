// function multiply(a, b) {
//   return a * b;
// }
// const result = multiply(2, 4);
// console.log(result);  // will output 8

// console.log("up up \n \t down down");

// let tier = "deck of legends";
// let output = "You'll receive ";


// switch (tier) {
//   case "deck of legends":
//     output += "a custom card, ";
//     break;
//   default:
//     output += "and one copy of the Cards Against Humanity card game."  
// }

// console.log(output);


// let x = 1;
// while (x <= 10) {
//   console.log(x + " mississippi!");
//   x += 1;
// }

// for (let i = 0; i < 6; i += 1) {
//   console.log(i);
// }


// for (let xx = 0; xx < 3; xx += 1) {
//   for (let yy = 0; yy < 3; yy += 1) {
//     for (let zz = 0; zz < 3; zz += 1) {
//       console.log(xx + "," + yy + "," + zz);
//     }
//   }   
// }

// const amounts = [61.00, 52.25, 112.99, 5.00];
// let total = 0;

// for (let i = 0; i < amounts.length; i++) {
//   total += amounts[i];
// }

// for (let amount of amounts) {
//   total += amount;
// }

// console.log('Order total is: ', total);


// function findAverage(x, y) {
//   let answer = (x + y) / 2;
//   return answer;
// }

// let avg = findAverage(5, 9);

// console.log(avg);

// function isThisWorking(input) {
//   console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
//   return "Returning: I am returning this string!";
// }

// isThisWorking(3);

// function addTen(x) {
//   return x + 10;
// }

// function divideByThree(y) {
//   return y / 3;
// }

// let result = addTen(2);
// console.log(divideByThree(result));


// function makeLine(length) {
//   let line = "";
//   for (let j = 1; j <= length; j++) {
//     line += "* ";
//   }
//   return line + "\n";
// }

// function buildTriangle(base) {
//   let printed = "";
//   for (let level = 1; level <= base; level++) {
//     printed += makeLine(level);
//   }
//   return printed;
// }

// console.log(buildTriangle(10));


// let catSays = function(max) {
//   let catMessage = "";
//   for (let i = 0; i < max; i++){
//     catMessage += "meow "
//   }
//   return catMessage;
// };

// function helloCat(callBackFunc) {
//   return "Hello " + callBackFunc(3);
// }

// console.log(helloCat(catSays));

let favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

function movies(messageFunction, name) {
  messageFunction(name);
}

movies(favoriteMovie, "Finding Nemo");

