<<<<<<< HEAD
const adventurer = {
  name: "Beowulf",
  hitpoints: 1000,
  weapons: ["fists", "sword", "fire"]
}

// console.log(adventurer.weapons[1]);

adventurer.weapons.push("Vogue magazine");

// console.log(adventurer.weapons);

for (let i=0; i < adventurer.weapons.length; i++) {
  // console.log(adventurer.weapons[i]);
}

adventurer.companion = {
  name: "Hrothgar",
  home: "Heorot",
  favoriteDrink: "mead"
}

adventurer.companion.name = "Susan"

adventurer.companion2 = "insect"
=======
// console.log('objects2.js');

const adventurer = {
  name: 'Bilbo',
  hitpoints: 100,
  happy: true,
  belongings: ['The One Ring', 'scroll', 'jerk-chicken'],
  companion: {
    name: 'Frodo',
    feet: 'hairy'
  }
};

adventurer.companion.name = "Sam";
console.log(adventurer.companion);
>>>>>>> 0c820cbd9a77f6606120f80cb43a0125d8f04fc0
