class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('hi');
    }
}

class Pet {
    constructor(name, owner){
        this.name = name;
        this.owner = owner
    }
}

class Boat {
    constructor(hasSails, hasMotor){
        this.hasSails = hasSails;
        this.hasMotor = hasMotor;
    }
    move(){
        console.log('moving');
    }
}

class Artist extends Person {
    constructor(name, age, expertise){
        super(name, age);
        this.expertise = expertise;
    }
    sellPiece(){
        console.log('finally, some money');
    }
}

class Robot {
    constructor(maker, serialNumber){
        this.maker = maker;
        this.serialNumber = serialNumber;
    }
}

class Computer extends Robot {
    constructor(maker, serialNumber, screenSize){
        super(maker, serialNumber);
        this.screenSize = screenSize;
    }
}

class Dog extends Pet {
    constructor(name, owner, hasFleas){
        super(name, owner);
        this.hasFleas = hasFleas;
    }
    bark();
}

class Painter extends Artist {
    constructor(name, age){
        super(name, age, 'painting');
    }
    buyBrushes(){
        console.log('buying brushes');
    }
}

class Car {
    constructor(numWheels){
        this.wheels = numWheels;
    }
    drive(){
        console.log('vrooom');
    }
}

class Laptop extends Computer {
    constructor(maker, serialNumber){
        super(maker, serialNumber, '13 inches');
        this.batteryLife = 100;
    }
    getBatteryLife(){
        return this.batteryLife;
    }
    drainBatterLife(){
        this.batteryLife -= 5;
    }
}

class Humvee extends Car {
    constructor(numWheels, numAmericanFlags){
        super(numWheels);
        this.numAmericanFlags = numAmericanFlags;
    }
    drive(){
        console.log('Welcome to the Jungle!!!');
    }
}

class SmartPhone extends Laptop {
    constructor(maker, serialNumber, carrier){
        super(maker, serialNumber);
        this.carrier = carrier;
    }
    call(){
        console.log('no bars');
    }
}

class Baby extends Person {
    constructor(name){
        super(name, 0);
    }
    cry(){
        console.log('waaa');
    }
}

class FireTruck extends Car {
    constructor(){
        super(8);
    }
    sprayWater(){
        console.log('take this, fire!');
    }
}

class Bird extends Pet {
    constructor(name, owner, species){
        super(name, owner);
        this.species = species;
    }
    sing(){
        console.log('tweeet tweeet');
    }
}

const robotFactory {
    createdRobots: [],
    generateRobot(){
        const newRobot = new Robot('Acme Robots, Inc', this.createdRobots.length)
        this.createdRobots.push(newRobot);
        return newRobot;
    }
}

class ComputerFactory {
    constructor(name){
        this.name = name
        this.computersCreated = [];
    }
    generateComputer(screenSize){
        const newComputer = new Computer(this.name, this.computersCreated.length, screenSize);
        this.computersCreated.push(newComputer);
        return newComputer;
    }
}
