// const printGreeting = (name) => {
//   console.log("Hello there, " + name + "!");
// }
//
// printGreeting("Slimer");

// const reverseWordOrder = (string) => {
//   const splitString = string.split(" ");
//   // console.log(splitString);
//   const reverseSplit = splitString.reverse();
//   // console.log(reverseSplit);
//   const joinSplit = reverseSplit.join(" ");
//   console.log(joinSplit);
// }
//
// reverseWordOrder('I use Lâncome on my comb')

// const calculate = (num1, num2, operation) => {
//   if (operation === 'add') {
//     return num1 + num2
//   } else if (operation === 'sub') {
//     return num1 - num2
//   } else if (operation === 'mult') {
//     return num1 * num2
//   } else if (operation === 'div') {
//     return num1/num2
//   } else if (operation === 'exp') {
//     return Math.pow(num1, num2);
//   }
// }
//
// console.log(calculate(4, 3, "add"));
// console.log(calculate(4, 3, "sub"));
// console.log(calculate(4, 3, "mult"));
// console.log(calculate(4, 3, "div"));
// console.log(calculate(4, 3, "exp"));

//pandigital

//A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

const isPandigital = (num) => {
  const len = num.toString().length;
  const digits = num.toString().split('');
  // console.log(len);
  // console.log(digits);
  for (let i = 0; i < len; i++) {
    if (digits[i] <= 0) {
      return "Not a pandigital (zero or negative detected)";
    } else if (digits[i] > len) {
      return "Not a pandigital because digit " + digits[i] + " is greater than the length of " + len;
    } else {
      for (let j=i+1; j < len; j++) {
        if (digits[j] === digits[i]) {
          return "Not a pandigital (not unique)"
        }
      }
    }
  } return "Panditial!"
}

console.log(isPandigital(15234));
console.log(isPandigital(333));
console.log(isPandigital(0));
console.log(isPandigital(987654321));

// The number 15234 is 1-to-n pandigital.
//
// The number 333 is not 1-to-n pandigital.
//
// The number 0 is not 1-to-n pandigital.
//
// The number 987654321 is 1-to-n pandigital.
