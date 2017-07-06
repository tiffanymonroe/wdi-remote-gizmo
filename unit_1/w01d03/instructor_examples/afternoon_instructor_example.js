// const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];
//
// console.log(typeof list)


// All object have properties and methods:
// property is like a value
// ex. property
// list.length
// methods are basically functions
// list.pop()

// Make an empty array call arr
const arr = [];

// Make another array faveFoods that contains a list of your top three favorite foods

const faveFoods = ['ramen', 'ribs', 'asparagus'];

// Console.log the array of your favorite foods


// console.log(faveFoods[1]);



// console.log(faveFoods[faveFoods.length - 2]);


const ghostBusters1984 = ["Venkman", "Spengler","Stantz", "Zeddemore", "Melnitz", "Barrett", "Tully"];

// // Console.log the first element in the array
// console.log(ghostBusters1984[0]);
// // Console.log the third element in the array
// console.log(ghostBusters1984[2]);
// // Console.log the length of the array
// console.log(ghostBusters1984.length);

const kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"];
//
// for (let i = 0; i < kitchenSink.length; i++){
//
//   console.log(kitchenSink[i] + " this is dirtayyy")
// }

// for (let i = 0; i < kitchenSink.length; i +=2){
//
//   //i += 2
//   // i = i + 2
//   console.log(kitchenSink[i])
// }


const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch",
              "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];


// Console.log all of the elements in the array
// for (let i = 0; i < drSeuss.length; i++){
//   console.log(drSeuss[i]);
// }


// Console.log the odd numbered index items in the array
// for (let i = 1; i < drSeuss.length; i+=2){
//   console.log(drSeuss[i]);
// }


// Console.log the index number and the item of every odd numbered index items (on separate lines)
// for (let i = 0; i < drSeuss.length; i++){
//   console.log(i);
//
//   if(i % 2 !==0 ){
//     console.log(drSeuss[i], i);
//   }
//
// }


// const items = ['pepsi', 'coke', 'tacos', 'rumchada', 'burrito'];
//
//
// for (let i = 0; i < items.length; i++){
//
//   if(items[i] === 'pepsi' || items[i] === 'coke' || items[i] === 'rumchada'){
//     console.log(items[i] + ' this is a drink');
//   } else {
//     console.log(items[i] + " this is a food");
//   }
// }

const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

// Console.log the even numbered items in the array using a conditional statement.

// for (let i = 0; i < looneyTunesChars.length; i++){
//     if( i % 2 === 0 || i === 3){
//       console.log(looneyTunesChars[i], ' this is even or 3');
//     } else {
//       console.log(looneyTunesChars[i], 'odd')
//     }
// }


const veggies = ["red pepper", "leek", "pumpkin", "cauliflower"];


veggies[1] = 'brocolli';

// console.log(veggies);


const numbers = [21, 18, 5, 3, 2, 1, 1];

numbers[numbers.length - 1] = 'one';
numbers[numbers.length - 2] = 'one';
//
// console.log(numbers);


const fruit = ["apple", "oranges", "banana",
                        "grapes", "cherries", "blueberries", "kiwi"];


/// know if this array contains cherries



// adds to the end of the array
// fruit.push('strawberry');

// gets rid of the last one
// console.log(fruit.pop())

// adds to the front array
fruit.unshift('jim')

// removes the first items
fruit.shift();


const pairs = [['snoopy', 'linus'], ['peppermint patty', 'woodstock']];

// console.log(pairs[1]);
// console.log(pairs[1][1]);
// pairs[0] brought us to the array ['snoopy', linus]
// pairs[0][0] 'snoopy'


const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", "Baked Goods", "Waldo"]];

// What would you write to access "Waldo"?
// What would you write to access "Jacc"?
// Change "Baked Goods" to "No One"
// Research the .splice() method and remove "Eggbert"

// console.log(whereIsWaldo[3][2]);


// console.log(whereIsWaldo[2][1]);
whereIsWaldo[3][1] = "No One";
// console.log(whereIsWaldo[3][1]);

console.log(whereIsWaldo.splice(1, 1));

console.log('--------------------------------')
console.log(whereIsWaldo);
