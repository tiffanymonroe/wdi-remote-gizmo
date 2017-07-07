// const foo = {
//     someArray: [1,2,3]
// }
// console.log(foo.someArray[0]);

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// }
// console.log(foo.someObject.someProperty);

// const foo = () => {
//     console.log('oh hai');
// }
//
// console.log(foo);

// const foo = {
//     someMethod(){
//         console.log('oh hai');
//     }
// }
// foo.someMethod();

// const foo = [ { someProperty:'weee' }, 2, 4 ];
// console.log(foo[0].someProperty);

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0","2,1","2,2"]
// ];
// console.log(foo[1][1]);

// const foo = [
//     1,
//     "hi",
//     ()=> {
//         console.log("fun");
//     }
// ]
//
// foo[2]();

// const foo = {
//     animals: ['dog', 'dolphin', 'bear']
// }
// for(animal of foo.animals){
//     console.log(animal);
// }

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0","2,1","2,2"]
// ];
//
// for(row of foo){
//     for(element of row){
//         console.log(element);
//     }
// }


// const foo = ()=>{
//     return = {
//         someProperty: 'hi'
//     }
// }
//
// console.log(foo().someProperty);

// const foo = () => {
//     return ['apple', 'banana', 'pear']
// };
//
// console.log(foo()[1]);

// const foo = () => {
//     return {
//         someArray: ['fun', 'awesome', 'sweet']
//     }
// }
//
// console.log(foo().someArray[1]);

// const foo = () => {
//     return {
//         someObject: {
//             someProperty: 'some value'
//         }
//     }
// }
//
// console.log(foo().someObject.someProperty);


// const foo = ()=>{
//     return {
//         someMethod(){
//             console.log('oh hai!!!');
//         }
//     }
// }
//
// foo().someMethod();

// const foo = {
//     someMethod(){
//         return {
//             someProperty: 'some value'
//         }
//     }
// };
//
// console.log(foo.someMethod().someProperty);

// const foo = {
//     someMethod(){
//         return {
//             someArray: ['peach', 'apple', 'pear']
//         }
//     }
// }
//
// console.log(foo.someMethod().someArray[2]);

// const foo = {
//     someMethod(){
//         return {
//             someObject: {
//                 someProperty: 'some value'
//             }
//         }
//     }
// }
//
// console.log(foo.someMethod().someObject.someProperty);

// const foo = {
//     someMethod(){
//         return {
//             someMethod(){
//                 console.log('both methods can have the same name!');
//             }
//         }
//     }
// }
//
// foo.someMethod().someMethod();

// const foo = {
//     someMethod(){
//         return ()=>{
//             console.log('hi');
//         }
//     }
// }
//
// foo.someMethod()();

// const foo = [
//     1,
//     'apple',
//     ()=>{
//         return {
//             someProperty: 'some value'
//         }
//     }
// ];
//
// console.log(foo[2]().someProperty);

// const foo = [
//     1,
//     'apple',
//     ()=>{
//         return {
//             someArray: ['cat', 'dog', 'baboon']
//         }
//     }
// ]
//
// console.log(foo[2]().someArray[2]);

const foo = [
    1,
    'apple',
    ()=>{
        return {
            someObject:{
                someProperty: 'some value'
            }
        }
    }
]

console.log(foo[2]().someObject.someProperty);
