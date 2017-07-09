// forEach

// const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
//
// words.forEach((word)=> {
//   console.log(words);
// });

// Map

// const more_words = ["Joe", "Overeats", "Eggs"];
// const newWord = more_words.map((word)=>{
//       console.log(word.charAt(0));
// });

// I missed something, but not sure what. I can print the letters, not the letters as a new array.

// reduce

// const arr = [8, 8, 8, 8, 8, 8, 8, 8];
//
// const product = arr.reduce((a, b)=>{
//     return a * b;
// }, 1);
//
// console.log(product);

// Chaining

// const sheepShearers = [
//     {
//         name: "Tim",
//         age: 20,
//         sheepCount: 18
//     },
//     {
//         name: "C3PO",
//         age: 200,
//         sheepCount: 320
//     },
//     {
//         name: "Cousin It",
//         age: Infinity,
//         sheepCount: 2900
//     }
// ];
//
// const totalSheers = sheepShearers.map((array)=>{
//     let sheers = array.sheepCount;
//     //will log sheers correctly, but I can't get .reduce() to run.
//   }).reduce((total, sheers){
//     return total + sheers;
//     console.log(total + sheers);
//   }, 0);
//
//
// console.log(totalSheers);
