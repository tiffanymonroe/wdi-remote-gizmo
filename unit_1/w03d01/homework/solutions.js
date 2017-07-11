// ---
// Title: Classes - SOLUTIONS<br>
// Type: Homework<br>
// ---

// ## Making Classes
//
// 1. Create a class for a `Pet`
//     - **attributes**
//         - `name` (the constructor takes one parameter and then sets this property on the instance to value of the parameter)
//         - `owner` (initially set to '' within constructor)
//     - **methods**
//         - `setOwner(owner)` - sets the `owner` property to the parameter passed into this function
//
//-----------------------------------------

console.log("SOLUTIONS: Making Classes:")

class Pet {
  constructor(name){
    this.name = name;
    this.owner = "";
  }
  setOwner(owner){
    this.owner = owner;
  }
}

//-------------------------------------------
//
// 1. Create a class for a `Dog`
//     - this should **inherit** the attributes from `Pet`
//     - **attributes**
//         - `price` (the constructor takes a parameter in addition to that of `Pet` and then sets this property on the instance to the value of the additional parameter)
//     - **methods**
//         - `bark()` - log "bark"
//         - `chaseTail()` - log "oh boy oh boy oh boy"
//         - `getPrice()` - return price
//
// 1. Create an instance of Dog called "Sparky" and set add all the details that need to be added to make a "complete" Dog. Run the methods to ensure that everything works.

//-----------------------------------------
class Dog extends Pet{
  constructor(name, price){
    super(name);
    this.price = price;
  }
  bark(){
    console.log("Bark!");
  }
  chaseTail(){
    console.log("oh boy oh boy oh boy");
  }
  getPrice(){
    return this.price;
  }
}

// Creating Sparky
const sparky = new Dog("Sparky", 9);

//Setting the owner
sparky.setOwner("Bill");

//looking at the sparky object
console.log(sparky);

// invoking bark method
sparky.bark();

// invoking chaseTail method
sparky.chaseTail();

// Getting the price
console.log(sparky.getPrice());

console.log("-----------------------------------------");

// 1. Create a class for a `Cat`
//     - this should inherit from `Pet`
//     - **attributes**
//         - `price` (the constructor takes a parameter in addition to that of Pet and then sets this property on the instance to the value of the additional parameter)
//     - **methods**
//         - `purr()` - log "purrrrr"
//         - `clean()` - log "cleaning"
//         - `getPrice()` - return price
//
// 1. Create an instance of Cat called "Sprinkles" and set add all the details that need to be added to make a "complete" Cat. Run the methods to ensure that everything works.

class Cat extends Pet{
  constructor(name, price){
    super(name);
    this.price = price;
  }
  purr(){
    console.log("purrrrr");
  }
  clean(){
    console.log("cleaning");
  }
  getPrice(){
    return this.price;
  }
}

// creating an instance of the Cat class
const sprinkles = new Cat("Sprinkles", 50);

// looking at all the info of the new instance
console.log(sprinkles);

// setting the owner
sprinkles.setOwner("Hannah");

// looking at all the info of the sprinkles instance
console.log(sprinkles);

// invoking purr method
sprinkles.purr();

// invoking clean method
sprinkles.clean();

// invoking getPrice method
console.log(sprinkles.getPrice());

console.log("-----------------------------------------");
//
// 1. Create a class for a `Person`
//     - **attributes**
//         - `name` - set name from parameter in constructor method
//         - `age` - initially 0
//         - `weight` - initially 0
//         - `mood` - integer starting at 0 initially
//         - `pets` - empty array initially
//         - `bankAccount` - initially set to 0
//     -  **methods**
//         - `getName()` - returns the name of the person
//         - `getAge()` - returns age
//         - `getWeight()` - returns weight
//         - `greet(other_person)` - logs a message with another person's name
//         - `eat()` - increment weight, increment mood
//         - `exercise()` - decrement weight
//         - `age()` - increment age, increment weight, decrement mood, increment bank account by 10 (birthday money)
//         - `buyPet(pet)` - push the pet object onto the `pets` array, increment mood by 10, decrement bankAccount by the value of the pet (hint: getPrice())
//
// 1. Create an instance of Person called "Jill" and set add all the details that need to be added to make a "complete" Person. Run the methods to ensure that everything works.
//

