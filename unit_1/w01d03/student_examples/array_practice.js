// const arr = [];
// const favFoods = ["sushi", "pizza", "chocolate",];
// console.log(favFoods);

// const ghostBusters1984 = ["Venkman", "Spengler", "Stantz", "Zeddemore", "Melnitz", "Barrett", "Tully"];
//
// console.log(ghostBusters1984[0]);
// console.log(ghostBusters1984[2]);
// console.log(ghostBusters1984.length);


// const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
//
// for (let i = 0; i < drSeuss.length; i++)
// console.log(drSeuss[i]);
//
// for (let i = 1; i < drSeuss.length; i+=2)
// console.log(drSeuss[i]);
//
// for (let i = 0; i < drSeuss.length; i++)
// if (i % 2 !==0){
//   console.log(drSeuss[i], i);
// }

// const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
//                         "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
//
// for (let i = 0; i < looneyTunesChars.length; i++){
//   if (i % 2 === 0 || i === 3){
//     console.log(looneyTunesChars[i], ' this is even or 3');
//   } else {
//     console.log(looneyTunesChars[i], ' this is odd');
//   }
// }

// let numbers = [21, 18, 5, 3, 2, 1, 1];
//
// numbers[5] = "one";
// numbers[6] = "one";
// console.log(numbers);

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", "Baked Goods", "Waldo"]];
console.log(whereIsWaldo);
// console.log(whereIsWaldo[3][2]);
// console.log(whereIsWaldo[2][1]);
//
// // whereIsWaldo[3][1] = "No One"
// // console.log(whereIsWaldo[3][1]);
//
whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo);
