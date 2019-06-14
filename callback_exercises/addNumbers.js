const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  
  if (numsLeft === 0) {
    completionCallback(sum);
  } else {
    reader.question("Please enter a number", function(answer) {
      let input = parseInt(answer); // converts string to a number
      sum += input;
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));



