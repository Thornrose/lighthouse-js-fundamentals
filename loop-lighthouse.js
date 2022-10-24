const loopyLighthouse = ((range, multiples, words) => {
  let output = "";
  const concatWords = words[0] + words[1];
  for (let num = range[0]; num <= range[1]; num++) {
    output = (num % multiples[0] === 0) ? words[0] : num;
    output = (num % multiples[1] === 0) ? words[1]  : output;
    output = ((num % multiples[0] === 0) && (num % multiples[1] === 0)) ? concatWords : output;
    console.log(output);
  }
});

loopyLighthouse([1, 20], [3, 5], ["Loopy", "Lighthouse"]);