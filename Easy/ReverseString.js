// Reverse a String:
// Write a function that takes a string as input and returns the string reversed.

function ReverseString() {
  const prompt = require("prompt-sync")(); //Prompt To Allow User Input
  let input = prompt("Enter Something: "); //Created A Var Name Input With A Prompt
  // While Loop If Neither Conditions Where Meet It Will Continue On Looping
  while (!isNaN(Number(input)) || input.length === 1) {
    console.log("Invalid Input!");
    input = prompt("Enter Something: ");
    if (input === "") {
      console.log("Invalid Input Please Enter Something!");
      input = prompt("Enter Something: ");
    }
  }
  //Split The String To An Array And Reverse It Then Join It Together
  console.log(input.split("").reverse().join(""));
}
ReverseString();
