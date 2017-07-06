const foo = {
  value: 10,
  getValue() {
    return this.value;
  },
  start(){
    const gameTimer = setInterval(() => {
      console.log('hi', this)
      this.value--
      if(this.value === 0){
        clearInterval(gameTimer);
        console.log('game over')
      }
    }, 1000);
  }
}

console.log(foo.getValue());


const taco = () => {
  console.log(this, ' this is with arrow functions')
}

let t = () => {
  console.log(this, 'djaklfjdlks')
}
// const count = () => {
//   console.log(this)
//   return 'hi';
// }
taco()

console.log(this, 'this is this')


