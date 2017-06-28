const wordBank = [];
let boxVal = document.getElementById("wordSearch").value;

document.getElementById("wordSearch").addEventListener("keydown", function(event){
  if (event.keyCode === 13) {
    // let word = boxVal;
    let word = document.getElementById("wordSearch").value
    wordBank.push(word);
    document.getElementById("wordSearch").value = "";
  };
});

document.getElementById("wordSearch").addEventListener("keyup", function(event){
  console.log("checking the key");
  // console.log(event.key);
  for (var char of wordBank) {
    if (event.key == char.charAt(0)) {
      document.getElementById("wordSearch").value = char;
    }
    else {
      console.log("not a match");
    }
  }
});
