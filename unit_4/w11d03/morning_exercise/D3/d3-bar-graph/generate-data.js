//Array of students
const students = [
    "Stephanie",
    "Kaylie",
    "Abigail",
    "Blaine",
    "Kathryn",
    "Jessica",
    "Cameron",
];

//The Randomizer Function
const student = () => { return students[ Math.floor( Math.random() * students.length )];}

//Global variables to store data from The Randomizer function and then be able to use them with D3
let dataArray   = [];
let studentObj = {};


//Function to call The Randomizer any number of times and collect the data
const collectData = ( times ) => {

  //each time collectData is called, reset studentObj and dataArray
  studentObj  = {};
  dataArray   = [];

//create an object for each student, with the properties of name and wins, wins is set to 0
  students.forEach( student => {
    studentObj.name     = student;
    studentObj.wins     = 0;
    dataArray.push( studentObj );
    studentObj = {};
  });

  //call The Randomizer function (called `student`) the number of times inputted to collectData
  for ( let i = 0; i < times; i++ ){
    //set the winning student from the randomizer to a varibale named winner
    var winner = student();
    //increase the wins inside the student object if the student has been chosen by the randomizer
    for ( let j = 0; j < students.length; j++ ){
      if( winner === dataArray[j].name ){
        dataArray[j].wins++;
      }
    }
  }
  return dataArray;
}
