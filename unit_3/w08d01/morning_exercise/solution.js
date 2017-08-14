// THOM'S (modified by Kristyn for ES6)

// const validCard = (num) => {
//
// 	let reversedArr = num.toString().split('').reverse();
//
// 	for (let i=1; i < reversedArr.length; i+=2) {
// 		reversedArr[i] = reversedArr[i] * 2;
// 	}
//
// 	reversedArr = reversedArr.join('').split('');
//
// 	const summed = reversedArr
// 		  .map((n) => { return n = parseInt(n); })
// 		  .reduce((sum, m) => { return sum + m; });
//
// 	return summed % 10 == 0;
// }

// console.log(validCard(1234567890123456));
// #should be false

// console.log(validCard(4408041234567893));
// #should be true

// console.log(validCard(38520000023237));
// #should be true

// console.log(validCard(4222222222222));
// #should be true

// -----------------------------------
// THOM'S (modified by Kristyn to not reverse string, but to navigate the for loop from back to front)

const validCard = (num) => {

	let arr = num.toString().split('');
console.log(arr);
	for (let i=arr.length-2; i >= 0; i-=2) {
		arr[i] = arr[i] * 2;
	}
  console.log(arr);
	arr = arr.join('').split('');

	const summed = arr
		  .map((n) => { return n = parseInt(n); })
		  .reduce((sum, m) => { return sum + m; });

	return summed % 10 == 0;
  console.log(summed);
}

console.log(validCard(1234567890123456));
// #should be false

// console.log(validCard(4408041234567893));
// #should be true

// console.log(validCard(38520000023237));
// #should be true

// console.log(validCard(4222222222222));
// #should be true


// -----------------------------------
// Solutions below work, but are written with ES5 syntax

// THOM'S

// var validCard = function(num) {
//
// 	var reversedArr = num.toString().split('').reverse();
//
// 	for (var i=1; i < reversedArr.length; i+=2) {
// 		reversedArr[i] = reversedArr[i] * 2;
// 	}
//
// 	reversedArr = reversedArr.join('').split('');
//
// 	var summed = reversedArr
// 		  .map(function(n) { return n = parseInt(n); })
// 		  .reduce(function (sum, m) { return sum + m; });
//
// 	return summed % 10 == 0;
// }

// console.log(validCard(1234567890123456));
// #should be false

// console.log(validCard(4408041234567893));
// #should be true

// console.log(validCard(38520000023237));
// #should be true

// console.log(validCard(4222222222222));
// #should be true

///////////////////////////////////////////////////////////////

// THOM's Solution Modified by Kristyn (numbers not reversed)

// var validCard = function(num) {
//
// 	var numberArr = num.toString().split('');
//
// 	for (var i=numberArr.length-2; i >= 0; i-=2) {
//     console.log(i);
// 		numberArr[i] = numberArr[i] * 2;
// 	}
//
// 	numberArr = numberArr.join('').split('');
//
// 	var summed = numberArr
// 		  .map(function(n) { return n = parseInt(n); })
// 		  .reduce(function (sum, m) { return sum + m; });
//
// 	return summed % 10 == 0;
// }

// console.log(validCard(1234567890123456));
// #should be false

// console.log(validCard(4408041234567893));
// #should be true

// console.log(validCard(38520000023237));
// #should be true

// console.log(validCard(4222222222222));
// #should be true

/////////////////////////////////////////////////////


// DEREK'S

// var validCard = function(n){
//   var string = n.toString();
//   var num = string.split('').map(function(data){
//     return parseInt(data, 10);
//   });
//   for (var i=num.length - 2; i >= 0; i = i-2) {
//     num[i] = num[i] * 2
//   };
//   var card = num.join('').split('').map(function(data){
//     return parseInt(data, 10);
//   });
//   var newNum = card.reduce(function(a, b){
//     return a + b
//   });
//   if (newNum % 10 == 0) { return true } else { return false };
// };

// console.log(validCard(1234567890123456));
// #should be false

///////////////////////////////////////////////////////////////

// CHRISTINE'S

// var validCard = function (num) {
//     var creditNum = num.toString().split("");
//     sum = 0;
//
//     //for every other character, starting from the penultimate one
//     // turn it back into number and take the sum
//     for (var j = creditNum.length-2; j >= 0; j-=2) {
//         var double = parseInt(creditNum[j]) * 2;
//
//         var stringify = double.toString().split("");
//
//         //sum up the double digit numbers
//         for (var k = 0; k < stringify.length; k++){
//             sum += parseInt(stringify[k]);
//         }
//     }//ends forloop
//
//     //add the rest of the 2n numbers
//     for (var m = creditNum.length-1; m >= 0; m-=2){
//         sum += parseInt(creditNum[m]);
//     }
//
//     //if divisible by 10, it is valid
//     return (sum % 10 === 0)
// };
////////////////////////////////////////////////////////////

// JOE CIAMPI

// var validCard = function(num){
//     var digits = num.toString(10).split("").map(Number);
//     for (i=digits.length - 2; i>=0; i-=2){
//         var newDig = digits[i]*2;
//         digits.splice(i,1,newDig)
//     }
//     for (i=0; i<=digits.length; i++){
//         var altered = digits[i] - 10;
//         if(altered>=0){
//             digits.splice(i,1,altered+1)
//         }
//     }
//     var sum = digits.reduce(function(a, b) { return a + b; }, 0);
//     return (sum % 10 == 0);
// }
