class Car {
  constructor(seriallNumber){
    this.seriallNumber = seriallNumber
  }
  drive(){
    console.log("Vroom");
  }
}

const factory = {
  cars: 0,
  generateCar(){
    const newCar = new Car(this.cars);
    this.cars++;
    return newCar;
  },
  findCar(index){
    return this.cars[index];
  }
}

const firstCar = factory.generateCar();
const secondCar = factory.generateCar();

console.log(factory);
