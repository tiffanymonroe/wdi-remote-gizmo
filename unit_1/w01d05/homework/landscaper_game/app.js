console.log('Landscaper Game app.js is attached to index.html');

let tool = '';
let money = 0;

const start = function() {
  tool = "your teeth";
  money = 1;
  alert("Welcome to the game!  You are starting a landscaping business.  Use your tools to earn more money!")
  askForAction();
};

const showStatus = function() {
  alert("You have $" + money + ".  Your tool is " + tool + ".")
};

const askForAction = function() {
  showStatus();
  const choice = prompt("What do you want to do?", "landscape/buy tools");
    if (choice === "landscape") {
      landscape();
    } else if (choice === "buy tools") {
      checkTool();
    } else if (chioce === "exit") {
    } else {
      alert("Please try that action again!")
      askForAction();
    }
};


const landscape = function() {
  if (tool === "your teeth") {
    alert("Using " + tool + " will earn you $1 each day!")
    money += 1;
    askForAction();
  } else if (tool === "a pair of rusty scissors") {
    money += 5;
    askForAction();
  } else if (tool === "an old-timey push lawnmower") {
    money += 50;
    askForAction();
  } else if (tool === "a fancy battery-powered lawnmower") {
    money += 100;
    askForAction();
  } else if (tool === "a team of starving students") {
    money += 250;
      if (money <1000 ) {
        askForAction();
      } else {
        alert("Congratulations!  You have made $" + money + " with the help of your tools!  You have won the game!")
      }
  }
};


const checkTool = function () {
  if (money < 5) {
    alert("Sorry, you don't have enough money to buy a new tool yet.  Keep landscaping!");
    askForAction();
  } else {
    buyTool();
  }
};

const buyTool = function() {
  if ((money >= 5) && (tool === "your teeth")) {
    alert("You can afford to buy a new tool!")
    buyScissors();
  } else if ((money >= 25) && (tool === "a pair of rusty scissors")) {
    alert("You can afford to buy a new tool!")
    buyOldTimey();
  } else if ((money >= 250) && (tool === "an old-timey push lawnmower")) {
    alert("You can afford to buy a new tool!")
    buyFancyBattery();
  } else if ((money >= 500) && (tool === "a fancy battery-powered lawnmower")) {
    alert("You can afford to buy a new tool!")
    buyTeamOfStudents();
  } else {
    alert("Sorry, you don't have enough money to buy a new tool yet.  Keep landscaping!");
    askForAction();
  }
};

const buyScissors = function() {
  alert("You can buy a pair of rusty scissors for $5.")
  money -= 5;
  tool = "a pair of rusty scissors";
  alert("You have purchased " + tool + "!  Using this tool will earn you $5 each day!")
  askForAction();
};

const buyOldTimey = function() {
  alert("You can buy an old-timey push lawnmower for $25.")
  money -= 25;
  tool = "an old-timey push lawnmower";
  alert("You have purchased " + tool + "!  Using this tool will earn you $50 each day!")
  askForAction();
};

const buyFancyBattery = function() {
  alert("You can buy a fancy battery-powered lawnmower for $250.")
  money -= 250;
  tool = "a fancy battery-powered lawnmower";
  alert("You have purchased " + tool + "!  Using this tool will earn you $100 each day!")
  askForAction();
};

const buyTeamOfStudents = function() {
  alert("You can hire a team of starving students for $500.")
  money -= 500;
  tool = "a team of starving students";
  alert("You have purchased " + tool + "!  Using this tool will earn you $250 each day!")
  askForAction();
};

start();
