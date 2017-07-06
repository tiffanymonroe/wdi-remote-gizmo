![ga](http://mobbook.generalassemb.ly/ga_cog.png)

<hr>
Title: Pokeman Game<br>
Type: Lab<br>
Duration: 3 hr<br>
Creator: WDI-Archer, WDI-Funke <br>
Modified by: Jim Haff<br>
Topics: Using objects, the keyword `this` and methods to create a game while focusing on OOP.<br>
<hr>

![pokemon cards](https://i.ytimg.com/vi/5pDthGSHo58/maxresdefault.jpg)

<hr>

You are going to create a simple card game in which a player will be able to battle the autoplayer. The game will keep an array of cards and will deal 3 as the autoplayer to "fight" against the three that you play. Each of your cards will have some values associated with it. You will have to compare the value of your card to the computer's card to see which one wins.

Inside your `student_labs` folder for today, create a folder called `pokemona_card_app`. You will need to create the following:
1. an `index.html` file to hold your HTML code.
2. a `pokemon.js` file to hold your JavaScript code inside a `javascript` folder.
3. a `style.css` file to hold your CSS code inside a `styles` folder.
4. Attach these files. Remember to connect the CSS file inside the "head" portion of your HTML and connect the JavaScript file right *before* the closing "body" tag of your HTML file.
5. Before tackling the lab, use a console.log in your js file and change the "body" of your application in your CSS file to **confirm** that they have been connected properly.


## Object Oriented Programming

For this lab, we're going to continue using objects, giving them data and behaviors (methods). They will interact with one another to make our game work!

## The Cards
Use the following data for your cards:
```
[{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}]
```

# Step-by-Step


## The Game object

NOTE: Think about the best datatype (number, string, array, object) for each part and whether you need to create a method.

The game should be able to:

1. keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
2. know what cards have been played
3. know how many cards are left to be played overall
4. track points for both the player and the computer
  Note: Points are determine by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
5. track rounds
6. track number of rounds won for both player and computer
7. automatically deal 3 cards from the library to the player and 3 cards to the computer each round
8. determine the winner of each play
9. stop once there are no cards left or not enough to deal 3 to each the player and computer


## The Player object

### The player should be able to:

1. see their stats: their points and how many rounds they've won.
2. see what cards they have been dealt by the game that round.
3. pick a card from the hand that has been dealt to them. Play this card agaist the computer's card. Do this again (3 times total) until the round end.
4. recieive new cards given to them by the game each round.
5. see the cards that they have played in the past.


## The View

You can do the following in your terminal at first. If there's time, figure out how to display this in your browser (think back to Fundamentals and the Memory Game).

Your game should show:

- the scoreboard each round
- the cards in the player's hand
- the cards in the computer's hand
- the cards that are in play
- display who wins each round (or if there is a tie)
- display when the game is over and the final score.


# Example Play

- There are 10 Pokemon cards in the deck
- Eggbert (the player) is dealt three random cards from the deck
- The computer is dealt three random cards from the deck
- Eggbert chooses a card and plays it! It has a damage of 10
- The computer randomly chooses a card and plays it! It has a damage of 8
- Eggbert wins!

The score is displayed: 
- Score: Eggbert: 1, Computer: 0
- Rounds Won: Eggbert: 0, Computer: 0

They do this again two more times. 
The round ends.

The score is displayed.
The rounds won are displayed.











