// const foo = {
//   someArray: [1, 2, 3]
// }
//
// console.log(foo.someArray[0]);
// //


// const foo = {
//   someObject: {
//     someProperty: 'oh hai!'
//   }
// }
//
// console.log(foo.someObject.someProperty);

// const foo = {
//   someMethod() {
//     console.log('oh hai!');
//   }
// }
//
// foo.someMethod();

//someMethod() is shorthand for a function. Can also do someMethod: () =>

// const foo = [{someProperty: 'weee'}, 2, 4];
//
// console.log(foo[0].someProperty);

// const foo = [
//   ["0,0", "0,1", "0,2"],
//   ["1,0", "1.1", "1,2"],
//   ["2,0", "2,1", "2,2"]
// ];
//
// console.log(foo[1][2]);

// const foo = [
//   1,
//   "hi",
//   ()=> {
//     console.log("fun");
//   }
// ]
//
// foo[2]();

// const foo = {
//   someArray: ["a","b","c"];
// // };

// for(i=0; i < foo.someArray.length; i++){
// console.log(foo.someArray[i]);}
//
// const foo = ["hi", "dolphin", "bear"]
// for(element of foo) {
//   console.log(element);
//
// }
//
//
// const foo = {
//   animals: ['dog', 'dolphin', 'bear']
// }
// for(animal of foo.animals){
//   console.log(animal);
// }

const foo = [
  ["0,0", "0,1", "0,2"],
  ["1,0", "1.1", "1,2"],
  ["2,0", "2,1", "2,2"]
];

for(row of foo) {
  for(column of foo) {
    console.log(column);
  }
}
