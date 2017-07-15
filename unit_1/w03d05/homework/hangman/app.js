// console.log("hello, it's me");
$(()=> {
const words = ["line", "stanza", "meter", "rhyme", "sound"];

const chooseWord = () => {
  const randomIndex = Math.floor(Math.random() * (6 - 0)) + 0;
  return words[randomIndex];
}

console.log(chooseWord());


}); //end window.onload
