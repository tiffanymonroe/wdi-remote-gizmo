// ---
// Title: JS Datatypes - SOLUTIONS<br>
//
// ---
// # Homework

// ## Datatypes

console.log("------------------------ Refresher - SOLUTION: --------------------");
// ### Answer the Following
// For each of the following, write which **datatypes** you would use to represent the data, and then give a small example of the **data structure**:

// 1. A light switch that can be either on or off.
// Boolean

// 2. A user's email address.
// string

// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Object

// 4. A list of student names from our class.
// array

// 5. A list of student names from our class, each with a location.
// Object

// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// Object with array

console.log("----------------------Take it Easy - SOLUTION: ----------------------------");

// 1. Make an array that holds all of the colors of the rainbow.
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// 2. Write code that will access "blue" from the rainbow array.
rainbow[4]

// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const kristyn = {
  faveFood: "raspberries",
  hobby: "netflix",
  town: "Brooklyn",
  datatype: "objects"
}

// 4. Write code that will access your hobby from the object that you just created.
console.log(kristyn.hobby);

console.log("----------------Crazy Object! - SOLUTION ----------------------------------");

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}


// Use crazy Object to log the following.
//
// 1. "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

// 2. "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// 3. "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

// 4. "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// 5. The object the contains the name `funkhauser`
console.log(crazyObject.larry.characters[1]);

console.log("---------------------Object-ception - SOLUTION-----------------------------");

//
// With the following object:

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

// Change the value of `limbo` to `null`.
// Logging "Jospeh Gordon Levitt"
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
// Chaging the value
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
// Confirming the value
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limb);

console.log("---------------------## Bond Films - SOLUTIONS-----------------------------");

// ### Array of objects:

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];


// Yikes. Well, copy the bondFilms **array** of **objects** above into your js file. Use **for loops** and conditionals and methods in order to complete the below:

console.log(" -------------------------bondTitles - SOLUTION: -------------------------");
// * Create a new array called `bondTitles` with only the titles of the Bond films, and console.log the new array.
const bondTitles = [];

for (let i = 0; i < bondFilms.length; i++){
  bondTitles.push(bondFilms[i].title);
}

console.log(bondTitles);

console.log(" -------------------------oddBonds - SOLUTION: -------------------------");
// * Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.
const oddBonds = [];

for (let i = 0; i < bondFilms.length; i++){
  if (bondFilms[i].year % 2 != 0){
    oddBonds.push(bondFilms[i].title);
  }
}

console.log(oddBonds);

console.log(" -------------------------cumulativeGross - SOLUTION: -------------------------");
// * Determine the total cumulative gross of the Bond franchise, and console.log the result. _hint_ To make the grosses into usable numbers, look into the `.replace` Javascript method (there are many ways to do this, however). Look into `parseInt` also.

// Solution 1:
let cumulativeGross = 0;

for (let i = 0; i < bondFilms.length; i++) {
  bondFilms[i].gross = bondFilms[i].gross.replace(/\$/, "");
  bondFilms[i].gross = bondFilms[i].gross.replace(/,/g, "");
  bondFilms[i].gross = parseInt(bondFilms[i].gross);
  console.log(bondFilms[i].gross);
  cumulativeGross += bondFilms[i].gross;
}

console.log("------This is the cumulativeGross: -----")
console.log(cumulativeGross);

// Solution 2:
let cumulativeGross = 0;

for (let i = 0; i < bondFilms.length; i++){
    // Get rid of the $
    bondFilms[i].gross = bondFilms[i].gross.replace("$", "");

    // One way to get rid of the commas is to split your string into an array and then combine (join) the items once they are in the array
    let grossArray = bondFilms[i].gross.split(",");
    newGross = grossArray.join("");

    // Turn the new gross into an integer (it's currently a string)
    newGross = parseInt(newGross);

    // add each newGross value to the cumulativeGross
    cumulativeGross += newGross;
}

console.log(cumulativeGross);

console.log(" -------------------------Hungry for More - SOLUTION: -------------------------");

// CHALLENGE

// `bondFilms` again!
//
// - Console log the single movie **object** that contains the actor who starred in the least number of films.
//
// Expected result:

// { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" }


// You should arrive at this result by comparing the frequency of actors.
//
// _hint:_ Objects by definition have **unique** keys. Later in the problem you could create a new object wherein all the Bond actors are keys, and unique, with no doubles.
//
// _another hint:_ You might come to a place where you will want to iterate over an object. You can iterate over arrays, but did you know you can iterate over objects?

// You can either use `Object.keys()`, documentation [here - Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
//
// Or, you can use a `for ... in` loop, documentation [here - for ... in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

console.log(" -------------------------Least Films - SOLUTION: -------------------------");

// Establish an object where the actor's frequencies will be stored:
let actorFrequencies = {}

// Establish a list of actors and remove duplicates by using them as keys within an object. Set the value of each to 0 with the intention of looping again to increase that number.

for (let i=0; i < bondFilms.length; i++) {
  actorFrequencies[bondFilms[i].actor] = 0;
}

// console.log(actorFrequencies);

// Result:

// >{ 'Daniel Craig': 0,
// >  'Sean Connery': 0,
// >  'Roger Moore': 0,
// >  'Pierce Brosnan': 0,
// >  'George Lazenby': 0,
// >  'Timothy Dalton': 0 }

// No dupes!

// Loop again and increase each actors frequency

for (let i=0; i < bondFilms.length; i++) {
  actorFrequencies[bondFilms[i].actor]++;
}

// console.log(actorFrequencies)

// Result:

// > { 'Daniel Craig': 3,
// >   'Sean Connery': 6,
// >   'Roger Moore': 7,
// >   'Pierce Brosnan': 4,
// >   'George Lazenby': 1,
// >  'Timothy Dalton': 2 }

// Find the actor with the lowest frequency. Loop over the object and replace `lowestNum` whenever it encounters a lower number than before, and then also replace the `leastBond` actor name:

let lowestNum = Infinity;
let leastBond = null;

for (let key in actorFrequencies) {
  if (actorFrequencies[key] < lowestNum) {
    lowestNum = actorFrequencies[key];
    leastBond = key;
  }
}

// console.log(leastBond)

// Result:
// > George Lazenby


// Use this result to find the object in the `bondFilms` array with that actor name:

let movieObject = null;

for (let i=0; i < bondFilms.length; i++) {
  if (bondFilms[i].actor = leastBond) {
    movieObject = bondFilms[i];
  }
}

console.log(movieObject);

// Result:
// > { title: 'License to Kill',
// >  year: 1989,
// >  actor: 'George Lazenby',
// >  gross: '$285,157,191' }

// > solution by Thomas Page
