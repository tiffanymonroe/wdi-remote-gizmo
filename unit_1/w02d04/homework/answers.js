// Create an object that has a property that is an array. Log one of the elements of that array.

// const obj = {
//   array: [1,2,3]
// }
//
// console.log(obj.array[1]);

//Create an object that has a property that is a function (method). Call that method.

// const obj = {
//   method() {
//       console.log('thanks for grading my homework!');
// }
// }
//
//
// obj.method();

//Create an array that has a function as one of its elements. Call that function.

// const array = [
//   1,
//   2,
//   ()=> {
//     console.log("I'm an awesome function!");
//   }
// ];
//
// array[2]();

// ======================================================

//Create a function that returns a function. Call that inner function

// const functionCeption = ()=>{
//   return ()=>{
//     console.log("It's Funct-ion-ception! :O");
//   }
// };
//
// functionCeption()();

//Create an array that has a function that returns an object that has an array. Log an element of the inner array.

// const array = [
//     1,
//     2,
//     ()=>{
//       return {
//         innerArray: [3,4, "Found me!"]
//   }
//   }
// ];
//
//   array[2]().innerArray[2];

//Create an array that has a function that returns a function. Call the inner function.

// const array = [
//   "hello",
//   "I'm part of an array.",
//   ()=> {
//     return ()=>{
//         console.log("I'm kind of getting this!");
//     }
//   }
// ];
//
// array[2]()();

//======================================================

//callback

// const funFunction = ()=>{
//   console.log("I'm a fun function!");
// }
//
// const callBack = (parameter)=>{
//   console.log("I'm going to callback to funFunction. Oh, yeah!");
// }
//
// callBack(funFunction);

//======================================================

//indentation

// if(true){
//   const a = 2 + 2;
//     console.log(a);
// }
//
// if(true){
//   if(false){
//     console.log('hi');
//   }
// }

//======================================================

//semantic naming

// const evenNumbers = [2, 4, 6, 8, 10];

//======================================================

//function definition placement


// const bar = ()=>{
//     console.log('bar here');
// }
//
// const foo = ()=>{
//     console.log('foo here');
// }
//
// foo(bar);
// bar(foo);

//======================================================

//commenting code

// const addTwoNums = (firstNum, secondNum)=>{
//   //function named addTwoNums has two parameters: the first number and the second number
//     const finalValue = firstNum + secondNum;
//     //this function, named finalValue, will add the arguments that user(?) inserts.
//     return finalValue;
//     //returns the sum of the two numbers
// }


//======================================================

//error reading

// foo();
//
// const foo ()=>{
//     console.log('hi');
//
// }

//error message:
// SyntaxError: Missing initializer in const declaration
//
// foo is being called before it's been declared.

//======================================================

//debugger

// const a = 2 + 2;
// debugger
// console.log(a);
// debugger
// a *= 2;
// debugger
// a--;

//

// const b = '5';
//
// if(b === 5){ //will be false
//     console.log('this line should execute');
// }

//running out of time! will work on debugging.
