// console.log("That's no moon!");
// const player_action = () => {
//
// }


const showStatus = () => {
  alert('Your hull is ' + USS_Schwarzenegger.hull + " and your firepower is " + USS_Schwarzenegger.firepower + ".")
  USS_Schwarzenegger.attack();
};


const USS_Schwarzenegger = {
  hull: 20,
  firepower: 5,
  accuracy: .7,
  attack(){
    if (Math.random() * (.7 - 0) + 0 < alien.accuracy ) {
      this.hull--;
      this.firepower--;
      console.log("You have been hit!");
    }
    else {
      this.hull++;
      this.firepower+=5;
      console.log("You hit your target!");
    }
    showStatus();
  }
}

const alien = {
  hull: [3, 4, 5, 6],
  firepower: [2, 3, 4],
  accuracy: .6,
}


const game = {
  start(){
    const choice = prompt('An alien ship is approaching. Attack? (y/n)')
      if (choice === 'y'){
        USS_Schwarzenegger.attack();
        }
      else
        console.log("Retreat!");
    },
  play(){
    if (alien.hull === 0 || alien.firepower === 0){
      prompt("Alien ship destroyed!")
    }
  },
  end(){
      if (USS_Schwarzenegger.hull === 0 || USS_Schwarzenegger.firepower === 0){
        break
        console.log("Game over!");
  }
  }
}



  game.start();
