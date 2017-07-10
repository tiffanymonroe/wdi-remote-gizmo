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
