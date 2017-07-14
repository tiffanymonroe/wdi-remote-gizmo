<<<<<<< HEAD
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

const totalSheers = sheepShearers.map((array)=>{
    return array.sheepCount;
  }).reduce((sum, newValue)=>{
    return sum + newValue;
  }, 0);
=======
// const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
//
// words.forEach(function(word){
//   word = word.toUpperCase();
//   console.log(word);
// });

// const more_words = ["Joe", "Overeats", "Eggs"];
//
// const firstLetters = more_words.map((theWord)=>{
//   const character = theWord.split('').shift();
//   return character;
// })
//
// console.log(firstLetters);
//
// const arr = [8, 8, 8, 8, 8, 8, 8, 8];
//
// const sum = arr.reduce((a,b)=> {
//   return a + b;
// }, 0);
//
// console.log(sum);

const sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];

const sheepShorn = [];
  for (let i = 0; i < sheepShearers.length; i++){
    sheepShorn.push(sheepShearers[i].sheepCount)
  } console.log('There were ' + sheepShorn.reduce((a, b)=>{return a + b;}, 0)
  + ' sheep shorn by sheep shearers at the 1623 Sheep Shearing Feast.');

// const countTheSheep = () => {
//   const sheepShorn = [];
//   for (let i = 0; i < sheepShearers.length; i++){
//     const sheep = sheepShearers[i].sheepCount;
//     sheepShorn.push(sheep)
//   }
//     const finalSum = sheepShorn.reduce((a, b)=>{
//       return a + b;
//     }, 0);
//     return 'There were ' + finalSum + ' sheep shorn by sheep shearers at the 1623 Sheep Shearing Feast.'
// }

// console.log(countTheSheep());
>>>>>>> 0c820cbd9a77f6606120f80cb43a0125d8f04fc0
