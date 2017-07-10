class Person { //class definition
    constructor(name, age, eyes, hair){
        //create properties for each instance
        this.legs = 2;
        this.arms = 2;

        //setting instance properties to the params in the constructor
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
    }
    greet(otherPerson){ //method for person
        //reference this.name from constructor
        console.log('oh hai '+ otherPerson + '! My name is ' + this.name );
    } //additional methods don't have commas between them
    jump(){
        console.log('weeeeee!');
    }
    getHair(){
        return this.hair;
    }
    setHair(hair){
        this.hair = hair;
    }
}

class SuperHero extends Person {
    constructor(name, age, eyes, hair, superpower){
        super(name, age, eyes, hair);
        this.superpower = superpower;
    }
    fly(){
        console.log('Up up and away');
    }
    greet(otherPerson){
        console.log('Greetings ' + otherPerson);
    }
    jump(){
        super.jump(); //'super' references Parent Class
        this.fly();
    }
}

// class SuperVillain extends Person{
//
// }

const superman = new SuperHero('Clark Kent', 30, 'blue', 'black', 'flight');
console.log(superman);
// superman.jump();
// superman.greet('Matt');
// const luther = new SuperVillain('Lex Luther', 36, 'brown', 'bald');
// console.log(superman);
// console.log(luther);

// superman.fly();

// const me = new Person('Matt', 36, 'blue', 'brown'); //create a new person
// const sally = new Person('Sally', 43, 'brown', 'blue');

//object notation
// console.log(me.eyes);
// me.eyes = 'red';

// console.log(me.getHair()); //getter method
// me.setHair('black'); //setter method
// console.log(me.getHair());


// console.log(me); //log the person
// console.log(sally);

// console.log(typeof me); //data type of 'me'
// console.log(typeof sally);

// me.greet("joanne"); // call greet method
// me.greet("l33tus3r"); // call greet method
// sally.greet("billybob");
// sally.jump();
