console.log("That's no moon!");



const showStatus = () => {
  alert('Your hull is ' + USS_Schwarzenegger.hull + " and your firepower is " + USS_Schwarzenegger.firepower + ".");
  game.play();
};


const USS_Schwarzenegger = {
  hull: 20,
  firepower: 5,
  accuracy: .7,
  attack(){
    if (Math.random() * (.8 - 0) + 0 < // use randomShip and randomAccuracy ? {
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
    const nextMove =
    prompt('attack / retreat')
    if (nextMove === 'attack'){
      USS_Schwarzenegger.attack();
    }
    else if (nextMove === 'retreat'){
      this.end();
    }
    else if (alien.hull === 0 || alien.firepower === 0){
      prompt("Alien ship destroyed! There's another one coming. attack / retreat?" )
      if (nextMove === 'attack'){
        USS_Schwarzenegger.attack();
      }
      else if (nextMove === 'retreat'){
        this.end();
      }

    }
    else if (USS_Schwarzenegger.hull === 0 || USS_Schwarzenegger.firepower === 0) {
      end();
    }
  },
  end(){
        break
        console.log("Game over!");
  }
}


  game.start();

  //Trying to get the alien ships to randomize.

  const alien = {
    ships: [1, 2, 3, 4, 5, 6],
    hull: [3, 4, 5, 6],
    firepower: [2, 3, 4],
    accuracy: [.6, .7, .8],
    randomShip(){
      for (let i=0; i < alien.ships.length; i++){
        return Math.floor(Math.random() * (alien.ships[5] - alien.ships[0])) + alien.ships[0];
      }
    },
    randomAccuracy(){
      for (let i =0; i < alien.accuracy.length; i++){
        return Math.floor(Math.random() * (alien.accuracy[2] - alien.accuracy[0])) + alien.accuracy[0];
      }
    }
  }


  console.log(alien.randomShip());
  console.log(alien.randomAccuracy());

//figure out how to set up game to use randomize functions. where should the loop go?
