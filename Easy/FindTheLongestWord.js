// Find the Longest Word:
// Write a function that takes a string as input and returns the longest word in the string.

const prompt = require("prompt-sync")();

const longestWord = () => {
  const input = prompt("Enter Paragraph: ");
  // Split the input paragraph into an array of words using whitespace as the delimiter
  let inputArray = input.split(/\s+/);
  // Store The Longest Word
  let longest = "";

  for (let i = 0; i < inputArray.length; i++) {
    // Remove non-alphabetic characters from the current word and assign it to 'word'
    let word = inputArray[i].replace(/[^a-zA-Z]/g, "");
    // Check if the length of 'word' is greater than the length of the current 'longest' word
    if (word.length > longest.length) {
      // If true, update 'longest' to the current 'word'
      longest = word;
    }
  }
  console.log("The Longest Word: " + longest);
};

longestWord();
// node FindTheLongestWord.js
