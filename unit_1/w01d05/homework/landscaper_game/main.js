// Landscaper Game
//
// Start w/teeth, can earn $1/day
let money;
let tool;

const start = () => {
  money = 0
  tool = " and your teeth."
  askForAction();
}

const showStatus = () => {
  alert("You have $ " + money + tool)
}

const askForAction = () => {
  showStatus();
  const choice = prompt("What would you like to do?", "use tool / buy tool / restart");
  if (choice === 'use tool'){
    useTool();}
    else if (choice === 'buy tool'){
    buyTool();}
    else if (choice === 'restart') {
    start();}
    }
    }

const endGame = () => {
  showStatus();
  prompt("Congratulations! Your landscaper business is a big success!")
}
const useTool = () => {
  if (choice === 'use tool') {
    if (money < 5)
    tool = teeth;
    money++;
  }
  askForAction();
}

const buyTool = () => {
  if (choice === 'buy tool') {
  if (money < 5) {
    prompt("You can only use your teeth.")}

}
  askForAction();
}



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


start();
askForAction();
