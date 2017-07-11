// class Car {
//   constructor(seriallNumber){
//     this.seriallNumber = seriallNumber
//   }
//   drive(){
//     console.log("Vroom");
//   }
// }
//
// const factory = {
//   cars: 0,
//   generateCar(){
//     const newCar = new Car(this.cars);
//     this.cars++;
//     return newCar;
//   },
//   findCar(index){
//     return this.cars[index];
//   }
// }
//
// const firstCar = factory.generateCar();
// const secondCar = factory.generateCar();
//
// console.log(firstCar);
// console.log(secondCar);

//==========================
class Factory {
  constructor (name){
    this.name = name;
    this.computers = [];
  }
}

class Computer {
  constructor (serialNumber){
    this.serialNumber = serialNumber;
  }
    generateComputer(){
      const newComputer = new Computer(this.name, this.computers.length);
      this.computers.push(newComputer)
      return newComputer;
  }
  findComputer(index){
    return this.computers[index];
  }
}


const mac = new Factory('MacBook Pro');
mac.generateComputer();
console.log(mac.findComputer(0));
