//Palindrome

// const checkPalindrome = (string) => {
//   let lowerString = string.toLowerCase();
//   let reversedString = lowerString.split('').reverse().join('');
//   if (lowerString === reversedString) {
//     return true;
//   } else {
//     return false;
//   }
// }

//Refactored ES6

// const checkPalindrome = (string) => {
//   let lowerString = string.toLowerCase();
//   let reversedString = lowerString.split('').reverse().join('');
//   return (lowerString === reversedString)
// }
//
// console.log(checkPalindrome("Borscht"));
// console.log(checkPalindrome("Radar"));

//Digit Sum

// const sumDigits = (number) => {
//   let stringNum = number.toString();
//   let sum = 0;
//   for (let i = 0; i<stringNum.length; i++){
//     sum += parseInt(stringNum[i], 10);
//   }
//   return sum;
// }
//
// console.log(sumDigits(42));

//Pythagoras

// const calculateSide = (sideA, sideB) => {
//   const aPlusB = Math.pow(sideA, 2) + Math.pow(sideB, 2);
//   const sideC = Math.sqrt(aPlusB);
//   return sideC;
// }
//
// console.log(calculateSide(8, 6));

//Sum Array

// const sumArray = (array) => {
//   let sum = 0;
//   for (let i=0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// }
//
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

//Prime Numbers

// const checkPrime = (number) => {
//   let squareRoot = Math.floor(Math.sqrt(number));
//   if (number < 2) {return false}
//     for (let i = 2; i <= squareRoot; i++) {
//       if (number % i === 0) {return false}
//     }
//     return true
// }
//
// console.log(checkPrime(11));
//
// const printPrimes = (limit) => {
//   for (let i = 1; i <= limit; i++) {
//     if (checkPrime(i)){
//       console.log(i);
//     }
//   }
// }
//
// printPrimes(97);

//Insert Dash

const insertDash = (number) => {
  const numToString = number.toString();
  const stringToArray = numToString.split('');
  for (let i = 0; i < stringToArray.length-1; i++) {
    if ((stringToArray[i] % 2 != 0) && (stringToArray[i+1] % 2 != 0)) {
      stringToArray[i] += '-';
    }
  }
  const joinedString = stringToArray.join('');
  return joinedString;
}

console.log(insertDash(454793));
