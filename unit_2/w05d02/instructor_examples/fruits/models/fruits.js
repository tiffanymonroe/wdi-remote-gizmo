// this array is acting as our database
const fruits = [
  {
    name: 'apple',
    color: 'green',
    readyToEat: true
  },
  {
    name: 'pear',
    color: 'green',
    readyToEat: true
  },
  {
    name: 'banana',
    color: 'green',
    readyToEat: false
  }
];

// Are models most be exported into the server file,
// so they are accessible when are server runs

module.exports = fruits;
