// console.log('good afternoon!');
//array
// const nums = [2, 4, 5, 6, 9, 10];
// //use .map() to create a new array
// const newNums = nums.map((divideByTwo) => {
//   return divideByTwo / 2;
// }).map((subOne) => {
//   return subOne - 1;
// });
//
// console.log(newNums);

//=============================================

// const nums = [2, 4, 5, 6, 9, 10];
//
// const evenNums = nums.filter((findEvenNums)=>{
//   return (findEvenNums % 2 === 0)
// });
//
// console.log('The even numbers are: ' + evenNums);


//
// const oddNums = nums.filter((allNumbersInArray)=>{
//   return allNumbersInArray % 2 != 0;
// }).map((alloddNums) => { alloddNums * 10
// });
//
// console.log('The odd numbers are: ' + oddNums);

//=============================================


const pokemon = { name: "Ivysaur", HP: 60, attack: 62 }

for (let key in pokemon) {
  console.log(key);
  console.log(pokemon[key]);
}
