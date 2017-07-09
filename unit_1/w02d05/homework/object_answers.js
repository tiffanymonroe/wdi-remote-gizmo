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


const greeter = {
  hello: (name)=>{
    console.log("Hey, " + name + ".");
  },
  goodbye: (name)=>{
    console.log("Goodbye, " + name + ".");
  },
  whoAreYou: (name)=>{
    console.log("Oh right! " + name +  " how could i forget...!");
  }
}

greeter.hello("Jude");
greeter.goodbye("Earl");
greeter.whoAreYou("Rumpelstiltskin");

//
