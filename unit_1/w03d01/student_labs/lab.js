// class Person {}
//   class Artist extends Person {}
//     class Painter extends Artist {}
//   class Baby extends Person {}
//
// class Pet {}
//   class Dog extends Pet {}
//   class Bird extends Pet {}
//
// class Car {}
//   class Boat extends Car {}
//   class Humvee extends Car {}
//   class FireTruck extends Car {}
//
//
// class Computer {}
//   class Laptop extends Computer {}
//   class SmartPhone extends Computer {}
//   class Robot extends Computer {}


//Harder
class Robot {
  constructor(serial) {
    this.serial = serial;
  }
};

robotArr = [];
const robotGen = () => {
    const newRobot = new Robot(robotArr.length);
    robotArr.push(newRobot);
    return newRobot;
};

console.log(robotGen())
console.log(robotGen())
console.log(robotGen())
console.log(robotGen())
console.log(robotGen())
