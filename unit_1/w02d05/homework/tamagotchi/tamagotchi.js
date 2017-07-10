console.log("in need of more coffee!");

const tamagotchi = {
  name: "Norbert",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: ()=> {
    console.log("Waaaaaa!!!");
  },
  puke: ()=> {
    console.log("Bleeeeh :O~~~~");
  },
  yawn: ()=> {
    // console.log(this.name + " says, 'Yaaaawwwwn!''");
    console.log(tamagotchi.name + " says, 'Yaaaawwwwn!''");
    //why doesn't this.name work, but tamagotchi.name does?
  }
}

tamagotchi.cry();
tamagotchi.puke();
tamagotchi.yawn();

const secondTamagotchi = {
  name: "Hedwig",
  creatureType: "Owl",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: ()=> {
    console.log("Waaaaaa!!!");
  },
  puke:()=>{
    console.log("Bleeeeh :O~~~~");
  },
  yawn:()=>{
    console.log(secondTamagotchi.name + " says, 'Yaaaawwwwn!'");
  }
}

secondTamagotchi.cry();
secondTamagotchi.puke();
secondTamagotchi.yawn();
