const ROT = {
  alphabet: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  },
  rotate(string, rot){
    // Split the inputted string into an array
    arrayOfLetters = string.toLowerCase().split("");

    // Getting the value of the letter from the alphabet key value pairs
    const arrayOfNumbers = arrayOfLetters.map((letter) => {
      return ROT.alphabet[letter];
    });

    // console.log("Array of Numbers: " + arrayOfNumbers);

    // Adjusting the number to add 13 to the value
    const encodedNumberArray = arrayOfNumbers.map((number) => {
      if (typeof number !== "number"){
        number = " ";
      } else {
        number =  number + rot;
        if (number >= 27) {
          number = number - 26;
        };
        if (number <= 0){
          number = 26 + number;
        };
      }
      return number;
    });

    // Getting the key, but have to subtract by 1 to get the matching key and value
    const encodedLetterArray = encodedNumberArray.map((number) => {
      return Object.keys(ROT.alphabet)[number - 1] || " ";
    });
    // console.log(encodedLetterArray);

    // Combining the array to form a string
    const encodedString = encodedLetterArray.join("");
    return encodedString;
    // console.log("Encoded string: " + encodedString);
  },
  encode(string, rot){
    return(this.rotate(string, rot));
  },
  decode(string, rot){
    return(this.rotate(string, (-rot)));
  }
}

/////////////////////////////////////////
// Running and testing
/////////////////////////////////////////
const string = "Hello World";
const rot = 2;

console.log("==========================")
console.log("Original word: " + string);
console.log("Rot Number: " + rot);
console.log("==========================")

console.log("Encoded: " + ROT.encode(string, rot));

const reverse_string = ROT.encode(string, rot);
console.log("-------")
console.log("Decoded: " + ROT.decode(reverse_string, rot));
