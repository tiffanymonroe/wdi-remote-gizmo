// const printGreeting = (name) => {
//   return "Hello there, " + name +"!"
// }
//
// console.log(printGreeting('Slimer'));
//
// const reverseWordOrder = (string) => {
//   return string.split(' ').reverse().join(' ');
// }
// console.log(reverseWordOrder('Ishmael me Call'));

// ^^thanks to my group!

const calculate = (num1, num2, operation) => {
  if (operation === 'add') {
    return num1 + num2
  }
  else if (operation === 'sub') {
    return num1 - num2
  }
  else if (operation === 'mult') {
    return num1 * num2
  }
  else if (operation === 'div') {
    return num1 / num2
  }
  else if (operation === 'exp') {
    return num1^num2
  }
}

console.log(calculate(4, 3, 'sub'));
console.log(calculate(4, 3, 'exp'));
