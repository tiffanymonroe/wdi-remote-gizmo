// ---
// Title: SOLUTIONS: Problem solving with functions<br>
// ---
// ## Functions
//
// ### Verbal questions
//
// Write answers to the following questions as comments. As a reminder you can highlight your code and type `command` + `/` to turn your code into a comment.
//
// ```
// // my commented answer
// ```
// 2. What is the difference between a **parameter** and an **argument**?
// 3. Within a function, what is the difference between **return** and **console.log**?
//
//--------------------------------------------------------------

// ## Palindrome
// Write a function `checkPalindrome` that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with **capital letters**.
//
// ```javascript
// console.log(checkPalindrome("Radar"));
//  => true
// ```
//
// ```javascript
// console.log(checkPalindrome("Borscht"));
// => false
// ```
console.log("-------------------SOLUTION - Palindrome-------------------");

const checkPalindrome = (word) => {
  //take word split it and reverse it (reverse array method only), return to string
  const reversedWord = word.split('').reverse().join('');

  // console.log(word, reversedWord);// still need to lower case in here so that case does not matter

 //return boolean expression (will be true or false)
  return reversedWord.toLowerCase() === word.toLowerCase();
}

console.log(checkPalindrome('Radar'));
console.log(checkPalindrome('Borscht'));
//--------------------------------------------------------------
//
// ## Digit Sum
// Write a function `sumDigits` that accepts a number and returns the sum of its digits.
// ```
// console.log(sumDigits(42));
// => 6;
// ```
console.log("-------------------SOLUTION - Digit Sum-------------------");
const sumDigits = (num) => {
  let sum = 0;
  const numToString = num.toString();
  for (let i = 0; i < numToString.length; i++){
    sum +=  parseInt(numToString[i]);
  }
  return sum;
}

console.log(sumDigits(42));
//--------------------------------------------------------------

// ## Pythagoras
// Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.
//
// _hint:_ discover the Pythagorean Theorem on a website called google.com
// _hint:_ checkout the [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript
// ```
// console.log(calculateSide(8, 6));
// => 10
// ```
console.log("-------------------SOLUTION - Pythagoras-------------------")
// A^2 + B^2 = C^2
// Square root of (A^2 + B^2) = C
// This function solves for C

const calculateSide = (sideA, sideB) => {
  return Math.sqrt((Math.pow(sideA, 2) + Math.pow(sideB, 2)))
}

console.log (calculateSide(8,6))
//--------------------------------------------------------------

// ## Sum Array
// Write a function `sumArray` that takes an **array** as an argument.
// The array should contain numbers. The function should return the sum of the numbers in the array.
// Use a _for loop_ within the function to iterate over the array and sum the contents.
// Use a variable such as
// ```javascript
// let sum = 0;
// ```
// that will **accumulate** value within the loop.
// Expected result:
// ```javascript
// console.log(sumArray([1, 2, 3, 4, 5, 6]);
// => 21
// ```
console.log("-------------------SOLUTION - Sum Array-------------------");
// ------------SOLUTION 1---------------------

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
}

console.log (sumArray([2,3,4,5,6,7,8,9,10,1])) //55

// ----------------SOLUTION 2 (with .reduce)----------------
const sumArrayTwo = (arr) => {
 sum =  arr.reduce(function (a,b){
    return a + b;
  });
  return sum;
}

console.log (sumArrayTwo([2,3,4,5,6,7,8,9,10,1])) //55
//--------------------------------------------------------------

// ## Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
// To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.
//
// ### Step One
// Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
// _Hint:_ Check every number up to the square root. To do this, try a _for loop_.
//
// ### Step Two
// Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
// This function can **call on** the previous `checkPrime` function.
// </details>
//
console.log("-------------------SOLUTION - Prime Numbers-------------------");
const checkPrime = (num) => {
 // prime is any number greater than 1, but also, not 2
 if (num < 2 ){ return false }

 //see if the number is evenly divisble by any other number (NOT including 1)
 for (let i = 2 ; i  < Math.sqrt(num); i++ ){
   if (num % i === 0){ return false } //get out of the loop and function if false
 }
  //made it out of the loop?
  return true;

}
console.log(checkPrime(11));


//console log prime numbers up to number entered
const printPrimes = (limit) => {
  //start at 1, (could start at 3)
  for (let i = 1; i <= limit; i++ ){
    if(checkPrime(i)){ console.log(i) }
  }
}

printPrimes(97);
//-------------------------------------------------------------

// ## Insert Dash
// Write a function `insertDash` that accepts a number as a parameter and returns a string with a dash inserted between any consecutive **odd numbers**. There should not be a dash at the end, it goes only between numbers.
// ```javascript
// console.log(insertDash(454793));
// ```
// > => 4547-9-3
//
console.log("-------------------SOLUTION - Insert Dash-------------------");
// -------------SOLUTION 1--------------------
const insertDashOne = (num) => {
  const numToString = num.toString();
  const numsToArray = numToString.split("");
  for (let i = 0; i < numsToArray.length -1; i++){
    if (numsToArray[i] % 2 != 0 && numsToArray[i+1] % 2 != 0){
      numsToArray[i] += "-";
    }
  }
  const joinedNums = numsToArray.join("");
  return joinedNums;
}

console.log(insertDashOne(77777099003455))

// ---------SOLUTION 2 (with Regex):-----------
const insertDash = (num) => {
  //need to convert number to a string to split up the digits
  let numToString = num.toString();
  //loop over the digits
  for (let i = 0; i < numToString.length-1; i++){
    //just match 1,3,5,7, or 9 (as strings)
    const oddNumberRegEx = /[13579]/;
    //check adjacent numbers
    if (numToString[i].match(oddNumberRegEx) && numToString[i+1].match(oddNumberRegEx)){
      //splice in a dash, splice is array method, must convert to array
      numAddDash = numToString.split('');
      //insert dash in correct place
      numAddDash.splice(i+1, 0, '-');
      //return to string, rewrite numToString variable
      numToString = numAddDash.join('');
    }
  }
  //check the before and after, if both odd, stuff a dash in between
 console.log(numToString)

}

insertDash(77777099003455)
//--------------------------------------------------------------
