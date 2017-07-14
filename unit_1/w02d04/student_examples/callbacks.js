// const foo = () => {
//   console.log("Im in the function foo");
// }
// // console.log(foo);
//
// const bar = (param1) => {
//   console.log("I'm about to execute a callback");
//   param1();
// }
//
//
// bar(foo);


// const secondFunc = () => {
//   console.log('I run through the callback!');
// }
//
// const firstFunct = (param1) => {
//   console.log('I happen first when firstFunct is run!');
//   param1(); //calling a function that matches whatever is in firstFunct(____);
// }
//
// firstFunct(secondFunc);

const ourConnection = (actionToBePerformed) => {
  console.log('Your wish is my command');
  actionToBePerformed();
  console.log("It's done!");
}

ourConnection(()=>{
  console.log("I'm assassinating someone!");
})

ourConnection(()=>{
  console.log("I'm cleaning up the situation");
})
