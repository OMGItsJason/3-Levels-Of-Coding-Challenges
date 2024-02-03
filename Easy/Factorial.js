// Factorial:
// Write a function that calculates the factorial of a number.

const prompt = require("prompt-sync")();

const factorial = () => {
  const number = parseInt(prompt("Enter Any Number: "));
  // Check if the input is a valid number (not NaN)
  if (!isNaN(number)) {
    // If valid, initialize a variable '_factorial' to store the factorial result, initially set to 1
    let _factorial = 1;
    for (let i = 1; i <= number; i++) {
      _factorial *= i;
    }
    console.log("The Factorial Of " + number + " is " + _factorial);
  } else {
    console.log("Invalid Input");
  }
};

factorial();
// node Factorial.js
