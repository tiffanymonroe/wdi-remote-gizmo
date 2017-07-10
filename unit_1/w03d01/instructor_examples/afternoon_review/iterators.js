//1. Chaining - total sheep count
const sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];

// .map - Iterator go through data and return an array of data
const sheepCountArray = sheepShearers.map((shearerInfo) => {
  return shearerInfo.sheepCount;
})

// console.log(sheepCountArray);

// reduce will combine everything that is in the array
const totalSheepShorn = sheepCountArray.reduce((sum, newValue) => {
  return sum + newValue;
});

// console.log(totalSheepShorn);

// Chain the map and reduce
const totalSheep = sheepShearers.map((shearerInfo) => {
  return shearerInfo.sheepCount;
}).reduce((sum, newValue) => {
  return sum + newValue;
});

console.log(totalSheep);
