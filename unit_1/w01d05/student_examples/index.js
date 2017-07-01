// const func1 = ()=>{
//     console.log('hello');
// }
// const func2 = ()=>{
//     console.log('oh hai');
//     func1();
// }
// func2();
//
// /////
//
// const func1 = ()=>{
//     console.log(1);
//     func2(); //why can I call this now, even though the definition is below?
//     func3();
//     console.log('Finished!');
// }
// const func2 = ()=>{
//     console.log(2);
//     func4();
//     func6();
// }
// const func3 = ()=>{
//     console.log(3);
//     func5();
// }
// const func4 = ()=>{
//     console.log(4);
// }
// const func5 = ()=>{
//     console.log(5);
// }
// const func6 = ()=>{
//     console.log(6);
// }
// func1(); //nothing gets called until this.

let apples;
let money;


const start = () => {
  apples = 0;
  money = 20;
  askForAction();
}

const showStatus = () => {
  alert("You have " + apples + " apples and $" + money)
}

const askForAction = () => {
  showStatus();
  const choice = prompt("What do you want to do?", "buy / eat apple / restart");
  if (choice === 'buy'){
    buyApple();
  } else if (choice === 'eat apple') {
    eatApple();
  } else if (choice === 'restart') {
      start();
    }

  console.log(choice);
}

const buyApple = () => {
  if (money <= 0){
    prompt("You're out of money!")
  }
  apples++;
  money--;
  askForAction();
}

const eatApple = () => {
  if (apples <= 0) {
    prompt("You're out of apples!")
  }
  apples--;
  askForAction();
}

start();
askForAction();
