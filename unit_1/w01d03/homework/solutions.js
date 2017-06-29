
// ---
// Title: SOLUTION: Arrays, Loops, and Conditional
// ---
// # Homework
//

// ## Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.
//
// ==============================================
// SOLUTION:
console.log("answer for Easy Going:")

for (let i = 1; i <= 20; i ++){
  console.log(i);
}

console.log("==============================================")
// ==============================================

// ## Get Even
// 1. Write a for loop that will log only the even numbers in 0 through 200.
// >Hint: Think about the increment expression.
//
// ==============================================
// SOLUTION:
console.log("answer for Get Even:")

for (let i = 0; i <= 200; i += 2){
  console.log(i);
}

console.log("==============================================")
// ==============================================

// ## Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//
// 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
//
// >Hint: You will need to use Math.random()
//
// ![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)
//

// ==============================================
// SOLUTION:
console.log("answer for Excited Kitten:")

randomMessage = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

for (let i = 1; i <= 20; i ++){
  if( i % 2 === 0) {
    console.log(randomMessage[Math.floor(Math.random() * randomMessage.length - 1) + 1]);

  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}

console.log("==============================================")
// ==============================================

// ## Fizz Buzz
// 1. Write a javascript application that logs all numbers from 1 - 100.
//
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
//
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
//
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
//

// ==============================================
// SOLUTION:
console.log("answer for Fizz Buzz:")

for (let i = 1; i <= 100; i ++){
  if( i % 3 === 0 && i % 5 === 0 ) {
    console.log('fizzbuzz')
  } else if( i % 3 === 0 ) {
    console.log('fizz');
  } else if ( i % 5 === 0 ) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}

console.log("==============================================")
// ==============================================

// ## Getting to Know You

// Use the following arrays to answer the questions below (name, age, hometown):
// ```
// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]
// ```
// 1. Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the `thom` array and replace it with "Gameboy".
//
// 2. Karolin just had her birthday; change Karolin's array to reflect her being a year older.
//
// 3. Change Matt H's hometown from Philadelphia to "Gotham City".
//
// 4. Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".
//

// ==============================================
// SOLUTION:
console.log("answer for Getting to Know You:")

const thom = ["Thom", 1000, "Christchurch"];
const karolin = ["Karolin", 16, "New York"];
const kristyn = ["Kristyn", 5, "Pittsburgh"];
const matt = ["Matt H", 186, "Philadelphia"];

// 1.
thom[0] = "Gameboy";
console.log(thom);

// 2.
karolin[1] += 1;
console.log(karolin);

// 3.
matt[2] = "Gotham City";
console.log(matt);

// 4.
kristyn[2] = "Brooklyn";

// OR

kristyn.pop();
kristyn.push("Brooklyn");
console.log(kristyn);

console.log("==============================================")
// ==============================================

// ## Yell at the Ninja Turtles
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
//
// 2. Use a `for loop` to call `toUpperCase()` on each of them and print out the result.
//

// ==============================================
// SOLUTION:
console.log("answer for Yell at the Ninja Turtles:")

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let i = 0; i < ninjaTurtles.length; i++){
  console.log(ninjaTurtles[i].toUpperCase());
};

console.log("==============================================")
// ==============================================

// ## Return of the Closets
//
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.
//
// ```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
//
// // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// ```
//
// ### Alien Attire
// 1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
//

// ==============================================
// SOLUTION:
console.log("answer for Alien Attire:");

// kristynsShoe = kristynsCloset[0];

// or

kristynsShoe = kristynsCloset.shift();
console.log(kristynsCloset);

thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);

console.log("==============================================")
// ==============================================

// ### Dress Us Up
// 1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
//

// ==============================================
// SOLUTION:
console.log("answer for Dress Us Up:")

// 3 outfits for Kristyn
for (let i = 1; i <=3; i++){

  // Random number the max is the length of the array
  kristynRandomNum = Math.floor((Math.random() * (kristynsCloset.length - 1)));

  console.log("Kristyn will be wearing: " + kristynsCloset[kristynRandomNum] + " and " + kristynsCloset[kristynRandomNum]);
}

console.log("++++++++++++++++++++");

