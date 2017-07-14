console.log('%c spacebattle', 'font-size: 40px');

const game = {
  playerShip: null,
  alienShips: [],
  currentAlienShipNum: 1,
  checkWinner() {
    if (this.playerShip.hull > 0) {
      console.log("%c YOU DESTROYED THE SHIP!", "background-color: black; color: white; font-size: 30px");
      console.log("%c Hull remaining: " + this.playerShip.hull, "background-color: cornflowerblue; color: white; font-size: 30px");
      this.currentAlienShipNum++;
      if (this.alienShips.length == 0) {
        console.log("%c Congrats!! You saved the Earth from the alien fleet.", "background-color: yellow; font-size: 40px;");
      } else {
        this.chooseStrategy();
      }
    } else {
      console.log("%c You lost.", "background-color: green; color: yellow");
    }
  },
  chooseStrategy() {
    let input = prompt("There are " + this.alienShips.length + " alien ships! Will you (a)ttack or (r)etreat?");
    if (input == "a") {
      this.runBattle();
    } else {
      console.log("You retreated.");
    }
  },
  runBattle() {
    console.log('==============================');
    console.log('%c ATTACKING ALIEN SHIP NUMBER: ' + this.currentAlienShipNum, 'color: red; font-size: 20px');
    console.log('==============================');
    let currentAlienShip = this.alienShips.pop();
    while (this.playerShip.hull > 0 && currentAlienShip.hull > 0) {
      this.playerShip.attack(currentAlienShip);
      if (currentAlienShip.hull > 0) {
        currentAlienShip.attack(this.playerShip);
      }
    }
    this.checkWinner();
  },
  generatePlayerShip() {
    this.playerShip = {
      name: "USS Schwarzenegger",
      hull: 20,
      accuracy: .7,
      firepower: 5,
      attack(target) {
        console.warn('You are attacking the target: ', target);
        if (Math.random() < this.accuracy) {
          target.hull -= this.firepower;
          console.error("Target hit! You did " + this.firepower + " damage!!");
        } else {
          console.log("%c You missed!!", "color: orange");
        }
      }
    }
  },
  generateAlienShips() {
    class AlienShip {
      constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
      }
      attack(target) {
        console.warn("The alien is attacking you!");
        if (this.accuracy < Math.random()) {
          target.hull -= this.firepower;
          console.error("You have been hit! The alien did " + this.firepower + " damage!!");
        } else {
          console.log("%c The alien missed . . .", "color: orange");
        }
      }
    }
    // populate the alienShips array with constructed alien ships
    for (let i=1; i <= 6; i++) {
      this.alienShips.push(new AlienShip());
    }
  },
  startGame() {
    this.generatePlayerShip();
    this.generateAlienShips();
    this.chooseStrategy();
  },
}

game.startGame();

// Solution created by Thom Page 2017
