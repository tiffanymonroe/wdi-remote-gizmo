
//1
//Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

const printCool =  ( name ) => {
  return name + "is cool";
};

// console.log( printCool( "Captain Reynolds" ) );


//2
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = ( num ) => {
   return Math.pow( num , 3 );
}

// console.log(calculateCube( 5 ));

//3
// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

const isAVowel = ( letter ) => {
  const vowels = [ 'a' , 'e', 'i', 'o', 'u' ];
  for ( let k  = 0; k < vowels.length; k++ ) {
    if ( vowels[k] === letter.toLowerCase() ) {
      return true;
    }
  }
  return false;
}

// console.log( isAVowel( "A" ) );

//4
//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.



const getTwoLengths = ( str1 , str2 ) => {
    return [ str1.length , str2.length ];
}


// console.log(getTwoLengths("Hank", "Hippopopalous"));

//5
//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.


const getMultipleLengths = ( arrayOfStrings ) => {
    const lengths = [];
    for ( let j = 0; j < arrayOfStrings.length; j++ ){
        lengths.push( arrayOfStrings[j].length );
      }
      return lengths;
}


// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//6
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

const maxOfThree = ( num1, num2 , num3 ) => {
   return Math.max ( num1, num2, num3 );
}


// console.log(maxOfThree(6, 9, 1));

//7
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = ( arrayOfStrings ) => {
  let longest = '';
  for ( var q = 0; q < arrayOfStrings.length; q ++ ){
    if ( arrayOfStrings[q].length > longest.length ){
      longest = arrayOfStrings[q];
    }
  }
  return longest;
}

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//8
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

const transmogrify = ( num1 , num2 , pow ) => {
  return ( num1 * num2 ) ** pow;
}

// ** is new for ES7!! Yes 7 is not a typo!
// Caveat - ES7 may not work in all javaScript environements ... (cough cough Internet Explorer ... cough cough)

// console.log(transmogrify(5, 3, 2));



//9 
//Project Euler problem #2

let sum = 0;

const fib = (num1, num2) => {
  if (num2 >= 4000000) return "THE SUM IS: " + sum; 
  if (num2 % 2 === 0) sum += num2;
  return fib(num2, num1 + num2);
}

console.log(fib(0, 1));
