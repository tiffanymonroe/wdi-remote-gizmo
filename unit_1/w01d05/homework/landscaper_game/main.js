let money;
let tool = ["your teeth", "rusty scissors", "old-timey push lawnmower", "battery-powered lawnmower", "team of starving students"];
for (let i=0; i < tool.length; i++) {
  console.log(tool);
}

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
    tool = i[0];
    prompt("You can only use your teeth. Keep chompin!")
    }
  else if (money >= 5) {
    prompt("You can buy rusty scissors for $5, or you can continue to use your teeth.")
    money -=5;
    tool = i[1];
    }
  else if (money >= 25) {
    prompt("You can buy an old-timey push lawnmower for $25 and earn $50 a day, or you can continue to use your scissors.")
    money -=25;
    tool = i[2];
    }
  else if (money >= 250) {
    prompt("You can buy a battery-powered lawnmower and earn $100 a day, or you can continue to use your old-timey lawnmower.")
    money -=250;
    tool = i[3];
    }
  else if (money >= 500) {
    prompt("You can hire a team of starving students for $500 and earn $250 a day, or you can continue to use your battery-powered lawnmower.")
    money -=500;
    tool = i[4];
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
      else if (tool === "team of starving students") {
        prompt("Holy smokes! You earn $250 a day! To win, you only need $1000. Get those students to work.")
        money +=250;
      }
      askForAction();
    }

const askForAction = () => {
  showStatus();
  const choice = prompt("What would you like to do?", "use tool / buy tool / restart");
  if (choice === 'use tool') {
    useTool();
    }
    else if (choice === 'buy tool') {
    buyTool();
    }
    else if (choice === 'restart')
    start();
    }


const endGame = () => {
  if (money === 1000) {
  prompt("Congratulations! Your landscaper business is a big success!");
    }
    }
