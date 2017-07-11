class Pet {
  constructor(name, owner){
    this.name = name;
    this.owner = owner;
  }
  setOwner(owner){
    this.owner = owner;
  }
}

//======================================================

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

// const sparky = new Dog('Sparky', 'Victor', 150);
// console.log(sparky);
// console.log(sparky.getPrice());


//======================================================

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

// const sprinkles = new Cat ('Sprinkles', 'Weird Girl', 75)
// console.log(sprinkles);
// console.log(sprinkles.getPrice());

//======================================================

class Person {
  constructor(name, age, weight, mood, pets, bankAccount){
    this.name = name;
    this.age = 0;
    this.weight = 0;
    this.mood = 0;
    this.pets = [];
    this.bankAccount = 0;
  }
  getName(){
    return this.name
  }
  getAge(){
    return this.age
  }
  getWeight(){
    return this.weight
  }
  greet(other_person){
    console.log("Hello, " + other_person);
  }
  eat(){
    this.weight++;
    this.mood++;
  }
  exercise(){
    this.weight--;
  }
  age(){
    this.age++;
    this.weight++;
    this.mood--;
    this.bankAccount+=10;
  }
  buyPet(pet){
    this.pets.push(pet);
    this.mood+=10;
    // this.bankAccount - Pet.getPrice();
  }
}

// const jill = new Person ("Jill");
// jill.age = 42;
// jill.weight = 140;
// jill.mood = 10;
// jill.pets = "Marshmallow";
// jill.bankAccount = 5000;
// console.log(jill);

//======================================================

// Rose Nylund loved animals, since she was a child on the family farm. She met Blanche Devereaux while trying to find a new home for herself and a stray cat named Mr. Whiskers. One year, Rose's friends, Blanche, Dorothy, and Sophia, give her a dog named Jake for her birthday.

//

const rose = new Person ("Rose");
const blanche = new Person ("Blanche");
const dorothy = new Person ("Dorothy");
const sophia = new Person ("Sophia");
const whiskers = new Cat ("Mr. Whiskers");
const jake = new Dog ("Jake");

rose.age = 60;

rose.pets = [jake, whiskers];
rose.mood = 100;
rose.weight = 120;
rose.bankAccount = 25000;
console.log(rose);

console.log(rose.name
   + " loved animals, since she was a child on the family farm. She met "
   + blanche.name
   + " while trying to find a new home for herself and a stray cat named, "
   + whiskers.name
   + ". "
   + rose.name
   + "'s friends, "
   + blanche.name
   + ", "
   + dorothy.name
   + ", and "
   + sophia.name
   + " give her a dog named "
   + jake.name
   + " for her birthday."
 );
