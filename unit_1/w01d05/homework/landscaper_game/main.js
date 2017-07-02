// Landscaper Game
//
// Start w/teeth, can earn $1/day
let money;
let tool;

const start = () => {
  money = 0;
  tool = "your teeth";
  askForAction();
}

const showStatus = () => {
  alert("You have $" + money + " and " + tool + ".")
  }

const buyTool = () => {
  if (money < 5) {
    prompt("You can only use your teeth. Keep chompin!")
    }
  else if (money >= 5) {
    prompt("You can buy rusty scissors for $5, or you can continue to use your teeth.")
    money -=5;
    tool = "rusty scissors";
    }
  else if (money >= 25) {
    prompt("You can buy an old-timey push lawnmower for $25 and earn $50 a day, or you can continue to use your scissors.")
    money -=25;
    tool = "old-timey push lawnmower";
    }
  else if (money >= 250) {
    prompt("You can buy a battery-powered lawnmower and earn $100 a day, or you can continue to use your old-timey lawnmower.")
    money -=250;
    tool = "battery-powered lawnmower"
    }
  else if (money >= 500) {
    prompt("You can hire a team of starving students for $500 and earn $250 a day, or you can continue to use your battery-powered lawnmower.")
    money -=500;
    tool = "team of starving students";
    }
    askForAction();
    }

const useTool = () => {
  if (tool === "your teeth") {
    prompt("You earn $1 a day.")
    money +=1;
    }
    else if (tool === "rusty scissors") {
      prompt("You earn $5 a day.")
      money +=5;
      }
      else if (tool === "old-timey push lawnmower") {
        prompt("You earn $50 a day.")
        money +=50;
      }
      else if (tool === "battery-powered lawnmower") {
        prompt("Wow! You earn $100 a day.")
        money +=100;
      }
      askForAction();
    }

const askForAction = () => {
  showStatus();
  const choice = prompt("What would you like to do?", "use tool / buy tool / restart");
  if (choice === 'use tool') {
    useTool();}
    else if (choice === 'buy tool') {
    buyTool();}
    else if (choice === 'restart')
    start();
    }


const endGame = () =>
  {prompt("Congratulations! Your landscaper business is a big success!")}

start();
askForAction();


// *if* using teeth, you can buy rusty scissors for $5.
// *if* you have scissors, you can earn $5/day.
//
// *if* you have rusty scissors, then you can buy lawnmower for $25.
// *if* you have lawnmower, you earn $50/day.
//
// *if* you have lawnmower you can buy  battery-powered lawnmower for $250.
//
// *if* you can earn $100/day.
//
// *if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500
// *if* you have students, you can earn $250/day.
//
// *when* user reaches $1000 message user.
