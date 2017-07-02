// Landscaper Game
//
// Start w/teeth, can earn $1/day
let money;
let tool;

const start = () => {
  money = 0
  currentTool = i[0];
  console.log(currentTool);
  askForAction();
}

const showStatus = () => {
  alert("You have $" + money + " " + tool + ".")
}

const buyTool = () => {
  if (money < 5) {
    prompt("You can only use your teeth. Keep chompin!")
    }
    else if (money >= 5) {
    prompt("You can buy rusty scissors for $5 and earn $5 a day, or you can continue to use your teeth.")
    money -=5;
    tool = "rusty scissors"}
    askForAction();
    }

const useTool = () => {
    if (tool === "your teeth")
    {money++;}
    else if (tool === "scissors") {money +=5}
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

start();
askForAction();

const endGame = () =>
  {prompt("Congratulations! Your landscaper business is a big success!")}




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
