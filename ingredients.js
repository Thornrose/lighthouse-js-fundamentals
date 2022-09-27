

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:

for (let ii = 0; ii < ingredients.length; ii++) {
  console.log(ingredients[ii]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let ingredient = ingredients.length - 1; ingredient > 0; ingredient--) {
  console.log(ingredients[ingredient]);
}