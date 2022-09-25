let output = "";

for (let num = 100; num <= 200; num++) {
  output = (num % 3 === 0) ? "Loopy" : num;
  output = (num % 4 === 0) ? "Lighthouse"  : output;
  output = ((num % 3 === 0) && (num % 4 === 0)) ? "LoopyLighthouse" : output;
  console.log(output);
}

