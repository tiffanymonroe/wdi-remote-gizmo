// console.log('tamagotchi');

const tamagotchi = {
    name: 'George',
    creatureType: 'rabbit',
    foodInTummy: 10,
    restedness: 10,
    health: 10,
    cry() {
      this.foodInTummy--;
      console.log('%cWaaaaaaa!!!  Amount of food in tummy is now: ' + this.foodInTummy, 'color: blue');
    },
    puke() {
      this.health--;
      console.log(this.name + ' goes Bleeeeh :O~~ , health is now: ' + this.health);
    },
    yawn() {
      this.restedness--;
      console.log(this.name + ' says Yaaawwwwn!  Restedness is now: ' + this.restedness);
    },
    start() {
      const hungerTimer = setInterval(() => {
          this.cry()}, 6000)

      const yawnTimer = setInterval(() => {
          this.yawn()}, 10000)

      const sickTimer = setInterval(() => {
          this.puke()}, 25000)
    }
}

// tamagotchi.cry();
// tamagotchi.puke();
// tamagotchi.yawn();


const tamagotchi2 = {
  name: 'Bob',
  creatureType: 'dragon',
  foodInTummy: 5,
  restedness: 5,
  health: 5,
  cry() {
    this.foodInTummy--;
    console.log('Waaaaaaa!!!  Amount of food in tummy is now: ' + this.foodInTummy);
  },
  puke() {
    this.health--;
    console.log(this.name + ' goes Bleeeeh :O~~ , health is now: ' + this.health);
  },
  yawn() {
    this.restedness--;
    console.log(this.name + ' says Yaaawwwwn!  Restedness is now: ' + this.restedness);
  },
  start() {
    const hungerTimer = setInterval(() => {
        this.cry()}, 6000)

    const yawnTimer = setInterval(() => {
        this.yawn()}, 10000)

    const sickTimer = setInterval(() => {
        this.puke()}, 25000)
  }
}

// tamagotchi2.cry();
// tamagotchi2.puke();
// tamagotchi2.yawn();

const player = {
  name: 'Cathleen',
  sayName() {
    console.log('Hi, my name is ' + this.name);
  },
  feedTamagotchi() {
    tamagotchi.foodInTummy ++;
    console.log('Yum! ' + tamagotchi.name + '\'s food is now ' + tamagotchi.foodInTummy);
    tamagotchi2.foodInTummy ++;
    console.log('Yum! ' + tamagotchi2.name + '\'s food is now ' + tamagotchi2.foodInTummy);
  },
  medicateTamagotchi(whichTamagotchi) {
    if (whichTamagotchi === 'George') {
      tamagotchi.health++;
      console.log(tamagotchi.name + '\'s health is now: ' + tamagotchi.health);
    } else if (whichTamagotchi === 'Bob'){
      tamagotchi2.health++;
      console.log(tamagotchi2.name + '\'s health is now: ' + tamagotchi2.health);
    }
  },
  knockOutTamagotchi(whichTamagotchi) {
    if (whichTamagotchi === 'George') {
      tamagotchi.restedness++;
      console.log(tamagotchi.name + ' is sleeping!  Restedness is now: ' + tamagotchi.restedness);
    } else if (whichTamagotchi === 'Bob'){
      tamagotchi2.restedness++;
      console.log(tamagotchi2.name + 'is sleeping!  Restedness is now: ' + tamagotchi2.restedness);
    }
  }
}

// player.feedTamagotchi();
// player.medicateTamagotchi('George')
// player.medicateTamagotchi('Bob')
// player.knockOutTamagotchi('George')
// player.knockOutTamagotchi('Bob')

// const hungerTimer = setInterval(() => {
//     tamagotchi.cry()}, 6000)
//
// const yawnTimer = setInterval(() => {
//     tamagotchi.yawn()}, 10000)
//
// const sickTimer = setInterval(() => {
//     tamagotchi.puke()}, 25000)

const stopHunger = () => {
  clearInterval(hungerTimer)
}

//If 0, log this.name is dead.

// tamagotchi.start();
// tamagotchi2.start();
