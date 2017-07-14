// console.log('window is loaded');
//
// const garcia = {
//     albums: ['shady grove', 'run for the roses', 'hooteroll', 'Garcia', 'Reflections'],
//     instruments: ['Vocals', 'pedal steel', 'electric guitar', 'acoustic guitar', 'banjo'],
//     alive: false,
//     quote: 'Im shopping around for something to do that no one will like',
//     friends: [{
//       name: 'Bobby weir',
//       hobby: 'guitar'
//     },
//     {
//       name: 'Bob Dylan',
//       hobby: 'writing songs'
//     },
//     {
//       name: 'Allen Ginsberg',
//       hobby: 'writing poems'
//     },
//     {
//       name: 'Phil Lesh',
//       hobby: 'Playing dope bass lines'
//     }],
//     speak() {
//       console.log('la daa da da')
//     }
// }
//
// // Print the following:
// //
// // 'hooteroll'
// console.log(garcia.albums[2], ' hooteroll');
//
// // 'Bobby weir'
// console.log(garcia.friends[0].name, 'bobby wier');
//
// // 'writing poems'
//
// console.log(garcia.friends[2].hobby, 'writing poems')
//
// //banjo
// console.log(garcia.instruments[4], 'banjo');
//
// //alive
// garcia.alive = true;
// console.log(garcia.alive);
//
// // quote property using bracket notations
//
//
// // square bracket for objects
// garcia['quote'] = 'Everybody just be nice to each other';
//
//
// console.log(garcia.quote, 'this is quote');
//
//
// // speak
// garcia.speak = () => {
//   console.log('hey thats a good song!');
// }
//
//
// garcia.speak();

// 'banjo'



const food = {
  value: 12,
  getValue(){
    console.log(this, 'this is this');
    return this.value;
  }
}


// console.log(food.getValue());


//console.log this inside the getValue function.


// Create an object called person that has a property called name and a method called getName that when called returns the value of the name property.

const person = {
  name: 'Jim',
  getName(){
    return this.name
  }
}

//
// console.log(person.getName());




// const game = {
//   time: 10,
//   start(){
//
//     const gameTimer = setInterval(() => {
//       // whats going to happen every second
//       console.log(this.time)
//       this.time--
//
//       if(this.time === 0){
//         console.log('gameover')
//
//         // stop running set Interval which is contained in gameTimer
//         clearInterval(gameTimer);
//       }
//
//     }, 1000);
//
//   }
// }
//
//
//
// game.start();

// const player = {
//   score: 10,
//   lives: 3,
//   name: prompt('What is your name?'),
//   addScore(){
//     this.score++
//     return this.score;
//   },
//   changeLives(liveOrDie){
//     // say liveOrDie is a boolean value
//     if(liveOrDie){
//       this.lives++
//     } else {
//       this.lives--
//     }
//
//   }
// }
//
// player.addScore();
// console.log(player, 'score should then be 11')
//
// player.changeLives(false)
// console.log(player.lives, ' should see 2')
//
// // dot notation
// player.score;



// amazon objects

const amazonObject = {
  color: 'steel Blue',
  shirtColors: ['blue', 'red', 'white'],
  changeShirtColor(inputOfWhatWeAreHoveringOver, imageValueOfWhatWereHOveringOver){
    this.color = inputOfWhatWeAreHoveringOver;
    this.ImageViewed = imageValueOfWhatWereHOveringOver;
  },
  size: ['s', 'md'. 'lg', 'xl'],
  selectedSize: 'md',
  changeSize(inputOfASize){
    this.selectedSize = inputOfASize;
  },
  viewShirtPort: ['img/front.png', 'img/back.png', 'img/slide.png'],
  ImageViewed: 'img/front.png',
  changeImageView(someImageThatWeAreHoveringOver){
    this.ImageViewed = someImageThatWeAreHoveringOver;
  }
}

const userShopper = {
  shippingAddress: 'dreary lane',
  username: 'Muffin Man'
}









































































// Carol went down to the garden, and SHE picked fresh strawberries
