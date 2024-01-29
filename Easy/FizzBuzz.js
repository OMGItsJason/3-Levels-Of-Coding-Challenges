// FizzBuzz
// Print numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

function FizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    //Used For Loop To 1 To 100
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    //Using Modulus Operator To Check If Divisible By 3 And 5. If Divisible Print FizzBuzz
    else if (i % 3 === 0)
      console.log("Fizz"); // Else If Divisible By 3 Print Fizz
    else if (i % 5 === 0)
      console.log("Buzz"); // Else If Divisible By 5 Print Buzz
    else console.log(i); // Else The Conditions Are Not Met
  }
}

FizzBuzz();
