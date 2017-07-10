class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('hi');
    }
}

class Hero extends Person {
    fightCrime(){
        super.greet();
        console.log('Take this, bad guys!');
    }
    greet(){
        console.log('Hello citizen');
    }
}

const matt = new Person('Matt', 36);
// matt.greet();

const batman = new Hero('Bruce Wayne', 41);
batman.fightCrime();
