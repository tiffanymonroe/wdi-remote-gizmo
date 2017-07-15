class Person {
  constructor(name, age, eyes, hair) {

    this.name = name;
    this.legs =2;
    this.arms =2;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
  }
<<<<<<< HEAD

  greet(otherPerson){
    console.log("oh hai " + otherPerson + "!" + " my name is " + this.name + ".");
  }
  jump() {
  console.log("weeeeee!");}
}

// const me = new Person('Tiffany', 36, 'brown', 'brown');
// const sally = new Person ('Sally', 7, 'black', 'blonde');
//
//
// console.log(me);
// console.log(sally);
//
//
//
// sally.eyes = 'red';
// sally.foo = 'bar';
// console.log(sally);
//
//
// me.greet("joanne");
// sally.greet("sam");
// sally.jump();

// getHair(){
//   return this.hair;
// }
//
// setHair()


=======
  greet(otherPerson){
    console.log('oh hai ' + otherPerson + '. My name is ' + this.name);
  } //no comma as in an object
  jump() {
    console.log('weee');
  }
  getHair() {
    return this.hair;
  }
  setHair(hair){
    this.hair = hair;
  }
}

>>>>>>> 0c820cbd9a77f6606120f80cb43a0125d8f04fc0
class SuperHero extends Person {
  constructor(name, age, eyes, hair, superpower){
    super(name, age, eyes, hair);
    this.superpower = superpower;
  }
<<<<<<< HEAD
  fly(){
    console.log("It's a bird! It's a plane!");}
  greet(otherPerson) {
      console.log("Greetings " + otherPerson);
    }
  jump() {super.jump();
          this.fly();}
  }

class SuperVillain extends Person {

}

const superman = new SuperHero ('Clark Kent', 30, 'blue', 'black', 'flight');

const lex = new SuperVillain('Lex Luthor', 36, 'brown', 'bald')

console.log(superman);
console.log(lex);
superman.fly();
superman.greet("Ashley");
superman.jump();
console.log(superman);
=======
  fly() {
    console.log('up up and away');
  }
  greet(otherPerson){
    //override parent class
    console.log('Greetings ' + otherPerson);
  }
  jump() {
    //super references the parent (Person) - nothing to do with superheros
    super.jump();
    this.fly();
  }
}

// class SuperVillain extends Person {
//
// }

const superman = new SuperHero('Clark Kent', 30, 'blue', 'black', 'flight');
console.log(superman);
superman.greet('Matt')
// superman.fly();

// const luther = new SuperVillain('Lex Luther', 36, 'brown', 'bald');
// console.log(luther);

//cretes new persons (constructor)
// const me = new Person('Cathleen', 33, 'hazel', 'brown');
//matches params
// const sally = new Person();
// console.log(me);
// console.log(sally);
// console.log(typeof sally);

//object notation
// me.greet('Sam');
// sally.greet('Bob');
// sally.jump();

// me.setHair('black');
// console.log(me.getHair());
>>>>>>> 0c820cbd9a77f6606120f80cb43a0125d8f04fc0