// NOTE ABOUT THIS SOLUTION: There was a mistake in the hw question where it asked you to write `age` as a method. `age` was already used as an attribute. I've change it to `birthday` for the method name.

class Person {
    constructor(name){
      this.name = name;

      this.age = 0;
      this.weight = 0;
      this.mood = 0;
      this.pets = [];
      this.bankAccount = 0;
    }
    getName(){
      return this.name;
    }
    getAge(){
      return this.age;
    }
    getWeight(){
      return this.weight;
    }
   greet(otherPerson){
     console.log("Hi " + otherPerson);
   }
   eat(){
     this.age = this.age + 1;
     this.weight = this.weight + 1;
   }
   exercise(){
     this.weight = this.weight - 1;
   }
   birthday(){
     this.age = this.age + 1;
     this.weight = this.weight + 1;
     this.mood = this.mood - 1;
     this.bankAccount = this.bankAccount + 10;
   }
   buyPet(pet){
     this.pets.push(pet);
     this.mood = this.mood + 10;
     this.bankAccount = this.bankAccount - (pet.getPrice());
    //  note: make sure that your cat and dog RETURN the price in the getPrice method and don't just console.log it so that this calculation can work.
   }
}

const jill = new Person("Jill");
console.log(jill);
console.log("----");

console.log(jill.getName());
console.log("----");

console.log(jill.getAge());
console.log("----");

console.log(jill.getWeight());
console.log("----");

jill.greet("Kristyn");
console.log("----");

jill.eat();
console.log(jill);
console.log("----");

jill.exercise();
console.log(jill);
console.log("----");

jill.birthday();
console.log(jill);
console.log("----");

//Enter a pet that has ALREADY been created into the params of our person.
jill.buyPet(sparky);
console.log(jill);
console.log("----");



console.log("-----------------------------------------");
console.log("SOLUTIONS: Create a Story:")

// ## Create a Story
//
// 1. Create at least one instance **each** of a `Dog`, `Cat`, and `Person`.

// creating new instances
const lily = new Dog("Lilly", 15);
const owen = new Cat("Owen", 1);
const kristyn = new Person("Kristyn");

// verifying the info in my terminal
console.log(lily);
console.log(owen);
console.log(kristyn);
console.log("----");

// 2. Create and code a story where you have these instances interact.

console.log(" Kristyn was a girl who had always loved animals. She asked her parents for a dog and a cat and they said no. They told her to wait until she was 18 and then she could get her own animals.");

for (let i = 1; i <=18; i ++){
  kristyn.eat();
  kristyn.birthday();
}
console.log(kristyn);
console.log("----");

console.log(" Kristyn waited, and saved, and on her 18th birthday, she found a cat named Owen. She thought he was great and he would purr at her a lot.");

owen.purr();
console.log("----");

console.log("She had to check to see if she could afford to adopt him. She checked her bank account and had enough money, so she adopted him.");
console.log("Kristyn's account: " + kristyn.bankAccount);
console.log("Owen's cost: " + owen.price);
kristyn.buyPet(owen);
console.log("----");

console.log("5 years went by and Kristyn had noticed that she was putting on some extra pounds.");

kristyn.getWeight();
console.log("----");

console.log("She thought that getting a dog might help her to exercise. She looked into her finances and saw that she could afford to adopt again.");

console.log(kristyn.bankAccount);
console.log("----");

console.log("She went to the shelter and found a dog named Lily who was chasing her tail.");

lily.chaseTail();
console.log("----");

console.log("She asked how much to adopt her, saw that she could afford to do it, and took Lily home.");
console.log(lily.price);
kristyn.buyPet(lily);
console.log(kristyn);
console.log("----");

console.log("She immediately went out for a walk with Lily and got some exercise.");

kristyn.exercise();
console.log(kristyn);
console.log("----");

