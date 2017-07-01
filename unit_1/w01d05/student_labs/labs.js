// PB & J //

// Mise en place
// Get peanut butter, jelly, bread, knife, spoon, plate.
//
// Directions:
// Get plate.
// Place two slices of bread on plate, next to one another.
// Get peanut butter and knife.
// Open peanut butter.
// Take knife into peanut butter; get desired amount on knife.
// Spread peanut butter on both slices of bread, evenly.
// Put knife down, pick up spoon.
// Open jelly.
// Take spoon into jelly; get desired amount on spoon.
// Put jelly on one of the slices.
// Put spoon in sink.
// Use knife to spread jelly.
// Flip one slice on to the other, so that the peanut butter and jelly are facing each other.
// Use knife to cut sandwich in half diagonally.
// Put knife in the sink.
//
// Bon appetit!
//
// Psudo Code:
//
// write a function to make a sandwich
// define PB, JELLY, BREAD, KNIFE, SPOON, PLATE as strings.
// make functions that GET, OPEN, TAKE, PLACE, PUT, USE.
// prompt "bon appetit"


////

// mise en place
const pb = "peanut butter"

const jelly = "jelly"

const bread = "bread"

const knife = "knife"

const spoon = "spoon"

const plate = "plate"


// actions

const get = 'get' + " "

const open = 'open' + " "

const take = 'take' + " "

const place = 'place' + " "

const put = 'put' + " "

const use = 'use' + " "

const end = () => {
  console.log("bon appetit!");
}
// make the sandwhich
const makeSandwich = () => {
  console.log(get + plate)
  console.log(place + "two slices of " + bread + " on a " + plate);
  console.log(get + pb + ", " + jelly + ", " + ", and " + knife);
  console.log(put +  + " and " + jelly + " on " + bread);
  console.log(put + bread + " together. " + "Use " + knife  + " to cut the sandwhich in half");
 end();
}



makeSandwich();
