//........Easy Going.........
// for (a=1; a <= 20; a++){
//   console.log(a);
// }

//.......Get Even..........
// for (b=0; b <= 200; b+=2){
//   console.log(b);
// }

//......Excited Kitten......

//1.
//
// for (c=1; c <= 20; c++)
// console.log("Love me, pet me! HSSSSSS!");

//2.
//help from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let kittySays = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
//
for (d=1; d <= 20; d++)
if (d % 2 === 0) {
  let getRandom = Math.floor(Math.random() * kittySays.length - 1) + 1;
  console.log(kittySays[getRandom]);
}
else {
  console.log("Love me, pet me! HSSSSSS!");
}

// confused about Math.random()

//........Fizz Buzz.........

//1.
// for (i = 1; i <= 100; i++) {
//   console.log(i);
// }

//2.
// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log('Fizz');
//   }
// }

//3.
// for (i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log('Buzz');
//   }
// }

//4.

// for (i=1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0)
//   {
//     console.log('FizzBuzz');
//   }
// }

//.......Getting to Know You.......

// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]

//1.

// thom [0] = "Gameboy";
// console.log(thom);

//2.
// karolin[1] = 17;
// console.log(karolin);

//3.
// matt[2] = "Gotham City";
// console.log(matt);

//4.
// kristyn.push("Brooklyn");
// console.log(kristyn);

//.........Yell at the Ninja Turtles........

//1.
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
//
//
// //2.
//
// for (t=0; t < ninjaTurtles.length; t++) {
//   console.log(ninjaTurtles[t].toUpperCase());
// }
//can't figure out how to get them uppercase. I tried var str = "Hello World!";
// var res = str.toUpperCase(); from https://www.w3schools.com/jsref/jsref_touppercase.asp


//..............
