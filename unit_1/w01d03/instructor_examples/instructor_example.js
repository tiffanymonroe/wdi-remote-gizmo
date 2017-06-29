
// if(BOOLEAN EXPRESSION){
//
// }

// const sunny    = true;
// const notSunny = false;
//
// console.log(sunny);
// console.log(notSunny);
// //
// // Change the value of your sunny variable to !true. Log sunny and run your code to see the result.
// //
// // Using a bang, change the value of notSunny to result in true.
//
// let toggle = true;
// console.log('THis is toggle ' + toggle);
//
// toggle = !toggle;
// console.log('This is toggle ' + toggle);
//
// // falsey values
// // false
// // 0
// // ""
// // NaN
// // null
// // undefined
//
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));


// console.log(Boolean("hi"));
// console.log(Boolean(1));
// console.log(Boolean(true));
// console.log(Boolean({}));


// ==, !=,  ===, !==

// console.log(true == true);
//
// console.log(true != true);
//
// console.log(1 == 1);
//
// // type coercison
// console.log(5 == "5");
//
//
// // reach for triple equal
// console.log(5 === "5")


// compare strings

// console.log('hello world' == 'hello world');
//
// console.log('hello world' === 'hello world');

// console.log(1 === 1);
// console.log('beans' === 'soup');
// console.log((5+5 * 3) === ((5+5) * 3));
// console.log(9 !== false);
// console.log(NaN === NaN);



// Relational Operators
// > , < , >= , <=

// console.log( 5 > 2);
//
// console.log( 5 <= 5);
//
//
// // compare strings, compared by alphabetical precedence
//
// console.log('a' > 'b');
//
// console.log('xy' > 'xbc');




// console.log(-10 >= -100);
//
// console.log( Infinity >= -Infinity);
//
// console.log('M' >= 'B');

// Logical Operators

// && , ||

// console.log(true && true);
//
// console.log(false && true);
//
// console.log(true && false);
//
// console.log(false && false);
//
// console.log(1 === 1 && 1 < 2);


// || either side is true

// console.log(true || false);
//
// console.log( false || false);
//
// console.log( 1 > 2 || 1 > 5);
//
//
// console.log( false || true);
//
// const input = '';
// const name = input || "user 1";
//
// console.log(name);


// const a = true;
// const b = false;
//
// // console.log(a && a == b);
//
// // console.log( !true || !false && !false);
//
//
// console.log( 8 > 1 && false || true);


// if (boolean expression){
//   // block statement
// }

// const number = 11;
//
// if (number === 10){
//   console.log('the number is 10');
// } else {
//   console.log(' the number is not 10');
// }

// check for odd numbers
// Modulus %

// const num = 100;
//
// if ( num % 2 === 0){
//   console.log('Number is even');
// } else {
//   console.log('number is odd');
// }


// loop through the numbers 0 through ten and print out whether the
// number is even or odd

// for (let i = 0; i <= 10; i++){
//
//   if ( i % 2 === 0){
//     console.log(i + ' is even');
//   } else {
//     console.log(i + ' is odd');
//   }
//
// }

const cars = ["Chevy", "Audi", "Nissan", "Toyota", "Lexus", "Tesla"];

// wanna loop through this and print the cars at an odd index number

for (let i = 0; i < cars.length; i++){

  console.log(i, ' this is i each time the loop runs');
  // console.log(cars, ' this is cars each time the loop runs');
  // console.log(cars[i], ' this is cars[i] each time the loop runs');

  // if ( i % 2 !== 0){
  //
  //   console.log(cars[i]);
  //
  // }


}
