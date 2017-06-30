//  Functions
//.......verbal questions.......

// An argument is input of the function; the parameter is what the function will do with that information.

      // const func (parameter) => {
      //   code block
      // };
      //
      // func(argument);

// Return shows the value of the data; console.log() prints out data in our command line.

//  Palindrome

// const checkPalindrome = (string) => {
//   const reversedString = string.split('').reverse().join('');
//   return string.toLowerCase() === reversedString.toLowerCase();
// }
//
// console.log(checkPalindrome("Radar"));
// console.log(checkPalindrome("Borscht"));

// ** most of the code from my class notes **
// ** toLowerCase from Stack overflow **

//  Digit Sum

// const sumDigits = (num) => {
//   let string = num.toString();
//   let digits = string.split('');
//   for (let i=0; i < digits.length; i++){
//     console.log(digits[i]0;
//   }
// }
// console.log(sumDigits(42));
//
// ** totally stuck on this one! how do I get the string back to numbers? I could only find parseInt() **

//  Pythagoras

const calculateSide = (sideA, sideB) => {
  let sideC = Math.sqrt(sideA**2 + sideB**2);
  return sideC
}
console.log(calculateSide(8, 6));

//  
