class Pet {
  constructor(name, owner){
    this.name = name;
    this.owner = owner;
  }
  setOwner(owner){
    this.owner = owner;
  }
}

class Dog extends Pet {
  constructor(name, owner, price){
    super(name, owner);
    this.price = price;
  }
  bark(){
    console.log("bark");
  }
  chaseTail(){
    console.log("oh boy oh boy oh boy");
  }
  getPrice(){
    return "$" + this.price
  }
}

const sparky = new Dog('Sparky', 'Victor', 150);
console.log(sparky);
console.log(sparky.getPrice());

class Cat extends Pet {
  constructor(name, owner, price){
    super(name, owner);
    this.price = price
  }
  purr(){
    console.log("purrrrr");
  }
  clean(){
    console.log("cleaning");
  }
  getPrice(){
    return "$" + this.price
  }
}

const sprinkles = new Cat ('Sprinkles', 'Weird Girl', 75)
console.log(sprinkles);
console.log(sprinkles.getPrice());
