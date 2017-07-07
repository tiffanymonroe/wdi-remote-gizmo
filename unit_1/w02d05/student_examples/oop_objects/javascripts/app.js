// // console.log("I need more coffee!");
//
// const garcia = {
//    albums: ['shady grove', 'run for the roses', 'hooteroll', 'Garcia', 'Reflections'],
//    instruments: ['Vocals', 'pedal steel', 'electric guitar', 'acoustic guitar', 'banjo'],
//    alive: false,
//    quote: 'Im shopping around for something to do that no one will like',
//    friends: [{
//      name: 'Bobby weir',
//      hobby: 'guitar'
//    },
//    {
//      name: 'Bob Dylan',
//      hobby: 'writing songs'
//    },
//    {
//      name: 'Allen Ginsberg',
//      hobby: 'writing poems'
//    },
//    {
//      name: 'Phil Lesh',
//      hobby: 'Playing dope bass lines'
//    }]
// }
//
// console.log(garcia.albums[2]);
// console.log(garcia.friends[0].name);
// console.log(garcia.friends[2].hobby);
// console.log(garcia.instruments[4]);
//
// garcia.alive = true;
// console.log(garcia.alive);
//
// garcia["quote"] = "Everybody just be nice to each other"
// console.log(garcia.quote);
//
// garcia.speak = ()=>{
//   console.log("Heyy, that's a good song!");
// };
//
// garcia.speak();
//
// garcia.letsPlay = ()=> {
//   console.log("La daa da da, La daa, da, da");
// }
//
// garcia.letsPlay();

// const person = {
//   name: "Tiffany",
//   getName(){
//     return this.name;
//   }
// };
// console.log(person.getName());
//
// const taco = ()=> {
//   console.log(this, " this is with arrow functions");
// }
//
// console.log(taco);

//======================================================

// const game = {
//   //property named "time"
//   time: 10,
//   start() {
//     //declaring a variable that holds setInterval
//     const gameTimer = setInterval (()=> {
//       //function that happens every second
//       //game time decreases value
//       this.time--
//       console.log('hi');
//       //when game time equals 0, logs game over and stops.
//       if (this.time === 0) {
//         console.log('gameover!');
//         clearInterval(gameTimer);
//       }
//       //1000 milliseconds = 1 second
//     }, 1000 );
//   }
// }
//
// //callback
// game.start();

//======================================================


// const player = {
//   score: 10,
//   name: prompt("Enter your name."),
//   lives: 3,
//   addScore() {
//     this.score++
//     console.log(player.score + " is " + player.name + "'s score.");
//   },
//   health(actionofPlayer) {
//     //say actionofPlayer is a boolean value
//     if (actionofPlayer){
//     this.lives++
//   } else {
//     this.lives--
//   }
//     console.log(player.lives + " lives left.");
//   }
//   }
//
//   player.addScore();
//   player.health(true);
//
//   //dot notation
//
//   player.score;
//
//   //bracket notation
//
//   player["score"];


//======================================================
