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
    console.log("Bleeeeh :On )");
  },
  yawn: ()=> {
    console.log("Yaaaawwwwn!");
  }
}

tamagotchi.cry();
tamagotchi.puke();
tamagotchi.yawn();
