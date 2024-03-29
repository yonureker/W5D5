const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} > ${el2}?`, (answer) => {
    if(answer === "yes"){
      callback(true);
    } else {
      callback(false);
    }
  });
}

// askIfGreaterThan(1,2, bool => bool ? console.log("greater") : console.log("smaller"));
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.

  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) { //SMAARTTT
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      i += 1;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
    
  }
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}


// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([45, 2, 334], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// innerBubbleSortLoop([45, 2, 334], 0, false, function(string){
//  console.log(string);
// });