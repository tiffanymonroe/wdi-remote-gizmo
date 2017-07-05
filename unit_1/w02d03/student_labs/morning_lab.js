//creating an object
//name the variable with const objectName
//assign value with assignment operator =
//use curly braces {} to place keys and values in
//to define key: value (string, number, boolean) and *comma*
//end with semicolon?

//  ME  //
// const me = {}
//
// me.name = "Tiffany"
// me.age = 36
// me.email = "hello@tiffanymonroe.com"
//
// console.log(me);
//
// console.log(me.name);
//
// me.age = 1000
//
// console.log(me.age);
//
// me["place of residence"] = "Orange County, California";
//
// console.log(me["place of residence"]);

//  SLIMER  //

// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }
//
// console.log(monster.name);
//
// monster.type = 'mystery meat'
// monster.age = 6
//
// console.log(monster);

//  OGRES //
const weapons = ["fists", "sword", "fire"]; {
  for (let i=0; i < weapons.length; i++)
}

const adventurer = {
  name: "Beowulf",
  currentWeapon: weapons,
  hitpoints: 1000
}

const ogre = {
  name: "Grendel",
  hitpoints: 1000
}


console.log(adventurer);
console.log(ogre);

const start = () => {
  alert('You have ' + adventurer.hitpoints + " hitpoints. The ogre has " + ogre.hitpoints + ". Your current weapon is " + currentWeapon +".")
  console.log(start);
};

const currentWeapon = () => {
  if (adventurer.hitpoints < 1000) {
    currentWeapon = i[0]
  }
  else if (adventurer.hitpoints >= 1500) {
    currentWeapon = i[1]
  }
  else {
    currentWeapon = i[2]
  }
};


start();
