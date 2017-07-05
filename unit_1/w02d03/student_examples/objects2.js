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
