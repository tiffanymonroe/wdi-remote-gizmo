class Person {
  constructor(name, age, eyes, hair) {
    this.name = name;
    this.legs =2;
    this.arms =2;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
  }

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


class SuperHero extends Person {
  constructor(name, age, eyes, hair, superpower){
    super(name, age, eyes, hair);
    this.superpower = superpower;
  }
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
