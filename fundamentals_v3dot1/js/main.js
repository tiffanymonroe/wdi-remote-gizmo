//Tests that main.js is connected to index.html
console.log("Up and running!");

//cards array, containing four card objects
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

//cardsInPlay array, empty awaiting cards to be played
var cardsInPlay = [];

//checkForMatch function, if the 1st and 2nd cards played are the same (from the cards array), confirm match.  If not, alert otherwise.  Successful match increases score.
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    playerScore +=1;
    currentScore.innerHTML = playerScore;
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  };
};

//flipCard function, turns car over to show 'face' by changing the image src upon click.  this = card that has been clicked (event listener in createBoard function).
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  console.log('User flipped ' + cards[cardId].rank + ' of ' + cards[cardId].suit + ', image: ' + cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
      checkForMatch();
      cardsInPlay = []; //clears cards in play after match check
    };
};

//createBoard function, builds the four cards 'face-down' upon refresh of page by looping through the cards array to build, and then appending to the DOM.
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    var gameBoard = document.getElementById('game-board');
    gameBoard.appendChild(cardElement);
  };
};

//createBoard function is called at page load.
createBoard();


//BONUS:
//Think about how you could take this game even further. It might be useful to add a "Reset" button to the HTML and set up an event in the JavaScript file so that the user can reset the game after playing.

//resetTheGame empties out the cards in play and turns all images back to the 'back'.  Reset clears the score.
var resetTheGame = function() {
  cardsInPlay = [];
  playerScore = 0;
  currentScore.innerHTML = playerScore;
  allCards = document.getElementsByTagName('img');
    //console.log(allCards);
    //allCards is an array of 4 images
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].setAttribute('src', 'images/back.png');
  }
};

//Event listener for reset button
var resetButton = document.getElementById('button');
resetButton.addEventListener('click', resetTheGame);

//For an extra challenge, consider how you could keep track of and display the user's score.

//Score global variables
var playerScore = 0;
var currentScore = document.getElementById('score');

//To keep the score running upon reset, create a start-over button identical to resetTheGame() but which does not include:
  // playerScore = 0;
  // currentScore.innerHTML = playerScore;
