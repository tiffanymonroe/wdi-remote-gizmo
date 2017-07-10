class Person {
  constructor(name, age, eyes, hair){
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
  }
}

class Pet {
  constructor(name, age, animal, breed, color) {
    this.name = name;
    this.age = age;
    this.animal = animal;
    this.color = color;
  }
}

class Boat {
  constructor(size, color, type){
    this.size = size;
    this.color = color;
    this.type = type;
  }
}

class Artist extends Person {
  constructor(name, location, medium){
    this.name = name;
    this.location = location;
    this.medium = medium;
  }
}


class Robot {
  constructor(name, skill, discription){
    this.name = name;
    this.skill = skill,
    this.discription = discription;
  }
}

class Computer {
  constructor(model, brand, memory, storage){
    this.model = model;
    this.brand = brand;
    this.memory = memory;
    this.storage = storage;
  }
}

class Dog extends Pet {
  constructor(name, breed, color, sex){
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
}

class Painter extends Artist {
  constructor(name, location, medium, genre){
    this.genre;
  }
}

class Car {
  constructor(year, make, model){
    this.year = year;
    this.make = make;
    this.model = model;
  }
}

class Laptop extends Computer {
  constructor(brand, model, memory, storage, size) {
    this.size = size;
  }
}

class Humvee extends Car {
  constructor(year, make, model){
    this.year = year;
    this.make = make;
    this.model = model;
  }
}

class SmartPhone extends Computer {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

class Baby extends Person {
  constructor(birthdate, gender, weight, length){
    this.birthdate = birthdate;
    this.gender = gender;
    this.weight = weight;
    this.length = length;
  }
}

class FireTruck {
  constructor(year, department, color){
    this.year = year;
    this.department = department;
    this.color = color;
  }
}

class Bird extends Pet {
  constructor(species, class){
    this.species = species;
    this.class = class;
  }
}

//============================
// const factory = {
//   robots: [],
//   generateRobots(){
//     const newRobot = new Robot(this.robots.length);
//     this.robots.push(newRobot);
//     return newRobot;
//   },
//   serialNumber(index){
//     return this.cars[index];
//   }
// }
//
// factory.generateRobots()
// console.log(factory)
// console.log(factory.serialNumber(1));

//====================

//create factory class with name attribute
class Factory {
  constructor (name){
    this.name = name;
    this.computers = [];
  }
  //generate computer to above array
    generateComputer(){
        const newComputer = new Computer(this.name, this.computers.length);
        this.computers.push(newComputer);
        return newComputer;
    }
}

//create computer class with serial number based on what index is in the factory's computers array.
class Computer {
  constructor (name, serialNumber){
    this.name = name;
    this.serialNumber = serialNumber;
  }
}

const mac = new Factory('MacBook Pro');

const newMac = mac.generateComputer();
const newMac2 = mac.generateComputer();
const newMac3 = mac.generateComputer();
console.log(newMac);
console.log(newMac2);
console.log(newMac3);
