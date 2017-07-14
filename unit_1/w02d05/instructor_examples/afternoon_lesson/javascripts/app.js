console.log('window is loaded')



// Map method on an array

// transform values from one array into a new array

// without map

// const newNumbers = [];
//
// for (let i =0; i < numbers.length; i++){
//   newNumbers[i] = numbers[i] * 2;
// }
//
// console.log(newNumbers, ' new array')


// map simplifies this, map is a method on all arrays
// const numbers = [1, 2, 3, 4];

// const newNumbers = numbers.map((numbers) => {
//   return numbers * 2;
// })
//
//
// console.log(numbers, ' the original array')
// console.log(newNumbers, ' this is newNumbers')


// chain map

// const numbers = [1, 2, 3, 4];
//
// const newNumbers = numbers.map( (number) => {
//   return number * 2;
// }).map((number) => {
//   return number + 1;
// })




//
// console.log(newNumbers);


// const nums = [2, 4, 5, 6, 9, 10];

// Using map, divide all of the numbers in the array by 2.
// Using, map, subtract 1 from the new array.
// Return an array of these new numbers.
//
// const newNums = nums.map((number) =>{
//   return number / 2
// }).map((number) => {
//   return number - 1;
// });
//
// const newNums = nums.map(function(number, i, numssssssssArray){
//
//   return number / 2
// })

// filter

// Use this array to do the following: nums = [2, 4, 5, 6, 9, 10];
// Using filter, return a new array with only the even numbers.

// const nums = [2, 4, 5, 6, 9, 10];
//
//
//
// const evenNums = nums.filter( (num) => {
//
//   return num % 2 === 0;
//
// })
//
// console.log(evenNums)


// Use the this array to do the following: nums = [2, 4, 5, 6, 9, 10];
// Using filter, return a new array with only the odd numbers.
// Use map to return an array where the numbers in the new array are multiplied by 10.

// const nums = [2, 4, 5, 6, 9, 10];
//
//
// const newArray = nums.filter((allTheNumbersInTheArray)=>{
//   return allTheNumbersInTheArray % 2 !== 0;
// }).map((oddNumber) => {
//   return oddNumber * 10;
// });
//
//

// reduce a method that applies a function against an accumalotor
// and each value of the array from left to right

// const numArray = [1,2,3,4];
//
//
// const multipied = numArray.reduce((product, eachFactorToMultiply) => {
//   return product * eachFactorToMultiply;
// })
//
//
// console.log(multipied)


const nums = [1,2,3,4];

const sum = nums.reduce( (a,b) => {
  return a + b
})

console.log(sum)


// forEach method for iterating over an array // might be userful in creating dom elements

// very very common method throughout programming languages
// const usernames = ["Jim", " Taco", "Kate", " yellowDOg41"];
//
// usernames.forEach((eachElement) => {
//   console.log(eachElement, ' this is eachElement')
// })


// For in Loop, for looping over objects

// const pokemon =  { name: "Charizard", HP: 68, attack: 130 }
//
//
// // for (let key in pokemon){
// //   console.log(key, ' this is the key')
// //   // console.log(pokemon.key, ' this is pokemon.key')
// //   console.log(pokemon[key])
// //
// // }
//
//
// console.log(Object.keys(pokemon))

// const pokemon = { name: "Ivysaur", HP: 60, attack: 62 }
//
//
// // Use a for..in loop to print all the keys of the pokemon object
// // Use a for..in loop to print all the values of the pokemon object
//
//
// for (let prop in pokemon){
//   console.log(prop, ' this should be all the keys');
//   console.log(pokemon[prop])
// }
//

const pokemon = {
  name: "Bulbasaur",
  getName(){
    return this.name;
  }
}


console.log(pokemon.getName());
































// console.log(newArray);
