//1. When to use a class vs when to use an object

// Class - blueprint, reusable components.
// Ex:
class Chair {
  constructor(fabric, color) {
    this.fabric = fabric;
    this.color = color;

    this.owner = "";
  }
  assignOwner(name){
    this.owner = name;
  }
}

const rollerChair = new Chair("leather", "black");
// console.log(rollerChair);

rollerChair.assignOwner("Kristyn");
// console.log(rollerChair);

//--------------------------
// 2. How to use random number (attached to a variable) throughout the code.

// Math.random() * (max - min) + min

// Have a random number (either 1 or 0), that will let me hit or miss someone
const missOrHit = Math.floor(Math.random() * ( 4 - 0) + 0);
// console.log(missOrHit);

const catsArray = ["charlie", "luna", "willow", "rusty"];

// 5 times I'm logging a cat
// console.log(catsArray[missOrHit]);
// console.log(catsArray[missOrHit]);
// console.log(catsArray[missOrHit]);
// console.log(catsArray[missOrHit]);
// console.log(catsArray[missOrHit]);

console.log("-------------------------");

// If we want to print a random cat 10 times
for (let i = 0; i < 10; i ++){
  const randomIndex = Math.floor(Math.random() * (catsArray.length - 0) + 0);
  // console.log(catsArray[randomIndex]);
}

//--------------------------
// 3. Biggest problem was making the 6 alien ships.

game = {
  alienShips: [],
  generateAlienShips(){
    class AlienShip {
      constructor() {
        //hull between 3 and 6
        this.hull = Math.floor(Math.random() * (7 - 3) + 3);
        // firepower between 2 and 4
        this.firepower = Math.floor(Math.random() * (5 - 2) + 2)
        //accuracy between .6 and .8
        this.accuracy = Math.floor(Math.random() * (8 - 6) + 6) / 10;
      }
    }

    for (let i=1; i <= 6; i++) {
      this.alienShips.push(new AlienShip());
    }

  }
}

game.generateAlienShips();
console.log(game.alienShips);



//--------------------------
//4. How to loop through all the ships without the already-dealt with ship appearing again.

const currentShip = game.alienShips.shift();

console.log("I'm currently fighting: ", currentShip);
console.log("Ships remaining to fight:");
console.log(game.alienShips);


//--------------------------
// 5. Q: Player was not given the option to retreat until either he or you are distroyed. If you were winning and destroyed… is that right?

// * If you destroy the ship, you have the option to attack the next ship or to retreat
//
// * If you retreat, the game is over, perhaps leaving the game open for further developments or options.

//--------------------------
// 6. Students present their homework.
// - Alex
// - Eric
