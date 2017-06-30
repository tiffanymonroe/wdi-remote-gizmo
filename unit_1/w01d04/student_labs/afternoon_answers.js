//AFTERNOON LAB

//1.
//
// const printCool = (name) => {
//   return name + " is cool";
// }
//
// console.log(printCool('Captain Reynolds'));

//2.
//
// const calculateCube = (x) => {
//   return x**3
// }
// console.log(calculateCube(5));

//3.

// const isAVowel = (x) => {
//   return x === 'a' || x === 'e' || x === 'i' ||  x === 'o' ||  x === 'u';
// }
//
// console.log(isAVowel('a'));

//4.

// const getTwoLengths = (one, two) => {
//   let wordOne = one.split('');
//   let sumOne = wordOne.length;
//   let wordTwo = two.split('');
//   let sumTwo = wordTwo.length;
//   return [sumOne, sumTwo];
//
// }
// console.log(getTwoLengths('Hank', 'Hippopopalous'));

//5.

let array = [];

const getMultipleLengths = (input) => {
 for (let a=0; a < input.length; a++) {
   array.push(input[a].length);
  console.log(array);
 }
};

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
