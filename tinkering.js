// function multiply(a, b) {
//   return a * b;
// }
// const result = multiply(2, 4);
// console.log(result);  // will output 8

// console.log("up up \n \t down down");




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

// let favoriteMovie = function displayFavorite(movieName) {
//   console.log("My favorite movie is " + movieName);
// };

// function movies(messageFunction, name) {
//   messageFunction(name);
// }

// movies(favoriteMovie, "Finding Nemo");

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

// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

// const goodStations = [];

// const chooseStations = function(stations) {
//   for (const station of stations) {
//     const capacity = station[1];
//     const type = station[2];
//     if (capacity >= 20  && (type === "school" || type === "community centre")) {
//       goodStations.push(station[0]);
//     }
//   }
//   return goodStations;
// }

// console.log(chooseStations(stations));


// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

// const finalPosition = function(moves) {
//   let xPos = 0;
//   let yPos = 0;
//   const position = [];
//   for (const move of moves) {
//     switch (move) {
//     case "north":
//       yPos++;
//       break;
//     case "south":
//       yPos--;
//       break;
//     case "east":
//       xPos++;
//       break;
//     case "west":
//       xPos--;
//     }
//   }
//   position.push(xPos);
//   position.push(yPos);
//   return position;
// };

// console.log(finalPosition(moves));


// const ageCalculator = function(name, yearOfBirth, currentYear) {
//   return (name + " is " + (currentYear - yearOfBirth) + " years old.");
// };

// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));

// const howManyHundreds = function(num) {
//   return Math.floor(num / 100);
// };

// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

const calculateRectangleArea = function(length, width) {
  if (length <= 0 || width <= 0) {
    return;
  } else {
    return length * width;
  }
};


const calculateTriangleArea = function(base, height) {
  if (base <= 0 || height <= 0){
    return;
  } else {
    return base * height / 2;
  }
};


const calculateCircleArea = function(radius) {
  if (radius <= 0) {
    return;
  } else {
    return Math.PI * (radius * radius);
  }
};

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined