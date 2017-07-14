// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// let arr = [];
// let total=0;
// for(i = 0; i<1000; i++){
//   if(i%3===0 || i%5===0){
//     arr.push(i);
//   }
// }
// for(i in arr) {
//   total += arr[i];
// }
// console.log(total);



let arr = [];
let total=0;
for(i = 0; i<1000; i++){
  if(i%5==0 || i%3==0){
    total += i;
  }
}
// for(i in arr) {
//   total += arr[i];
// }
console.log(total);
