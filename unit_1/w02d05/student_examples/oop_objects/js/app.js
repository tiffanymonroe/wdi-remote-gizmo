// console.log('testing');

// const garcia = {
//       albums: ['shady grove', 'run for the roses', 'hooteroll', 'Garcia', 'Reflections'],
//       instruments: ['Vocals', 'pedal steel', 'electric guitar', 'acoustic guitar', 'banjo'],
//       alive: false,
//       quote: 'Im shopping around for something to do that no one will like',
//       friends: [{
//         name: 'Bobby weir',
//         hobby: 'guitar'
//       },
//       {
//         name: 'Bob Dylan',
//         hobby: 'writing songs'
//       },
//       {
//         name: 'Allen Ginsberg',
//         hobby: 'writing poems'
//       },
//       {
//         name: 'Phil Lesh',
//         hobby: 'Playing dope bass lines'
//       }]
//   }
//
// console.log(garcia.albums[2]);
// console.log(garcia.friends[0].name);
// console.log(garcia.friends[2].hobby);
// console.log(garcia.instruments[4]);
//
// console.log(garcia.alive);
// garcia.alive = true;
// console.log(garcia.alive);
//
// console.log(garcia['quote']);
// garcia['quote'] = 'Everybody just be nice to each other.'
// console.log(garcia['quote']);
//
// garcia.speak = () => console.log('Hey, that\'s a good song!');
// garcia.speak();
//
// garcia.letsPlay = () => console.log('La De Dah!');
// garcia.letsPlay();

// const person = {
//   name: 'Cathleen',
//   getName() {
//     return  this. name;
//   }
// };
//
// console.log(person.getName());

// const game = {
//   time: 10,
//   start() {
//
//       const gameTimer = setInterval(() => {
//         if (this.time > 0) {
//         this.time --
//         console.log(this.time);
//       } else if (this.time === 0) { console.log('gameover');
//         clearInterval(gameTimer)
//       }
//     }, 1000)
//
//   }
// }
//
// game.start();

const player = {
  score: 10,
  name: prompt('What is your name?'),
  lives: 3,
  addScore() {
    this.score++
    return this.score;
  },
  changeLives(liveOrDie){
    if (liveOrDie) {
      this.lives++
    } else {
      this.lives--
    }
  }
}

player.changeLives(false);
console.log(player.lives);