console.log("At first, Owen was a little afraid of his new sister, but after a while, he was back to his old habits of cleaning himself and taking naps.");

owen.clean();
console.log("----");

console.log("Lily was a quiet dog and got along well with Owen. The only times that things would get stirred up is when the mailman would stop by for his daily delivery. Lily loved to bark at him.");

lily.bark();
console.log("----");

console.log("-----------------------------------------");
// ## CSS
//
// 1. Please watch these videos
//
//     - https://www.youtube.com/watch?v=BsuCBmzLf_U&index=21&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J
//     - https://www.youtube.com/watch?v=iQIj7Lu64M4&index=22&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J
//     - https://www.youtube.com/watch?v=GYygtVolViM&index=23&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J
//
// 2. Setup a new folder and files:
//   - Create a new folder called `layout_practice` inside your `homework` folder.
//   - Inside `layout_practice`, create an `index.html` and `style.css` file.
//   - Write your code for the exercise below in these files
//
// 3. Take a look at [this image](https://blog.red-website-design.co.uk/wp-content/uploads/2016/12/7-Web-Design-UX-Trends-for-2017-Is-Your-Site-Up-to-Date-1.jpg)
//
//   - Create this layout.
//   - The colors do not have to be exact (or even close)
//   - The fonts do not matter
//   - The images can be any image
//
// **Commit 6** <br>
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 6 - Layout Practice"
// <hr>
//
// ## Hungry for more?
//
console.log(" SOLUTION - Factories:");

// ### Reference [notes](https://github.com/ga-students/wdi-remote-gizmo/blob/master/unit_1/w03d01/instructor_notes/CLASSES_FACTORIES.md) from the lecture to complete these:
//
// 1. Create a single factory object to generate shoes
//     - The factory should have an array of shoes that it has generated
//     - A shoe should have a serial number, based on what index it is in the factory's shoes array
//
class Shoe {
  constructor(serialNumber){
    this.serialNumber = serialNumber;
  }
}
const factory = {
  shoeArray: [],
  generateShoe() {
    const newShoe = new Shoe(this.shoeArray.length);
    this.shoeArray.push(newShoe);
    return newShoe;
  }
}

// Creating shoes and verifying the serial number
const firstShoe = factory.generateShoe();
console.log(firstShoe);

const secondShoe = factory.generateShoe();
console.log(secondShoe);
console.log("----");

// 2. Create Malls & Stores
//     - Create a Store class. It should have a constructor method that is called when a new store is created. It will take, as parameters, mallName and serialNumber.
//     - Create a Mall class. A Mall should have a constructor method that is called when a new mall is created. It takes the mallName as a parameter  ("Mall of America", "Tanger Outlets", etc.).
//     - The Mall should have a `generateStore` method that creates instances of class Store. When creating an instance of class Store, it passes in its mallName as the mallName parameter to Store.
//     - The Mall should keep track of how many stores are created; passing in this number as the serialNumber to the store.
//     - Create a couple of instances of a Store to verify that it's working.
//
class Store{
  constructor(mallName, serialNumber){
    this.mallName = mallName;
    this.serialNumber = serialNumber;
  }
}
class Mall {
  constructor(mallName){
    this.storesCreated = [];
    this.mallName = mallName;
  }
  generateStore(){
    const newStore = new Store(this.mallName, this.storesCreated.length);
    this.storesCreated.push(newStore);
  }
}
// Created a new mall instance
const mallOfAmerica = new Mall("Mall of America");
console.log(mallOfAmerica);

// Created 5 stores at Mall of America
mallOfAmerica.generateStore();
mallOfAmerica.generateStore();
mallOfAmerica.generateStore();
mallOfAmerica.generateStore();
mallOfAmerica.generateStore();

// Looked at the mall (which contains a list of the stores)
console.log(mallOfAmerica);

// Created a new mall instance
const tanger = new Mall("Tanger");
console.log(tanger);

// Created 4 stores at Tanger
tanger.generateStore();
tanger.generateStore();
tanger.generateStore();
tanger.generateStore();

// Looked at the mall (which contains a list of the stores)
console.log(tanger);