// 3 outfits for Thom
for (let i = 1; i <=3; i++){

  thomRandomShirtNum = Math.floor(Math.random() * (thomsCloset[0].length - 1));

  thomRandomPantsNum = Math.floor(Math.random() * (thomsCloset[1].length - 1));

  thomRandomAccessoriesNum = Math.round(Math.random() * (thomsCloset[2].length - 1));

  console.log("Thom will be wearing: " + thomsCloset[0][thomRandomShirtNum] + " and " + thomsCloset[1][thomRandomPantsNum] + " and " + thomsCloset[2][thomRandomAccessoriesNum]);

}

console.log("==============================================")
// ==============================================

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 10 - Kristyn and Thom have their outfits ready for class - array practice"
// <hr>
//
// ### Dirty Laundry
// Continue looking at the closet arrays:
// 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
//

// ==============================================
// SOLUTION:
console.log("answer for Dirty Laundry:")

for (let i = 0; i < kristynsCloset.length - 1; i ++){
  console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

console.log("++++++++++++++++++++");

for (let i = 0; i < thomsCloset.length; i ++){
  let closetSection = thomsCloset[i];

  for (let j = 0; j < closetSection.length; j ++){
    console.log("WHIRR: Now washing " + closetSection[j]);
  }
}

console.log("==============================================")
// ==============================================

// ### Inventory
// 2. Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.
//
// ==============================================
// SOLUTION:
console.log("answer for Inventory:")

console.log(thomsCloset[0]);
console.log(thomsCloset[1]);
console.log(thomsCloset[2]);

console.log("==============================================")
// ==============================================

// ## Multiples of 3 and 5
//
// _Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
//
// :clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:
//

// ==============================================
// SOLUTION:
console.log("answer for Multiples of 3 and 5:")

let sum = 0;
for (let i = 1; i < 1000; i ++ ){
  if (i % 3 === 0 || i % 5 === 0) {
    sum = sum + i;
  }
}
console.log(sum);

console.log("==============================================")
// ==============================================

// ## Hungry for More
//
// ## Triangles
//
// 1. Write a loop that console logs a **right isoscelese triangle** made of '#' that has the height and length of the argument.
//
// >Ex: argument is 7
// ```
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```
//
// 2. Write a loop that console logs an **upside down right isosceles triangle** made of '#' that has the height and length of the argument.
//
// >Ex: argument is 6
// ```
// ######
// #####
// ####
// ###
// ##
// #
// ```
//

// ==============================================
// SOLUTION:
// console.log("answer for Triangles:")
//
// // right isoscelese triangle
// const height = 6;
// let buildTriangle = "";
//
// for (let i = 0; i < height; i++){
//   buildTriangle += '#';
//   console.log(buildTriangle);
// };

console.log("==============================================")

// upside down right isosceles triangle
// let height = 6;
//
// for (let i = height; i > 0; i--){
//   console.log('#'.repeat(i));
// };

// Documentation about repeat():https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

console.log("==============================================")
// Second Solution:

let height = 8;
let buildTriangle = [];

while (height > 0){
  buildTriangle = [];
  for (let i = height; i > 0; i--){
    buildTriangle.push('#');
  };
  console.log(buildTriangle.join(""));
  height = height - 1;
}


console.log("==============================================")
// ==============================================

// ## Find the Median
// - Find the median number in the following `nums` array, then console.log that number.
// -  _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`
//
// ```
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
//
// Expected output:
// => 15
// ```
//
// ==============================================
// SOLUTION:
console.log("answer for Find the Median")
// To calculate the median of any set of numbers, you need to write the numbers in order. If there is an odd number of results, the median is the middle number. If there is an even number of results, the median will be the mean of the two central numbers.

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

let median = 0;

// Sort the array to get the numbers in ascending order
nums.sort();
console.log("Nums array after sort " + nums);
console.log("How long is the array " + nums.length);

// Check if the array has an even numbered of elements
if (nums.length % 2 === 0){
  const middleIndex1 = Math.floor((nums.length-1)/2);
  const middleIndex2 = Math.ceil((nums.length-1)/2);
  median = (nums[middleIndex1] + nums[middleIndex2])/2;
} else {
  median = nums[Math.floor(nums.length/2)];
}

console.log(median);
console.log("==================================================")
 // ==================================================
