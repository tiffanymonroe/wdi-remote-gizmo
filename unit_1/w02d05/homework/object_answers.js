//Clicker

// const clicker = {
//   clickCount: 0,
//   click: ()=>{
//     clicker.clickCount++;
//     return clicker.clickCount;
// //I needed help figuring out the method after office hours, so I looked at Sarah Anderson's repository and found clicker.clickCount++; and return clicker.clickCount. I couldn't remember how to do it! I kept trying a for loop, but it wouldn't work.
//   }
// };
//
// clicker.click();
// clicker.click();
// clicker.click();
// console.log("The click count is " + clicker.clickCount);

//It's all about me

// const myInformation = {
//   name: "Tiffany",
//   age: 36,
//   fact: "I have two Cavalier King Charles Spaniels.",
//   statement: ()=>{
//     console.log("My name is " + myInformation.name +". I'm " + myInformation.age + " years old and " + myInformation.fact + " In 10 years, I'll be 46 years old. Eek!");
//   },
//   ageIncrease: ()=> {
//     myInformation.age++;
//     console.log ("Happy Birthday to me! I'm now " + myInformation.age + ".");
//   },
//   nameChange: ()=> {
//     myInformation.name = "Rumpelstiltskin";
//     console.log("My new name is " + myInformation.name + ".");
//   }
// }
//
// myInformation.statement();
// myInformation.ageIncrease();
// myInformation.nameChange();

//Greeter


// const greeter = {
//   hello: (name)=>{
//     console.log("Hey, " + name + ".");
//   },
//   goodbye: (name)=>{
//     console.log("Goodbye, " + name + ".");
//   },
//   whoAreYou: (name)=>{
//     console.log("Oh right! " + name +  " how could i forget...!");
//   }
// }
//
// greeter.hello("Jude");
// greeter.goodbye("Earl");
// greeter.whoAreYou("Rumpelstiltskin");

//Collecting Strings

// const stringCollector = {
//   collection: [],
//   collect: (string)=>{
//       let reverseString = string.split("").reverse().join("");
//       stringCollector.collection.push(reverseString);
//       console.log(reverseString);
//     },
//   admireCollection: ()=>{
//     for (i=0; i < stringCollector.collection.length; i++) {
//       console.log(stringCollector.collection[i]);
//     }
//   }
// };
//
//
// stringCollector.collect("these")
// stringCollector.collect("words")
// stringCollector.collect("are")
// stringCollector.collect("backwards")


//ATM

// const atm  = {
//   totalCash: 10000,
//   dispenseTwenties: (numberOfTwenties)=> {
//     let requestedAmount = numberOfTwenties * 20;
//     if (requestedAmount < atm.totalCash) {
//     let totalCash =  atm.totalCash - requestedAmount
//     return totalCash;
//     }
//     else {
//       return null;
//     }
//   }
// };
//
// console.log(atm.dispenseTwenties(7));

//HUNGRY TURTLES

// const leonardo = {
//   name: "Leonardo",
//   color: "blue",
//   weapon: "Katana",
//   pizzaEaten: false,
//   eatPizza: ()=> {
//     if (leonardo.pizzaEaten === true) {
//       leonardo.pizzaEaten = false
//       console.log("Leonardo has already eaten pizza");
//     }
//     else {
//       leonardo.pizzaEaten = true
//       console.log("Leonardo is eating pizza");
//     }
//   }
// }
//
// leonardo.eatPizza();
// leonardo.eatPizza();

//CALCULATOR

// const calculator = {
//   output: 0,
//   multiplication: (int1, int2)=> {
//     output = int1 * int2;
//     console.log(output);
//   },
//   division:  (int1, int2)=> {
//     output = int1 / int2;
//     console.log(output);
//   },
//   addition:  (int1, int2)=> {
//     output = int1 + int2;
//     console.log(output);
//   },
//   subtraction:  (int1, int2)=> {
//       output = int1 - int2;
//       console.log(output);
//   }
// };
//
// calculator.multiplication(10, 2);
// calculator.division(-2, 8);
// calculator.addition(2, 2);
// calculator.subtraction(7, 4);
// calculator.subtraction(11, 7);
//
// 
