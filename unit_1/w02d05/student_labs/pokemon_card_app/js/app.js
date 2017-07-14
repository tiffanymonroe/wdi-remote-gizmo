// console.log('pokemon');

const cards = [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}];

const theGame = {
  library: [],
  playedCards: [],
  computerCards: [],
  playerCards: [],
  cardsLeft: 0,
  points() {
    //if player card > computer card
    //player points ++
    //else if computer card > player card
    //computer points ++
    //else no change
  },
  rounds: 0,
  roundsWonPlayer: 0,
  roundsWonComputer: 0,
  trackRounds() {
    //have 3 cards been played by computer and player?
  },
  deal() {
    //if new round
    //deal 3 cards to player
    //deal 3 cards to computer
      this.playerCards.push(randomCard)
      cards.shift(randomCard)
      this.computerCards.push(randomCard)

    console.log(this.playerCards);
    console.log(this.computerCards);
    //remove from deck
  },
  checkWinnerofPlay() {
    //if player card > computer card
    //player winner
    //else if computer card > player card
    //computer winner
    //else no change
  },
  enoughCards() {
    //if cardsLeft < 6, game over
  }
};

const thePlayer = {
  points: 0,
  roundsWon: 0,
  cardsInHand: [],
  selectedCard: {},
  playedCards: []
};

// console.log(cards.length); //18

//generates random number between 0 and 18
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const randomIndex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(randomIndex(0, cards.length));
let randomNum = randomIndex(0, cards.length);
let randomCard = cards[randomNum];

theGame.deal();

//instead randomize the array and then pop/shift off elements
