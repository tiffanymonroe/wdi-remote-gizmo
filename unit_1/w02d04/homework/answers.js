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

const funFunction = ()=>{
  console.log("I'm a fun function!");
}

const callBack = (parameter)=>{
  console.log("I'm going to callback to funFunction. Oh, yeah!");
}

callBack(funFunction);
