class Car {
    constructor(serialNumber, make, model){
        this.serialNumber = serialNumber;
        this.make = make;
        this.model = model;
    }
    drive(){
        console.log('vrooom');
    }
}

const factory = {
    numCars: 0,
    generateCar(){
        const newCar = new Car(this.numCars, 'honda', 'crv');
        this.numCars++;
        return newCar;
    }
}

// const firstCar = factory.generateCar();
// const secondCar = factory.generateCar();

const firstCar = factory.generateCar();
const secondCar = factory.generateCar();

console.log(firstCar);
console.log(secondCar);
