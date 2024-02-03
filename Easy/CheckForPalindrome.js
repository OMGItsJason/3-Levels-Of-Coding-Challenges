// Check for Palindrome:
// Write a function that takes a string as input and returns true if it's a palindrome (reads the same backward as forward), false otherwise.

const prompt = require("prompt-sync")(); //Prompt To Allow User Input

function checkPalindrome(palin) {
  const convert = palin.toLowerCase().replace(/[\W_]/g, "");
  const reverse = convert.split("").reverse().join("");
  return reverse === convert;
}

function palindromeInput() {
  let input = prompt("Enter Something: "); //Created A Var Name Input With A Prompt
  // Just Like The Reverse String Just Added A RegExp And Lowercase
  const finalInput = input
    .toLowerCase()
    .replace(/[\W_]/g, "")
    .split("")
    .reverse()
    .join("");
  // While Loop If Neither Conditions Where Meet It Will Continue On Looping
  while (!isNaN(input) || input.length === 1) {
    console.log("Invalid Input!");
    input = prompt("Enter Again: ");
    if (input == "") {
      input = prompt("Enter Something: ");
    }
  }
  //Check If The Input Is A Palindrome
  if (checkPalindrome(input)) {
    console.log(finalInput);
    console.log("True");
  } else {
    console.log(finalInput);
    console.log("False");
  }
}
palindromeInput();

// node CheckForPalindrome.js
