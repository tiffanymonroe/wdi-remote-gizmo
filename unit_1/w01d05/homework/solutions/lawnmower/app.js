let tool;
let money;

const cutGrass = () => {
    if(tool === "teeth"){
        money += 1;
    } else if(tool === 'scissors'){
        money += 5;
    } else if(tool === 'push lawnmower'){
        money += 50;
    } else if(tool === 'battery lawnmower'){
        money += 100;
    } else if(tool === 'team'){
        money += 250;
    }
    getChoice();
}

const nextToolString = () => {
    if(tool === 'teeth' && money >= 5){
        return "/upgrade";
    } else if(tool === 'scissors' && money >= 25){
        return "/upgrade";
    } else if(tool === 'push lawnmower' && money >= 250){
        return "/upgrade";
    } else if(tool === 'battery lawnmower' && money >= 500){
        return "/upgrade";
    } else if(tool === 'team' && money >= 1000){
        alert('you win!');
        return "/restart";
    } else {
        return "";
    }
}

const getStatus = () => {
    alert("You have $" + money + ".  You are currently using " + tool);
}

const upgrade = () => {
    if(tool === 'teeth'){
        tool = 'scissors';
        money -= 5;
    } else if(tool === 'scissors'){
        tool = 'push lawnmower';
        money -= 25;
    } else if(tool === 'push lawnmower'){
        tool = 'battery lawnmower';
        money -= 250;
    } else if(tool === 'battery lawnmower'){
        tool = 'team';
        money -= 500;
    }
    getChoice();
}

const getChoice = () => {
    getStatus();
    var answer = prompt("What do you want to do?", "cut grass" + nextToolString());
    if(answer === "cut grass"){
        cutGrass();
    } else if (answer === "upgrade"){
        upgrade();
    } else if (answer === "restart"){
        start();
    }
}

const start = () => {
    tool = 'teeth';
    money = 0;
    getChoice();
}

start();
